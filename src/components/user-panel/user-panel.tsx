import React, {FC, useEffect} from "react";

import {useTranslation} from "next-i18next";

import {Button} from "_app/primitives";
import {useUpdateConnectionStatusMutation} from "_app/generated/graphql";

import {UserProfile} from "./user-profile";

// @ts-ignore: work in progress, will be fixed later
export const UserPanel: FC = ({user}) => {
  const [updateStatus] = useUpdateConnectionStatusMutation();
  const {t} = useTranslation("common");

  // @ts-ignore: work in progress, will be fixed later
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

  return (
    <div>
      {!!user && <UserProfile user={user} />}
      {!user && (
        <Button href="/api/auth/steam?continue=">
          {t("login_steam")}
        </Button>
      )}
    </div>
  );
};
