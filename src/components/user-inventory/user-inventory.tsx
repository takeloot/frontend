import React, {FC, ReactNode, useCallback} from "react";

import {User} from "react-feather";
import {useTranslation} from "next-i18next";
import {EGame} from "@takeloot/dto";
import {gql, makeVar, useQuery} from "@apollo/client";

import { Button } from "_app/primitives";
import {Skin, useMeQuery, useMyInventoryQuery} from "_app/generated/graphql";

import {InventoryCard} from "./inventory-card";

export const sellListVar = makeVar([]);

export const updateSellList = (list: Skin[]) => {
  // @ts-ignore
  sellListVar(list);
};

export const SELL_LIST_QUERY = gql`
  query getSellList {
    sellList @client
  }
`;

interface IUserInventoryWrapperProps {
  children: ReactNode;
}

export const UserInventory: FC = () => {
  const {t} = useTranslation("common");

  const userQuery = useMeQuery();
  const {data, loading, error} = useMyInventoryQuery({
    variables: {
      appId: EGame.CSGO,
    },
  });

  const {data: dataSellList} = useQuery(SELL_LIST_QUERY);

  const skins = data?.myInventory?.skins;

  const selectedList = dataSellList.sellList;

  const isSelected = useCallback(
    (skin: Skin) => {
      return selectedList.find((item: Skin) => item.id === skin.id) ? true : false;
    },
    [selectedList],
  );

  const handleDeselect = useCallback(
    (skin: Skin) => {
      const selectedUpdated = selectedList.filter((item: Skin) => item.id !== skin.id);
      updateSellList(selectedUpdated);
    },
    [selectedList],
  );

  const handleSelect = useCallback(
    (skin: Skin) => {
      if (!isSelected(skin)) {
        let updatedList = [...selectedList];
        if (skin) {
          updatedList = [...selectedList, skin];
          updateSellList(updatedList);
        } else {
          const updatedListSplice = updatedList.splice(selectedList.indexOf(skin), 1);
          updateSellList(updatedListSplice);
        }
        updateSellList(updatedList);
      } else {
        handleDeselect(skin);
      }
    },
    [selectedList, handleDeselect, isSelected],
  );

  const user = userQuery?.data?.me;

  if (!user) {
    return <div className="max-h-screen overflow-auto rounded-lg border border-gray bg-surface p-1 scrollbar-thin scrollbar-track-background-light/10 scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full flex">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="p-3 rounded-full bg-gray-light mb-4"><User size={18} /></div>
        <div className="mb-2">{t("login_steam")}</div>
        <div className="text-cloud-dark mb-4">{t("not_logged_in_text")}</div>
        <Button href="/api/auth/steam?continue=">
          {t("logon")}
        </Button>
      </div>
    </div>;
  }

  return (
    <UserInventoryWrapper>
      {!!error && <div>{t("something_went_wrong")}</div>}
      {!!loading && <div>{t("loading")}</div>}
      {!loading && !skins && <div>{t("empty_inventory")}</div>}
      {!!skins &&
        skins.map((skin) => (
          // TODO: Remove skin.steamImg and skin.steamName when name and img will be done on backend
          <InventoryCard key={skin.id} selected={isSelected(skin)} handleSelect={handleSelect} skin={skin} />
        ))}
    </UserInventoryWrapper>
  );
};

const UserInventoryWrapper: FC<IUserInventoryWrapperProps> = ({children}) => {
  return (
    <div className="grid max-h-screen gap-1 overflow-auto rounded-lg border border-gray bg-surface p-1 scrollbar-thin scrollbar-track-background-light/10 scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {children}
    </div>
  );
};
