import {FC} from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

export const Footer: FC = () => {
  return (
    <Flex zIndex="10" position="fixed" width="100%" height="50px" bottom="0" bg="gray.900" p="3" justify="center">
      <Box>
        <Text color="gray.50">TAKELOOT</Text>
      </Box>
    </Flex>
  );
};
