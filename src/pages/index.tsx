import type { NextPage } from 'next';
import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Flex align="center" justify="center" height="100vh" >
        <Box textAlign="center" >
          <Text fontSize="6xl" fontWeight="extrabold" >takeloot</Text>
          <Text fontSize="2xl" >soon.</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default Home
