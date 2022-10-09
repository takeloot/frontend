import React, {FC, ReactNode} from "react";

import {useTranslation} from "next-i18next";

import {useMyInventoryQuery} from "_app/generated/graphql";

import {InventoryCard} from "./inventory-card";

interface IUserInventoryWrapperProps {
  children: ReactNode;
}

export const UserInventory: FC = () => {
  const {t} = useTranslation("common");

  const {data, loading, error} = useMyInventoryQuery({
    variables: {
      appId: 730,
    },
  });

  const skins = data?.myInventory?.skins;

  return (
    <UserInventoryWrapper>
      {!!error && <div>{t("something_went_wrong")}</div>}
      {!!loading && <div>{t("loading")}</div>}
      {!skins && <div>{t("empty_inventory")}</div>}
      {!!skins &&
        skins.map((skin) => (
          // TODO: Remove skin.steamImg and skin.steamName when name and img will be done on backend
          <InventoryCard key={skin.id} name={skin.name || skin.steamName} img={skin.img || skin.steamImg} />
        ))}
    </UserInventoryWrapper>
  );
};

const UserInventoryWrapper: FC<IUserInventoryWrapperProps> = ({children}) => {
  return (
    <div className="grid max-h-screen gap-2 overflow-auto rounded-lg border border-gray bg-surface p-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-4 xl:col-span-2 xl:grid-cols-5 2xl:col-span-2 2xl:grid-cols-6">
      {children}
    </div>
  );
};
