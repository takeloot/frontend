import React, {FC} from "react";

import {useTranslation} from "next-i18next";

export const CartListing: FC = () => {
  const {t} = useTranslation("common");

  return (
    <div className="h-full max-h-screen rounded-lg border border-gray bg-surface  p-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div className="text-medium text-2xl">{t("sell_list")}</div>
      <div className="flex h-full w-full items-center align-middle">
        <div className="flex w-full flex-col items-center">
          <div>{t("sell_list_is_empy")}</div>
          <div className="text-cloud-dark">{t("add_items_to_list")}</div>
        </div>
      </div>
    </div>
  );
};
