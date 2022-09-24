import type {NextPage} from "next";
import "@fontsource/inter";

import {ChakraProvider} from "@chakra-ui/react";

import {UserInventory} from "_components/UserInventory";

import {MainLayout} from "_app/layouts";
import {theme} from "_app/layouts";

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <UserInventory />
      </MainLayout>
    </ChakraProvider>
  );
};

export default Home;
