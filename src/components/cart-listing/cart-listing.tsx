import React, {FC, useCallback, useMemo} from "react";

import toast from "react-hot-toast";
import {Trash} from "react-feather";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import clsx from "clsx";
import {useQuery} from "@apollo/client";

import {Skin, useCreateSellMutation, useMeQuery} from "_app/generated/graphql";

import {SELL_LIST_QUERY, updateSellList} from "../user-inventory";

export const CartListing: FC = () => {
  const {t} = useTranslation("common");

  const {data: dataSellList} = useQuery(SELL_LIST_QUERY);
  const userQuery = useMeQuery();
  const [createSell, {loading}] = useCreateSellMutation();

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

  // TODO: toast from hoc or hook later
  const successNotify = useCallback(() => {
    toast.success(t("trade_sent"), {
      duration: 1500,
      style: {
        borderRadius: "0.5rem",
        background: "#1E1F27",
        color: "#FFFFFF",
      },
    });
  }, [t]);

  const handleCreateSell = useCallback(async () => {
    if (!user) return;

    const {data} = await createSell({
      variables: {
        dto: {
          items,
        },
        userId: user?.id,
      },
    });

    // TODO: Add error handling later

    if (data?.createSell) {
      updateSellList([]);
      successNotify();
    }
  }, [createSell, items, successNotify, user]);

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
                    <Image src={skin.img || skin.steamImg} alt="CS:GO" layout="fill" objectFit="contain" />
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
          <div
            onClick={handleCreateSell}
            className="rounded-lg bg-blue px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-dark"
          >
            {t(loading ? "loading" : "sell")}
          </div>
        </div>
      )}
    </div>
  );
};
