import {Fragment, useCallback} from "react";

import {useRouter} from "next/router";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {Menu, Transition} from "@headlessui/react";

import {Avatar} from "_app/primitives";
import {useConfirmationDialog} from "_app/hooks";
import {UserRole, useLogoutMutation} from "_app/generated/graphql";

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

  const {name, avatar, role} = user;

  const handleLogout = useCallback(async () => {
    const confirmed = await getConfirmation({
      title: "Log out",
      message: "Do you really want to log out?",
    });

    if (confirmed) {
      logout();
    }
  }, [getConfirmation, logout]);

  const PAGES = [
    {
      url: "/profile",
      title: t("profile"),
    },
    {
      url: "#",
      title: t("refferal"),
    },
    {
      url: "#",
      title: t("transactions"),
    },
    {
      url: "/manage",
      title: t("manage"),
      roles: [UserRole.Creator, UserRole.Admin, UserRole.Support],
    },
  ];

  return (
    <Menu as="div" className="relative pt-2">
      <Menu.Button>
        <Avatar.Root variant={Avatar.EVariant.Circle} alt={name} initials={name} src={avatar} online />
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
            {PAGES.map(({url, title, roles}) => {
              if (roles && !roles.includes(role)) {
                return null;
              }
              return (
                <Menu.Item key={title}>
                  {({active}) => (
                    <Link href={url}>
                      <a
                        className={`${
                          active ? "bg-gray " : ""
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray`}
                      >
                        {t(title)}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
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
