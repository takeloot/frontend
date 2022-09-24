import {FC} from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

export const Footer: FC = () => {
  return (
    <Flex bg="gray.900" p="3" justify="center">
      <Box>
        <Text color="gray.50">TAKELOOT</Text>
      </Box>
    </Flex>
  );
};
