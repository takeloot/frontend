import React from "react";
import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {MainLayout} from "_app/layouts/main-layout";
import {useMeQuery} from "_app/generated/graphql";
import Link from "next/link";

const Home: NextPage = () => {
  const {t} = useTranslation("common");
  const userQuery = useMeQuery();

  const user = userQuery.data?.me;

  return (
    <MainLayout>
      <div className="flex flex-col items-center pt-20 text-center align-middle">
        <div className="m-auto my-2 w-full text-6xl font-extrabold font-black tracking-tight text-gray-200">
          Sell your CS:GO skins <br /> for the good price.
        </div>
        <div className="m-auto my-10 w-full text-2xl text-gray-400">
          Your best choice to sell your skins <br />
          fast & safe
        </div>
        {!user ? (
          <Link href="/api/auth/steam?continue=">
            <div className="w-1/5 rounded-lg bg-gray py-2 px-4 text-lg hover:cursor-pointer">Login with Steam</div>
          </Link>
        ) : (
          <Link href="/sell">
            <div className="w-1/5 rounded-lg bg-gray py-2 px-4 text-lg hover:cursor-pointer">Start selling</div>
          </Link>
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
