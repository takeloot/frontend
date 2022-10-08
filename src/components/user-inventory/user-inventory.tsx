import React, {FC} from "react";

import {mockItems} from "_mocks/InventoryMock";

import {InventoryCard} from "./inventory-card";

export const UserInventory: FC = () => {
  return (
    <div className="grid max-h-screen gap-2 overflow-auto rounded-lg border border-gray bg-surface p-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-4 xl:col-span-2 xl:grid-cols-5 2xl:col-span-2 2xl:grid-cols-6">
      {mockItems.map((item, itemIdx) => (
        <InventoryCard key={itemIdx} quality={item.quality} name={item.name} price={item.price} />
      ))}
    </div>
  );
};
