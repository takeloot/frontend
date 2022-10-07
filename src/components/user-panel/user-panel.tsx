import React, {Fragment, useEffect} from "react";

import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {Menu, Transition} from "@headlessui/react";

import {useLogoutMutation, useMeQuery, useUpdateConnectionStatusMutation} from "_app/generated/graphql";

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
  const loading = userQuery.loading;
  const name = user?.name;
  const avatar = user?.avatar;

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

// @ts-ignore: work in progress
export const UserProfile = ({user}) => {
  const router = useRouter();

  const {name, avatar} = user;

  const [logout] = useLogoutMutation({
    onCompleted: () => {
      router.push("/api/auth/logout");
    },
  });

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <Image className="rounded-full" src={avatar} alt={name} height="40" width="40" loading="lazy" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right divide-y divide-tl-gray rounded-md bg-tl-dark-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-tl-gray " : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-tl-gray " : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Referral
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-tl-gray " : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Transactions
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-tl-gray" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Promo code
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-tl-gray text-tl-red" : "text-tl-red"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => logout()}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export const UserProfileSkeleton = () => {
  return (
    <Menu as="div" className="relative max-h-10">
      <Menu.Button>
        <div className="h-10 w-10 rounded-full bg-tl-dark-gray" />
      </Menu.Button>
    </Menu>
  );
};
