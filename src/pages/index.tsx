import type { NextPage } from 'next';
import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { ContentWrapper } from "../layout";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <ContentWrapper justify="center" height="90vh" >
        <Box textAlign="center" >
          <Text fontSize="6xl" fontWeight="extrabold" >takeloot</Text>
          <Text fontSize="2xl" >soon.</Text>
        </Box>
      </ContentWrapper>
    </ChakraProvider>
  )
}

export default Home
