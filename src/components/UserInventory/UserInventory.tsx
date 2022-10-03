import React, {FC} from "react";

import {mockItems} from "_mocks/InventoryMock";
import {ItemCard} from "_components/UserInventory/ItemCard";
import {SimpleGrid} from "@chakra-ui/react";

export const UserInventory: FC = () => {
  return (
    <SimpleGrid overflowY="auto" padding="4" columns={{xxl: 8, xl: 6, lg: 5, md: 4, sm2: 3, sm: 2}} spacing={1}>
      {mockItems.map((el, index) => (
        <ItemCard key={index} quality={el.quality} name={el.name} price={el.price} />
      ))}
    </SimpleGrid>
  );
};
