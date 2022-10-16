import React, {FC, ReactNode, useCallback} from "react";

import {useTranslation} from "next-i18next";
import {EGame} from "@takeloot/dto";
import {gql, makeVar, useQuery} from "@apollo/client";

import {Skin, useMyInventoryQuery} from "_app/generated/graphql";

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
    <div className="grid max-h-screen gap-2 overflow-auto rounded-lg border border-gray bg-surface p-2 scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {children}
    </div>
  );
};
