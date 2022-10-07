import React, {FC} from "react";

import {mockItems} from "_mocks/InventoryMock";

import {InventoryCard} from "./inventory-card";

export const UserInventory: FC = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {mockItems.map((el, index) => (
        <InventoryCard key={index} quality={el.quality} name={el.name} price={el.price} />
      ))}
    </div>
  );
};
