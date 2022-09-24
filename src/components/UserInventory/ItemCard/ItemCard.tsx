import {FC, useCallback, useState} from "react";

import {Box, Checkbox, Divider, Image, Text} from "@chakra-ui/react";

interface ItemCardProps {
  quality: string;
  name: string;
  price: string;
}

export const ItemCard: FC<ItemCardProps> = (props) => {
  const {quality, name, price} = props;

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, [setIsChecked]);

  return (
    <Box
      onClick={handleChecked}
      width="100%"
      display="flex"
      flexFlow="row wrap"
      alignContent="space-between"
      cursor="pointer"
      rounded="8"
      bg={isChecked ? "gray.700" : "gray.800"}
      p="4"
      h="360px"
    >
      <Box>
        <Checkbox isChecked={isChecked} borderColor="gray.500" colorScheme="gray.700"></Checkbox>
        <Image
          width="100%"
          objectFit="cover"
          src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7r--YXygECLpxIuNDztJ46SJwdsaFjSqVi3l7i9hJe47p_JzCdkvCMmtHaInhywhxBJbLFvgeveFwvEsgm-vQ/360fx360f"
          alt="CS:GO"
        />
      </Box>
      <Box width="100%">
        <Text color="gray.500">{quality}</Text>
        <Divider marginY="1" />
        <Text color="gray.500">{name}</Text>
        <Text marginTop="4" color="gray.500">
          Price {price}
        </Text>
      </Box>
    </Box>
  );
};
