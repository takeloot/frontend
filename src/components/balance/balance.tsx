import {FC} from "react";

import {useTranslation} from "next-i18next";
import {Menu} from "@headlessui/react";

const {Button, Item, Items} = Menu;

interface IBalanceProps {
  currency: string;
}

export const Balance: FC<IBalanceProps> = ({currency}) => {
  const {t} = useTranslation("common");

  const currentCur = () => {
    switch (currency) {
    case "usd":
      return "$";
    case "rub":
      return "₽";
    default:
      return "₽";
    }
  };

  return (
    <Menu as="div" className="relative z-50 mr-4 pt-1">
      <Button className="cursor-pointer rounded-lg bg-surface py-2 px-4 ">{`${t("balance")} ${currentCur()}`}</Button>
      <Items className="absolute right-0 mt-2 w-60 origin-top-right rounded-md bg-surface p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Item as="div">
          <span>{t("current_balance")}</span>
          <span className="text-gray-400">{` ${currentCur()}0`}</span>
          <div className="mt-6 flex justify-between">
            <div className="cursor-pointer rounded-lg border-gray-700 bg-emerald-900 bg-opacity-30 py-1.5 px-3 text-emerald-600">
              {t("deposit")}
            </div>
            <div className="cursor-pointer rounded-lg border-2 border-gray-700 bg-surface py-1.5 px-3">
              {t("withdraw")}
            </div>
          </div>
        </Item>
      </Items>
    </Menu>
  );
};
