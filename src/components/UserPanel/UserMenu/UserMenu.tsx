import React, {FC} from "react";

import {
  Avatar,
  Button,
  Box,
  Divider,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SkeletonCircle,
} from "@chakra-ui/react";

interface UserMenuProps {
  isShowing: boolean;
  avatar?: string | null;
  name?: string | null;
}

export const UserMenu: FC<UserMenuProps> = (props) => {
  const {isShowing, avatar, name} = props;

  if (!!isShowing && avatar)
    return (
      <Popover>
        <PopoverTrigger>
          <Box h="10" w="10">
            <Avatar src={avatar} h="10" w="10" mr="0.5em" />
          </Box>
        </PopoverTrigger>
        <PopoverContent width="12em" border="none" bg="gray.700" color="white">
          <PopoverBody>
            <Box textAlign="center" width="100%">
              {name || "User"}
            </Box>
            <Divider marginY="2" />
            <Button _hover={{background: "gray.800"}} width="100%" variant="ghost">
              Личный кабинет
            </Button>
            <Button _hover={{background: "gray.800"}} width="100%" variant="ghost">
              Транзакции
            </Button>
            <Divider marginY="2" />
            <Button _hover={{background: "gray.800"}} width="100%" color="red" variant="ghost">
              Выйти
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );

  return <SkeletonCircle h="10" w="10" mr="0.5em" />;
};
