import React, {FC, ReactNode} from "react";

import {Box} from "@chakra-ui/react";

import {Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
}

export const MainLayout: FC<IProps> = ({children}) => {
  return (
    <Box bg="gray.800" h="calc(100vh)">
      <Navbar />
      {children}
    </Box>
  );
};
