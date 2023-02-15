import React from "react";

import {GetStaticProps} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {initializeApollo} from "_app/services";
import {MainLayout} from "_app/layouts";
import {PUBLIC_API} from "_app/constants";
import {CartListing, SELL_LIST_QUERY, UserInventory} from "_app/components";

const Sell = () => {
  return (
    <MainLayout>
      {/*
       * 192px
       * header height + footer height + content margin (all resolutions)
       */}
      <div className="flex h-[calc(100vh-192px)]">
        <div className="grid w-full gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <UserInventory />
          <CartListing />
        </div>
      </div>
    </MainLayout>
  );
};

export default Sell;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const apolloClient = initializeApollo(null, {apiUrl: PUBLIC_API});

  await apolloClient.query({
    query: SELL_LIST_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
