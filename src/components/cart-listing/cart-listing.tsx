import React, {FC} from "react";

export const CartListing: FC = () => {
  return (
    <div className="h-full max-h-screen rounded-lg border border-gray bg-surface  p-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div className="text-medium text-2xl">Sell list</div>
      <div className="flex h-full w-full items-center align-middle">
        <div className="flex w-full flex-col items-center">
          <div>Sell list is empty</div>
          <div className="text-cloud-dark">Add items to list on sale</div>
        </div>
      </div>
    </div>
  );
};
