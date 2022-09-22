import type {NextPage} from "next";

import {ChakraProvider, Flex, Text} from "@chakra-ui/react";

import {MainLayout} from "_app/layouts";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
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
