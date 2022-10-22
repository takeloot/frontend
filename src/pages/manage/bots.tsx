import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {ManageLayout} from "_app/layouts";

const Bots: NextPage = () => {
  const {t} = useTranslation("common");

  return (
    <ManageLayout title={t("bots")}>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-lg">{t("bot_list")}</div>
        <div className="rounded-lg bg-blue py-2 px-4 duration-200 hover:cursor-pointer hover:bg-blue-dark">
          {t("add_bot")}
        </div>
      </div>
      {/* TODO: Handle empty list */}
      {/* <div>{t("bot_list_is_empty")}</div> */}
      <div className="grid w-full gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-green">В работе</div>
        </div>
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-green">В работе</div>
        </div>
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-green">В работе</div>
        </div>
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-green">В работе</div>
        </div>
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-green">В работе</div>
        </div>
        <div className="box-content flex flex-col items-center rounded-lg border-2 border-gray bg-background p-4 text-center hover:cursor-pointer hover:border-gray-light hover:bg-background-dark">
          <div className="text-lg">Pudge</div>
          <div className="pt-1 text-cloud-dark">250 скинов</div>
          <div className="pt-1 text-cloud-dark">$ 1,000 / 60,000 ₽</div>
          <div className="pt-1 text-red">Деактивирован</div>
        </div>
      </div>
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
