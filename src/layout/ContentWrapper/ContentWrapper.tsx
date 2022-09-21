import { FC, ReactNode } from 'react';
import { Flex } from "@chakra-ui/react";

interface wrapperProps {
  children: ReactNode;
  alignItems?: 'center' | 'start' | 'end' | 'stretch';
  justify?: 'center' | 'space-between' | 'space-around';
  height?: string;
}

export const ContentWrapper: FC<wrapperProps> = (props) => {
  const { children, alignItems, justify, height } = props;
  return (
  <Flex
    align={ alignItems }
    justify={ justify }
    minWidth="1200px"
    height={height}
    px="32px"
  >
    { children }
  </Flex>)
}

ContentWrapper.defaultProps = {
  alignItems: 'center',
  justify: 'space-between',
  height: '100%',
}
