import React, { FC } from 'react';
import { Text } from "@chakra-ui/react";

import { ContentWrapper } from "../../layout";
import { RightSideHeader } from "../RightSideHeader";

import style from './Header.module.css';


export const Header: FC = () => {
  return <header className={style.Head}>
    <ContentWrapper>
      <Text fontSize="2xl" color="white" >
        takeloot
      </Text>
      <RightSideHeader />
    </ContentWrapper>
  </header>
}
