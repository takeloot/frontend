import type {NextPage} from "next";

import {Box, ChakraProvider, Text} from "@chakra-ui/react";

import {ContentWrapper} from "../layouts";
import {Header} from "../components/Header";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <ContentWrapper justify="center" height="90vh">
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="extrabold">
            takeloot
          </Text>
          <Text fontSize="2xl">soon.</Text>
        </Box>
      </ContentWrapper>
    </ChakraProvider>
  );
};

export default Home;
