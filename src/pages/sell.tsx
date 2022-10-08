import React from "react";

import {MainLayout} from "_app/layouts";
import {CartListing, UserInventory} from "_app/components";

const Sell = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-2">
        <UserInventory />
        <CartListing />
      </div>
    </MainLayout>
  );
};

export default Sell;
