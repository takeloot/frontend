import React, {FC, useEffect} from "react";

import Link from "next/link";
import {useTranslation} from "next-i18next";

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
        <Link href="/api/auth/steam?continue=">
          <div className="rounded-lg bg-blue py-2 px-4 duration-200 hover:cursor-pointer hover:bg-blue-dark">
            {t("login_steam")}
          </div>
        </Link>
      )}
    </div>
  );
};
