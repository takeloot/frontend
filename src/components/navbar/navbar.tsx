import React, {Fragment, useEffect, useState} from "react";

import {useRouter} from "next/router";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {clsx} from "clsx";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Listbox, Transition} from "@headlessui/react";

import {randomInteger} from "_app/utils";
import {useMeQuery} from "_app/generated/graphql";
import {CURRENCIES} from "_app/constants";

import {UserPanel} from "../user-panel";
import {Loader} from "../loader";

export const Navbar = () => {
  const router = useRouter();
  const userQuery = useMeQuery();
  const {t} = useTranslation("common");

  const [language, setLanguage] = useState(router.locale);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  // TODO: Get from data of useOnlineQuery hook when will be done on backend
  const [online, setOnline] = useState(randomInteger(650, 750));

  const user = userQuery.data?.me;
  const loading = userQuery.loading;

  // TODO: Delete after we can get online from useOnlineQuery
  useEffect(() => {
    const id = setInterval(() => setOnline(() => randomInteger(650, 750)), 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const PAGES = [
    {
      url: "/trade",
      title: t("trade"),
      disabled: true,
    },
    {
      url: "/store",
      title: t("store"),
      disabled: true,
    },
    {
      url: "/sell",
      title: t("sell"),
      disabled: !user,
    },
    {
      url: "/faq",
      title: t("faq"),
      disabled: true,
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-row items-center justify-between px-4 py-3">
      <div className="flew-row flex items-center">
        <Link href="/">
          <div className="mr-12 text-lg font-semibold hover:cursor-pointer">takeloot</div>
        </Link>

        <ul className="flex flex-row">
          {PAGES.map((page, pageIdx) => {
            const isActiveLink = router.pathname === page.url;

            return (
              <li key={pageIdx}>
                <Link href={page.disabled ? "#" : page.url}>
                  <a
                    className={clsx(
                      isActiveLink && "text-blue hover:text-blue",
                      page.disabled && "cursor-not-allowed text-cloud-dark hover:text-cloud-dark",
                      "mr-6 text-sm font-medium uppercase text-cloud hover:text-blue-light",
                    )}
                  >
                    {page.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row items-center align-middle">
        <div className="mr-4 mt-1 flex flex-row items-center align-middle">
          <div className="mr-2 flex h-2 w-2  animate-pulse rounded-full bg-green-dark align-middle" />
          <div className="text-sm font-bold text-green-dark">{online}</div>
        </div>
        <div className="mr-4 w-24">
          <Listbox value={language} onChange={setLanguage}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-surface py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud sm:text-sm">
                <span className="block truncate">{language?.toUpperCase()}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-surface py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {router.locales?.map((language, languageIdx) => (
                    <Link href={router.asPath} locale={language} key={languageIdx}>
                      <a>
                        <Listbox.Option
                          className={({active}) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-gray text-white" : "text-white"
                            }`
                          }
                          value={language}
                        >
                          {({selected}) => (
                            <>
                              <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                {language.toUpperCase()}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      </a>
                    </Link>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="mr-4 w-24">
          <Listbox value={currency} onChange={setCurrency}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-surface py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud sm:text-sm">
                <span className="block truncate">{currency.toUpperCase()}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-surface py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {CURRENCIES.map((currency, currencyIdx) => (
                    <Listbox.Option
                      key={currencyIdx}
                      className={({active}) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-gray text-white" : "text-white"
                        }`
                      }
                      value={currency}
                    >
                      {({selected}) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {currency.toUpperCase()}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        {/* @ts-ignore: work in progress, will be fixed later */}
        <UserPanel user={user} />
      </div>
    </div>
  );
};
