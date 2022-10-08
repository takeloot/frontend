import React, {useEffect} from "react";

import Link from "next/link";

import {useMeQuery, useUpdateConnectionStatusMutation} from "_app/generated/graphql";

import {UserProfileSkeleton} from "./user-skeleton";
import {UserProfile} from "./user-profile";

export const UserPanel = () => {
  const userQuery = useMeQuery();
  const [updateStatus] = useUpdateConnectionStatusMutation();

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

  const user = userQuery.data?.me;
  const loading = userQuery.loading;

  return (
    <div>
      {!!user && <UserProfile user={user} />}
      {loading && !user && <UserProfileSkeleton />}
      {!user && !loading && (
        <Link href="/api/auth/steam?continue=">
          <div className="rounded-lg bg-tl-gray py-2 px-4 hover:cursor-pointer">Login with Steam</div>
        </Link>
      )}
    </div>
  );
};
