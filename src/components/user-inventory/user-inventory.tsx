import React, {FC} from "react";

import {useMyInventoryQuery} from "_app/generated/graphql";

import {InventoryCard} from "./inventory-card";

export const UserInventory: FC = () => {
  const {data, loading, error} = useMyInventoryQuery({
    variables: {
      appId: 730,
    },
  });

  console.log({data, loading, error});

  const skins = data?.myInventory?.skins;

  if (!skins) {
    return (
      <div className="grid max-h-screen gap-2 overflow-auto rounded-lg border border-gray bg-surface p-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-4 xl:col-span-2 xl:grid-cols-5 2xl:col-span-2 2xl:grid-cols-6">
        <div>Нет скинов</div>
      </div>
    );
  }

  return (
    <div className="grid max-h-screen gap-2 overflow-auto rounded-lg border border-gray bg-surface p-2 scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-thumb-rounded-full sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-4 xl:col-span-2 xl:grid-cols-5 2xl:col-span-2 2xl:grid-cols-6">
      {skins.map((skin) => (
        // TODO: Remove skin.steamImg and skin.steamName when name and img will be done on backend
        <InventoryCard key={skin.id} name={skin.name || skin.steamName} img={skin.img || skin.steamImg} />
      ))}
    </div>
  );
};
