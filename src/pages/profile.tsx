import {useCallback, useEffect, useState} from "react";

import type {GetStaticProps, NextPage} from "next";

import toast from "react-hot-toast";
import {Check, Loader as LoaderIcon, X} from "react-feather";
import Link from "next/link";
import Image from "next/image";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {MainLayout} from "_app/layouts/main-layout";
import {useMeQuery, useUpdateMyTradeUrlMutation} from "_app/generated/graphql";
import {STEAM_TRADE_URL_REGEX} from "_app/constants";
import {CopyField, Loader} from "_app/components";

const Profile: NextPage = () => {
  const {t} = useTranslation("common");
  const userQuery = useMeQuery();

  const [tradeUrlIsError, setTradeUrlIsError] = useState(false);
  const [tradeUrl, setTradeUrl] = useState(userQuery.data?.me.tradeURL);

  const [updateMyTradeUrlMutation, {loading}] = useUpdateMyTradeUrlMutation();

  const userLoading = userQuery.loading;
  const tradeUrlLoading = loading;

  const user = userQuery.data?.me;
  const name = user?.name;
  const avatar = user?.avatar;
  const id = user?.id;
  const steamId = user?.profiles?.[0].serviceId;

  useEffect(() => {
    setTradeUrl(userQuery.data?.me.tradeURL);
  }, [userQuery.data?.me.tradeURL]);

  const handleTradeUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const tradeURLValue = e.target.value;
    setTradeUrl(tradeURLValue);

    if (!tradeURLValue || !tradeURLValue.match(STEAM_TRADE_URL_REGEX)) {
      return setTradeUrlIsError(true);
    }

    setTradeUrlIsError(false);
  }, []);

  const handleTradeUrlClear = useCallback(() => {
    setTradeUrl("");
  }, []);

  const successNotify = useCallback(() => {
    toast.success(t("trade_url_successfully_updated"), {
      duration: 1500,
      style: {
        borderRadius: "0.5rem",
        background: "#1E1F27",
        color: "#FFFFFF",
      },
    });
  }, [t]);

  const errorNotify = useCallback(() => {
    toast.error(t("trade_url_update_failed"), {
      duration: 1500,
      style: {
        borderRadius: "0.5rem",
        background: "#1E1F27",
        color: "#FFFFFF",
      },
    });
  }, [t]);

  const handleTradeUrlSave = useCallback(async () => {
    if (!tradeUrlIsError && tradeUrl) {
      const {data} = await updateMyTradeUrlMutation({
        variables: {
          tradeURL: tradeUrl,
        },
        fetchPolicy: "no-cache",
        update: (cache) => {
          cache.evict({});
        },
      });

      const tradeUrlUpdated = data?.updateMyTradeUrl;

      if (tradeUrlUpdated && !tradeUrlIsError) {
        return successNotify();
      }
    }

    return errorNotify();
  }, [errorNotify, successNotify, tradeUrl, tradeUrlIsError, updateMyTradeUrlMutation]);

  if (userLoading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {avatar && name && (
          <div className="flex flex-row items-start justify-between rounded-lg border border-gray bg-surface p-2">
            <div className="flex flex-row items-center">
              <Image className="rounded-full" src={avatar} alt={name} height="40" width="40" loading="lazy" />
              <div className="ml-4">{name}</div>
            </div>
            {!!id && <CopyField title="id" text={id} />}
          </div>
        )}
        <div className="flex flex-col rounded-lg border border-gray bg-surface p-2">
          <div className="flex flex-row items-center justify-between">
            <div>{t("steam_account")}</div>
            {!!steamId && <CopyField title="steam id" text={steamId} />}
          </div>
          <div className="flex flex-row items-center align-middle">
            <div className="flex flex-auto flex-col">
              <label className="my-4" htmlFor="tradeUrl">
                <span>{t("trade_url")}</span>
                <Link href="https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-blue hover:cursor-pointer hover:text-blue-dark"
                  >
                    {t("find_trade_url")}
                  </a>
                </Link>
              </label>
              <div className="flex flex-row">
                <div className="relative flex w-full">
                  <input
                    onChange={handleTradeUrlChange}
                    value={tradeUrl || ""}
                    className="block h-10 w-full rounded-lg border border-gray-light bg-gray p-2 pr-14 text-sm text-cloud focus:outline-none"
                    type="text"
                    id="tradeUrl"
                    name="tradeUrl"
                    placeholder={t("trade_url_placeholder")}
                    required
                    size={10}
                  />
                  <div
                    onClick={handleTradeUrlClear}
                    className="absolute right-0 bottom-0 flex h-10 w-12 items-center justify-center rounded-lg
                    bg-gray-light align-middle hover:cursor-pointer"
                  >
                    <X height={16} color="#FFFFFF" />
                  </div>
                </div>
                <div
                  onClick={handleTradeUrlSave}
                  className="ml-3 flex h-10 w-12 items-center justify-center rounded-lg
                    bg-gray-light align-middle hover:cursor-pointer"
                >
                  {!tradeUrlLoading ? <Check height={16} /> : <LoaderIcon height={16} />}
                </div>
              </div>
              {!!tradeUrlIsError && <div className="my-4 text-red">{t("trade_url_is_not_valid")}</div>}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
