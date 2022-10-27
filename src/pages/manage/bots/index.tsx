import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {Cpu} from "react-feather";
import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import clsx from "clsx";

import {ManageLayout} from "_app/layouts";
import {useSteamBotsQuery} from "_app/generated/graphql";

const Bots: NextPage = () => {
  const {t} = useTranslation("common");
  const {loading, data} = useSteamBotsQuery();

  const steamBots = data?.steamBots;

  return (
    <ManageLayout title={t("bots")}>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-lg">{t("bot_list")}</div>
        <Link href="/manage/bots/add">
          <div className="rounded-lg bg-blue py-2 px-4 duration-200 hover:cursor-pointer hover:bg-blue-dark">
            {t("add_bot")}
          </div>
        </Link>
      </div>
      {!!loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="mt-4 text-lg text-cloud-dark">{t("loading")}</div>
        </div>
      )}
      {!steamBots?.length && (
        <div className="flex flex-col items-center justify-center py-10">
          <Cpu size="45" strokeWidth="1" color="#D2D7DF" />
          <div className="mt-4 text-lg text-cloud-dark">{t("bot_list_is_empty")}</div>
        </div>
      )}
      {!!steamBots?.length && (
        <div className="grid w-full gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {steamBots.map((bot) => (
            <div
              key={bot.id}
              className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark"
            >
              <div className="text-lg">{bot.name || bot.accountName}</div>
              <div className="pt-1 text-cloud-dark">0 скинов</div>
              <div className="pt-1 text-cloud-dark">$ 0,01 / 0,01 ₽</div>
              <div className={clsx("pt-1", bot.isDeactivated ? "text-red" : "text-green")}>
                {t(bot.isDeactivated ? "deactivated" : "at_work")}
              </div>
            </div>
          ))}
        </div>
      )}
    </ManageLayout>
  );
};

export default Bots;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
