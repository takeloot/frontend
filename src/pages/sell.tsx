import React from "react";

import {MainLayout} from "_app/layouts";
import {CartListing, UserInventory} from "_app/components";

const Sell = () => {
  return (
    <MainLayout>
      <div className="grid gap-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <UserInventory />
        <CartListing />
      </div>
    </MainLayout>
  );
};

export default Sell;
