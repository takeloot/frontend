import Head from "next/head";
import React, {FC, ReactNode} from "react";

import {Footer} from "_components/Footer";
import {Box} from "@chakra-ui/react";

import {Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
}

export const MainLayout: FC<IProps> = ({children, title}) => {
  return (
    <Box bg="gray.800" h="calc(100%)">
      <Head>
        <title>{title || "takeloot - Продать скины CS:GO за реальные деньги с моментальным выводом"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
