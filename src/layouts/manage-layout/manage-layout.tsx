import React, {FC, ReactNode, useEffect, useMemo} from "react";

import {Toaster} from "react-hot-toast";
import {ArrowLeftCircle, Cpu, CreditCard, Home, LifeBuoy, Settings, Users} from "react-feather";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import clsx from "clsx";

import {humanizeRole} from "_app/utils";
import {Avatar} from "_app/primitives";
import {UserRole, useMeQuery} from "_app/generated/graphql";
import {Loader} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
}

export const ManageLayout: FC<IProps> = ({children, title}) => {
  const router = useRouter();
  const {t} = useTranslation("common");

  const userQuery = useMeQuery();

  const user = userQuery.data?.me;
  const role = user?.role;
  const loading = userQuery.loading;

  const accessGrantedList = useMemo(() => [UserRole.Creator, UserRole.Admin, UserRole.Support], []);

  const accessGranted = role && accessGrantedList.includes(role);

  // TODO: Create Router Guard instead of this later
  useEffect(() => {
    if (!loading && !accessGranted) {
      router.push("/");
    }
  }, [accessGranted, loading, router, user]);

  if (loading || !accessGranted) {
    return <Loader />;
  }

  const PAGES = [
    {
      url: "/manage",
      title: t("home"),
      disabled: false,
      icon: <Home size="18" />,
    },
    {
      url: "/manage/users",
      title: t("users"),
      disabled: false,
      icon: <Users size="18" />,
    },
    {
      url: "/manage/bots",
      title: t("bots"),
      disabled: false,
      icon: <Cpu size="18" />,
    },
    {
      url: "/manage/finance",
      title: t("finance"),
      disabled: false,
      icon: <CreditCard size="18" />,
    },
    {
      url: "/manage/tickets",
      title: t("tickets"),
      disabled: false,
      icon: <LifeBuoy size="18" />,
    },
    {
      url: "/manage/settings",
      title: t("settings"),
      disabled: false,
      icon: <Settings size="18" />,
    },
  ];

  return (
    <>
      <Head>
        <title>{title || `takeloot - ${t("manage")}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen flex-col scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="flex flex-auto flex-row">
          <aside className="w-60 border-r border-r-gray p-4">
            <div className="flex h-full w-full flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between rounded-lg p-2">
                  <Link href="/manage">
                    <div className="mr-12 text-lg font-semibold hover:cursor-pointer">takeloot</div>
                  </Link>
                </div>
                {user && (
                  <div className="group flex w-full items-center justify-between rounded-lg border border-gray bg-surface p-2">
                    {/* @ts-ignore: work in progress, will be fixed later */}
                    {user.avatar && user.name && (
                      <div className="relative flex flex-shrink-0">
                        <Avatar.Root
                          variant={Avatar.EVariant.Circle}
                          alt={user.name}
                          initials={user.name}
                          src={user.avatar}
                          online
                        />
                      </div>
                    )}
                    {user?.name && user?.role && (
                      <div className="ml-2 flex-grow truncate text-sm">
                        <div className="text-md block truncate">{user?.name}</div>
                        {/* TODO: Get role from api + dto */}
                        <div className="block truncate text-sm text-cloud-dark">{t(humanizeRole(user?.role))}</div>
                      </div>
                    )}
                  </div>
                )}
                {/* Manage menu */}
                <ul className="mt-8 flex w-full flex-col">
                  {PAGES.map((page, pageIdx) => {
                    const isActiveLink = router.pathname === page.url;

                    return (
                      <li key={pageIdx} className="mb-1 w-full">
                        <Link
                          href={page.disabled ? "#" : page.url}
                          className={clsx(
                            "mr-6 flex w-full items-center truncate rounded-lg px-3 py-2 duration-200",
                            page.disabled && "cursor-not-allowed text-cloud-dark hover:text-cloud-dark",
                            isActiveLink
                              ? "hover:white bg-blue text-white hover:bg-blue-dark"
                              : "text-cloud hover:bg-gray",
                          )}
                        >
                          {page.icon} <div className="truncate pl-2 text-sm">{page.title}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Link
                href="/"
                className={clsx(
                  "hover:white flex w-full items-center rounded-lg bg-gray px-3 py-2 text-white duration-200 hover:bg-gray-dark",
                )}
              >
                <div className="flex w-full flex-row items-center justify-center">
                  <ArrowLeftCircle size={20} className="flex" />
                  <div className="w-full truncate pl-2 text-sm">{t("back")}</div>
                </div>
              </Link>
            </div>
          </aside>
          <div className="w-full p-4">
            <div className="truncate text-xl font-bold">{title}</div>
            <div className="mt-8 rounded-lg border border-gray bg-surface p-2">{children}</div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
