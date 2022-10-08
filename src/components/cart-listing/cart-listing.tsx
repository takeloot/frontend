import React, {FC} from "react";

export const CartListing: FC = () => {
  return (
    <div className="grid gap-2 rounded-lg border border-gray bg-surface p-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div>Cart</div>
    </div>
  );
};
