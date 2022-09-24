import React from "react";

import {Box, Flex, Select, Text} from "@chakra-ui/react";

import {UserPanel} from "../UserPanel";

export const Navbar = () => {
  return (
    <Flex bg="gray.900" p="0.7em" justify="space-between" align="center">
      <Box>
        <Text color="gray.50" fontWeight="bold" fontSize="lg">
          takeloot
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
            defaultValue="option1"
          >
            <option value="option1">English</option>
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
            defaultValue="option1"
          >
            <option value="option1">$ USD</option>
            <option value="option2">₽ RUB</option>
          </Select>
        </Flex>
        <UserPanel />
      </Flex>
    </Flex>
  );
};
