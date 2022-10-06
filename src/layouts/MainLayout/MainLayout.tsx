import React, {FC, ReactNode} from "react";

import Head from "next/head";
import {Footer} from "_components/Footer";

import {Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
}

export const MainLayout: FC<IProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || "takeloot - Продать скины CS:GO за реальные деньги с моментальным выводом"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navbar />
        <div className="mx-4 my-4 rounded-lg border border-tl-gray bg-tl-dark-gray p-2">{children}</div>
        <Footer />
      </div>
    </>
  );
};
