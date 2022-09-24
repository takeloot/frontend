import React, {FC} from "react";

import {Flex, SimpleGrid} from "@chakra-ui/react";

import {ItemCard} from "_components/UserInventory/ItemCard";

const mockItems = [
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
  {name: "Karambit | Doppler", price: "$1048", quality: "Factory new"},
  {name: "Karambit | Doppler", price: "$653", quality: "Field tested"},
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
  {name: "Karambit | Doppler", price: "$749", quality: "Minimal wear"},
];

export const UserInventory: FC = () => {
  return (
    <Flex
      bg="gray.900"
      marginX="auto"
      marginY="8"
      rounded="4"
      width={{sm: 286, sm2: 446, md: 767, lg: 959, xl: 1194}}
      direction="column"
      p="8"
    >
      <SimpleGrid columns={{xl: 5, lg: 4, md: 3, sm2: 2, sm: 1}} spacing={4}>
        {mockItems.map((el, index) => (
          <ItemCard key={index} quality={el.quality} name={el.name} price={el.price} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
