import React, {FC, ReactNode} from "react";

import {Toaster} from "react-hot-toast";
import Head from "next/head";
import {useTranslation} from "next-i18next";

import {useWorkStatusesQuery, useWorkStatusesUpdatedSubscription} from "_app/generated/graphql";
import {AlphaPreview, Footer, Loader, Navbar} from "_app/components";

interface IProps {
  children: ReactNode;
  title?: string;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
}

export const MainLayout: FC<IProps> = ({children, title, withoutHeader = false, withoutFooter = false}) => {
  const {t} = useTranslation("common");

  const workStatusesQuery = useWorkStatusesQuery();

  useWorkStatusesUpdatedSubscription({
    onSubscriptionData: ({subscriptionData}) => {
      if (!subscriptionData.data) return;

      const workStatusesUpdated = subscriptionData.data.workStatusesUpdated;

      workStatusesQuery.updateQuery((prev) => {
        return {
          ...prev,
          userCoins: workStatusesUpdated,
        };
      });
    },
  });

  const {loading, error, data} = workStatusesQuery;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log("work statuses error", error);
  }

  const workStatuses = data?.workStatuses || null;

  const isMaintenance = workStatuses?.isMaintenance || false;
  const isFuckup = workStatuses?.isFuckup || false;
  const isSteamProblems = workStatuses?.isSteamProblems || false;
  const isSellDisabled = workStatuses?.isSellDisabled || false;
  const isQiwiDisabled = workStatuses?.isQiwiDisabled || false;
  const isTinkoffDisabled = workStatuses?.isTinkoffDisabled || false;
  const isDepositDisabled = workStatuses?.isDepositDisabled || false;
  const isWithdrawalDisabled = workStatuses?.isWithdrawalDisabled || false;

  // TODO: Handle these statuses
  console.log({
    isMaintenance,
    isFuckup,
    isSteamProblems,
    isSellDisabled,
    isQiwiDisabled,
    isTinkoffDisabled,
    isDepositDisabled,
    isWithdrawalDisabled,
  });

  return (
    <>
      <Head>
        <title>{title || `takeloot - ${t("sell_csgo_skins")}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen flex-col scrollbar-thin scrollbar-track-background-light scrollbar-thumb-surface-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="flex-auto">
          {!withoutHeader && <Navbar />}
          <div className="m-4">{children}</div>
        </div>
        {!withoutFooter && <Footer />}
      </div>
      <AlphaPreview />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
