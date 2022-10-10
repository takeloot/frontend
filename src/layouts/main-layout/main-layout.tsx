import React, {FC, ReactNode} from "react";

import Head from "next/head";
import {useTranslation} from "next-i18next";

import {Footer, Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
}

export const MainLayout: FC<IProps> = ({children, title, withoutHeader = false, withoutFooter = false}) => {
  const {t} = useTranslation("common");

  return (
    <>
      <Head>
        <title>{title || `takeloot - ${t("sell_csgo_skins")}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen flex-col scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-thumb-rounded-full">
        <div className="flex-auto">
          {!withoutHeader && <Navbar />}
          <div className="m-4">{children}</div>
        </div>
        {!withoutFooter && <Footer />}
      </div>
    </>
  );
};
