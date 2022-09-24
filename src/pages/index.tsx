import type {NextPage} from "next";

import {ChakraProvider, Flex, Text} from "@chakra-ui/react";
import "@fontsource/inter";

import {MainLayout} from "_app/layouts";
import {theme} from "_app/layouts";

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Flex direction="column" p="1em">
          <Text fontSize="md" fontWeight="bold" color="gray.500">
            Soon.
          </Text>
        </Flex>
      </MainLayout>
    </ChakraProvider>
  );
};

export default Home;
