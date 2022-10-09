import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {MainLayout} from "_app/layouts/main-layout";

const Home: NextPage = () => {
  const {t} = useTranslation("common");

  return (
    <MainLayout>
      <div className="rounded-lg border border-gray bg-surface p-2">
        <div className="text-lg">{t("sell_csgo_skins")}</div>
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
