import React from "react";

import {useTranslation} from "next-i18next";

import {MainLayout} from "_app/layouts";

export const Loader = () => {
  const {t} = useTranslation("common");

  return (
    <MainLayout withoutFooter withoutHeader>
      <div className="flex h-screen w-full items-center justify-center text-center">
        <div>
          <div className="m-auto flex h-14 w-14 animate-spin items-center justify-center rounded-full bg-gradient-to-r from-gray-500 via-surface-light to-surface">
            <div className="m-auto h-10 w-10 rounded-full bg-background"></div>
          </div>
          <div className="animate-pulse pt-4">
            <div className="text-lg">{t("processing")}</div>
            <div>{t("processing_text")}</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
