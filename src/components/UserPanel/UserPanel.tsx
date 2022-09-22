import React, {useEffect} from "react";

import Link from "next/link";
import {Avatar, Link as ChakraLink} from "@chakra-ui/react";

import {useMeQuery, useUpdateConnectionStatusMutation} from "_app/generated/graphql";

export const UserPanel = () => {
  const userQuery = useMeQuery();
  const [updateStatus] = useUpdateConnectionStatusMutation();

  // @ts-ignore: FIX LATER
  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        updateStatus();
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [updateStatus]);

  const user = userQuery.data?.me;
  const name = user?.name;
  const avatar = user?.avatar;

  return (
    <>
      {!!user && <Avatar name={name || ""} src={avatar || ""} h="10" w="10" mr="0.5em" />}
      {!user && (
        <Link href="/api/auth/steam?continue=">
          <ChakraLink
            bg="blue.700"
            color="gray.50"
            borderRadius="0.25em"
            px="0.85em"
            py="0.5em"
            fontSize="md"
            _hover={{textDecoration: "none"}}
            display="inline-block"
          >
            Login with Steam
          </ChakraLink>
        </Link>
      )}
    </>
  );
};
