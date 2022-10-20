import React, {FC, ReactNode} from "react";

import {Toaster} from "react-hot-toast";
import {ArrowLeftCircle, CreditCard, Home, LifeBuoy, Settings, Users} from "react-feather";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import clsx from "clsx";

import {useMeQuery} from "_app/generated/graphql";
import {Loader, UserPanel} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
}

export const ManageLayout: FC<IProps> = ({children, title}) => {
  const router = useRouter();
  const {t} = useTranslation("common");

  const userQuery = useMeQuery();

  const user = userQuery.data?.me;
  const loading = userQuery.loading;

  if (loading) {
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
          <div className="w-1/4 border-r border-r-gray p-4">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between rounded-lg p-2">
                  <Link href="/manage">
                    <div className="mr-12 text-lg font-semibold hover:cursor-pointer">takeloot</div>
                  </Link>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray bg-surface p-2">
                  <div>
                    <div className="text-lg">{user?.name}</div>
                    {/* TODO: Get role from api + dto */}
                    <div className="text-cloud-dark">Сотрудник поддержки</div>
                  </div>
                  {/* @ts-ignore: work in progress, will be fixed later */}
                  <UserPanel user={user} />
                </div>
                {/* Manage menu */}
                <ul className="mt-8 flex w-full flex-col">
                  {PAGES.map((page, pageIdx) => {
                    const isActiveLink = router.pathname === page.url;

                    return (
                      <li key={pageIdx} className="mb-2 w-full">
                        <Link href={page.disabled ? "#" : page.url}>
                          <a
                            className={clsx(
                              "mr-6 flex w-full items-center rounded-lg px-4 py-2 duration-200",
                              page.disabled && "cursor-not-allowed text-cloud-dark hover:text-cloud-dark",
                              isActiveLink
                                ? "hover:white bg-blue text-white hover:bg-blue-dark"
                                : "text-cloud hover:bg-gray",
                            )}
                          >
                            {page.icon} <div className="pl-2">{page.title}</div>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Link href="/">
                <a
                  className={clsx(
                    "hover:white flex w-full items-center rounded-lg bg-gray px-4 py-2 text-white duration-200 hover:bg-gray-dark",
                  )}
                >
                  <div className="flex w-full flex-row items-center justify-center">
                    <ArrowLeftCircle size={18} className="flex" />
                    <div className="w-full pl-2">Вернуться на сайт</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full p-4">
            <div>{title}</div>
            <div className="mt-8 rounded-lg border border-gray bg-surface p-2">{children}</div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
