import {Fragment, useCallback} from "react";

import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import {Menu, Transition} from "@headlessui/react";

import {useConfirmationDialog} from "_app/hooks";
import {useLogoutMutation} from "_app/generated/graphql";

// @ts-ignore: work in progress, will be fixed later
export const UserProfile = ({user}) => {
  const router = useRouter();
  const {getConfirmation} = useConfirmationDialog();
  const {t} = useTranslation("common");

  const [logout] = useLogoutMutation({
    onCompleted: () => {
      router.push("/api/auth/logout");
    },
  });

  const {name, avatar} = user;

  const handleLogout = useCallback(async () => {
    const confirmed = await getConfirmation({
      title: "Log out",
      message: "Do you really want to log out?",
    });

    if (confirmed) {
      logout();
    }
  }, [getConfirmation, logout]);

  return (
    <Menu as="div" className="relative pt-2">
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
        <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray rounded-md bg-surface shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <Menu.Item>
              <div
                className="
                  group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                {name}
              </div>
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <Link href="/profile">
                  <a
                    className={`${
                      active ? "bg-gray " : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray`}
                  >
                    {t("profile")}
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${active ? "bg-gray " : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {t("refferal")}
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${active ? "bg-gray " : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {t("transactions")}
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="p-2">
            <Menu.Item>
              {({active}) => (
                <button
                  className={`${
                    active ? "bg-gray text-red" : "text-red"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={handleLogout}
                >
                  {t("logout")}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
