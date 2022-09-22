import React from "react";

import Link from "next/link";
import {Box, Link as ChakraLink, Flex, Select, Text} from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex bg="gray.900" p="0.7em" justify="space-between" align="center">
      <Box>
        <Text color="gray.50" fontWeight="bold" fontSize="lg">
          Takeloot
        </Text>
      </Box>
      <Flex align="center">
        <Flex>
          <Select
            color="gray.50"
            borderColor="gray.800"
            bg="gray.800"
            outline="none"
            _hover={{borderColor: "gray.800"}}
            mr="0.5em"
            w="35"
          >
            <option value="option1" selected>
              English
            </option>
            <option value="option2">Русский</option>
          </Select>
          <Select
            color="gray.50"
            borderColor="gray.800"
            bg="gray.800"
            outline="none"
            _hover={{borderColor: "gray.800"}}
            mr="0.5em"
            w="35"
          >
            <option value="option1" selected>
              $ USD
            </option>
            <option value="option2">₽ RUB</option>
          </Select>
        </Flex>
        <Link href="#">
          <ChakraLink
            bg="blue.700"
            color="gray.50"
            borderRadius="0.25em"
            px="0.85em"
            py="0.5em"
            fontSize="md"
            _hover={{textDecoration: "none"}}
            display="inline-block"
          >
            Login with Steam
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
};
