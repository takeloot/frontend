import React, {FC, useCallback, useMemo, useState} from "react";

import toast from "react-hot-toast";
import {ArrowRight, Clock, Trash} from "react-feather";
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import dayjs from "dayjs";
import clsx from "clsx";
import {useQuery} from "@apollo/client";

import {Button, Dialog} from "_app/primitives";
import {
  Skin,
  useCreateSellMutation,
  useGetSellQuery,
  useMeQuery,
  useSellStatusChangedSubscription,
} from "_app/generated/graphql";
import {toastStyle} from "_app/constants/toast";

import {SELL_LIST_QUERY, updateSellList} from "../user-inventory";

export const CartListing: FC = () => {
  const {t} = useTranslation("common");

  const [isTradeProcessing, setIsTradeProcessing] = useState(false);

  const {data: dataSellList} = useQuery(SELL_LIST_QUERY);
  const userQuery = useMeQuery();
  const [createSell, {loading, data: createSellData, error}] = useCreateSellMutation();

  const sellQuery = useGetSellQuery({
    variables: {
      // @ts-ignore: I'll fix it later
      id: createSellData?.createSell.id,
    },
    skip: !createSellData?.createSell.id,
  });

  useSellStatusChangedSubscription({
    variables: {
      // @ts-ignore: I'll fix it later
      id: createSellData?.createSell.id,
    },
    skip: !createSellData?.createSell.id,
    onData: ({data}) => {
      console.log("SUB?");

      if (!data.data) return;

      const sellStatusChanged = data.data.sellStatusChanged;

      // @ts-ignore: I'll fix it later
      sellQuery.updateQuery((prev) => {
        return {
          ...prev,
          getSell: {
            ...prev.getSell,
            status: sellStatusChanged.status,
          },
        };
      });
    },
  });

  const selectedList = dataSellList.sellList;
  const user = userQuery.data?.me;

  const handleDeselect = useCallback(
    (skin: Skin) => {
      const selectedUpdated = selectedList.filter((item: Skin) => item.id !== skin.id);
      updateSellList(selectedUpdated);
    },
    [selectedList],
  );

  const lastSkinId = useMemo(() => selectedList.length && selectedList[selectedList.length - 1].id, [selectedList]);

  const items = useMemo(
    () =>
      selectedList.map((skin: Skin) => ({
        id: skin.id,
        price: skin.price || 1,
      })),
    [selectedList],
  );

  const trade = useMemo(() => createSellData?.createSell, [createSellData?.createSell]);

  const onTradeDialogChange = useCallback(() => {
    setIsTradeProcessing((prev) => !prev);
    trade && updateSellList([]);
  }, [trade]);

  const handleCreateSell = useCallback(async () => {
    if (!user) return;

    onTradeDialogChange();

    try {
      const {data} = await createSell({
        variables: {
          dto: {
            items,
          },
        },
      });

      if (data?.createSell) {
        toast.success(t("trade_sent"), toastStyle);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.message, toastStyle);
    }
  }, [createSell, items, onTradeDialogChange, t, user]);

  return (
    <div className="relative flex h-full max-h-screen flex-col overflow-auto rounded-lg border border-gray bg-surface">
      <div className="text-medium px-3 py-4 text-2xl">{t("sell_list")}</div>
      {!selectedList.length && (
        <div className="flex h-full w-full items-center">
          <div className="flex w-full flex-col items-center pb-12">
            <div className="flex w-full flex-col items-center pb-12">
              <div>{t("sell_list_is_empy")}</div>
              <div className="text-cloud-dark">{t("add_items_to_list")}</div>
            </div>
          </div>
        </div>
      )}
      {!!selectedList.length && (
        <div className="scrollbar-thumb-rounded-ful mb-20 scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
          <div>
            {selectedList.map((skin: Skin) => (
              <div
                key={skin.id}
                className={clsx(
                  "mx-2 box-content flex flex-row justify-between rounded-lg border border-gray bg-background hover:bg-background-light",
                  lastSkinId === skin.id ? "mb-0" : "mb-2",
                )}
              >
                <div className="flex flex-row items-center px-4">
                  <div className="relative mr-4 h-[100px] w-[100px] text-center">
                    <Image
                      src={skin.img || skin.steamImg}
                      alt="CS:GO"
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL={skin.img || skin.steamImg}
                    />
                  </div>
                  <div>{skin.steamName}</div>
                </div>
                <div
                  onClick={() => handleDeselect(skin)}
                  className="flex items-center rounded-lg px-4 duration-200 hover:cursor-pointer hover:bg-red-lightest"
                >
                  <Trash size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!!selectedList.length && (
        <div className="absolute bottom-0 flex w-full flex-row items-center justify-between bg-surface px-3 py-4">
          <div className="flex flex-row items-center">
            <div className="mr-6">
              <span className="text-cloud-dark">{t("total_amount")}: </span>
              <span>0.1 ₽</span>
            </div>
            <div>
              <span className="text-cloud-dark">{t("you_will_get")}: </span>
              <span>0.1 ₽</span>
            </div>
          </div>
          <Button onClick={handleCreateSell}>{t(loading ? "loading" : "sell")}</Button>
          <Dialog.Root open={isTradeProcessing} onOpenChange={onTradeDialogChange}>
            <Dialog.Title>{t("trade_process")}</Dialog.Title>
            {!!loading && <div className="mt-4 mb-72">{t("loading")}</div>}
            {!loading && error && <div className="mt-4 mb-72">{error?.message}</div>}
            {!error && !loading && (
              <div className="mt-4 mb-72 flex flex-row items-center justify-between rounded-lg bg-gray p-2">
                <div className="flex w-auto flex-auto flex-row items-center">
                  <div className="mr-2 flex items-center justify-center rounded-lg bg-surface p-3">
                    <Clock size="18" />
                  </div>
                  {!!loading && <div>{t("looking_for_a_free_bot")}</div>}
                  {!loading && createSellData && (
                    <div>
                      <div>{trade?.steamBot.name}</div>
                      <div className="text-cloud-dark">{dayjs(trade?.steamBot.createdAt).format("DD/MM/YYYY")}</div>
                    </div>
                  )}
                </div>
                <div className="flex flex-auto flex-row items-center">
                  <div className="flex flex-row">
                    {selectedList.map(
                      (skin: Skin, idx: number) =>
                        idx <= 2 && (
                          <div
                            key={skin.id}
                            className={clsx("mr-2 box-content flex flex-row justify-between rounded-lg bg-surface")}
                          >
                            <div className="flex flex-row items-center justify-center px-4">
                              <div className="relative h-[64px] w-[36px] text-center">
                                <Image
                                  src={skin.img || skin.steamImg}
                                  alt="CS:GO"
                                  layout="fill"
                                  objectFit="scale-down"
                                  placeholder="blur"
                                  blurDataURL={skin.img || skin.steamImg}
                                />
                              </div>
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                  <div className="ml-2 mr-2 flex items-center justify-center rounded-lg bg-surface p-3">
                    <ArrowRight size="18" />
                  </div>
                </div>
                {!loading && (
                  <div className="flex flex-row">
                    <Link href={`steam://url/ShowTradeOffer/${trade?.tradeId}`} target="_blank" rel="noreferrer">
                      <Button className="mr-2">Steam</Button>
                    </Link>
                    <Link
                      href={`https://steamcommunity.com/tradeoffer/${trade?.tradeId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>{t("browser")}</Button>
                    </Link>
                  </div>
                )}
                {!!loading && <div className="mr-2">{t("making_an_offer")}</div>}
              </div>
            )}
          </Dialog.Root>
        </div>
      )}
    </div>
  );
};
