import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {Button} from "_app/primitives";
import {MainLayout} from "_app/layouts/main-layout";
import {useMeQuery} from "_app/generated/graphql";

const Home: NextPage = () => {
  const {t} = useTranslation("common");
  const userQuery = useMeQuery();

  const user = userQuery.data?.me;

  return (
    <MainLayout>
      <div className="flex flex-col items-center pt-20 text-center align-middle">
        <div className="m-auto my-2 w-full text-6xl font-black tracking-tight text-gray-200">
          {t("sell_csgo_skins")}
          <br />
          {t("good_price")}
        </div>
        <div className="m-auto my-10 w-full text-2xl text-gray-400">
          {t("best_choice")}
          <br />
          {t("fast_safe")}
        </div>
        {!user ? (
          <Button href="/api/auth/steam?continue=">
            {t("login_steam")}
          </Button>
        ) : (
          <Button href="/sell">{t("start_selling")}</Button>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
