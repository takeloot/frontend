import React, {Fragment, useState} from "react";

import Link from "next/link";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Listbox, Transition} from "@headlessui/react";

import {useMeQuery} from "_app/generated/graphql";
import {CURRENCIES, LANGUAGES} from "_app/constants";

import {UserPanel} from "../user-panel";
import {Loader} from "../loader";

export const Navbar = () => {
  const userQuery = useMeQuery();

  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [currency, setCurrency] = useState(CURRENCIES[0]);

  const user = userQuery.data?.me;
  const loading = userQuery.loading;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-row items-center justify-between px-4 py-3">
      <Link href="/">
        <div className="hover:cursor-pointer">takeloot</div>
      </Link>
      <div className="flex flex-row items-center">
        <div className="mr-4 w-24">
          <Listbox value={language} onChange={setLanguage}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-surface py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud sm:text-sm">
                <span className="block truncate">{language.toUpperCase()}</span>
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
                  {LANGUAGES.map((language, languageIdx) => (
                    <Listbox.Option
                      key={languageIdx}
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
