import React, {FC, ReactNode} from "react";

import Head from "next/head";

import {Footer, Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
  withStyle?: boolean;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
}

export const MainLayout: FC<IProps> = ({
  children,
  title,
  withoutHeader = false,
  withoutFooter = false,
  withStyle = false,
}) => {
  return (
    <>
      <Head>
        <title>{title || "takeloot - Продать скины CS:GO за реальные деньги с моментальным выводом"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen flex-col">
        <div className="flex-auto">
          {!withoutHeader && <Navbar />}
          <div className={withStyle ? "my-4 mx-4" : "mx-4 my-4"}>{children}</div>
        </div>
        {!withoutFooter && <Footer />}
      </div>
    </>
  );
};
