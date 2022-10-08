import React, {FC} from "react";

import {mockItems} from "_mocks/InventoryMock";

import {InventoryCard} from "./inventory-card";

export const UserInventory: FC = () => {
  return (
    <div className="xxl-10 grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
      {mockItems.map((item, itemIdx) => (
        <InventoryCard key={itemIdx} quality={item.quality} name={item.name} price={item.price} />
      ))}
    </div>
  );
};
