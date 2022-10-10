import React from "react";

import {GetStaticProps} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {MainLayout} from "_app/layouts";
import {CartListing, UserInventory} from "_app/components";

const Sell = () => {
  return (
    <MainLayout>
      {/*
       * 192px
       * header height + footer height + content margin (all resolutions)
       */}
      <div className="flex h-[calc(100vh-192px)]">
        <div className="grid w-full gap-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          <UserInventory />
          <CartListing />
        </div>
      </div>
    </MainLayout>
  );
};

export default Sell;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
