import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {ManageLayout} from "_app/layouts";

const Tickets: NextPage = () => {
  const {t} = useTranslation("common");

  return (
    <ManageLayout title={t("tickets")}>
      <div>{t("tickets")}</div>
    </ManageLayout>
  );
};

export default Tickets;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
