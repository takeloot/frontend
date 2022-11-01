import React, {useCallback, useMemo} from "react";

import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import clsx from "clsx";
import {Switch} from "@headlessui/react";

import {capitalizeFirstLetter, getValueByKey, transformWorkStatuses} from "_app/utils";
import {ManageLayout} from "_app/layouts";
import {
  EStatus,
  useToggleWorkStatusMutation,
  useWorkStatusesQuery,
  useWorkStatusesUpdatedSubscription,
} from "_app/generated/graphql";

const Settings: NextPage = () => {
  const {t} = useTranslation("common");

  const workStatusesQuery = useWorkStatusesQuery();

  useWorkStatusesUpdatedSubscription({
    onData: ({data}) => {
      if (!data.data) return;

      const workStatusesUpdated = data.data.workStatusesUpdated;

      workStatusesQuery.updateQuery((prev) => {
        return {
          ...prev,
          workStatuses: workStatusesUpdated,
        };
      });
    },
  });

  const {data, loading} = workStatusesQuery;

  const [toggleWorkStatusMutation, {loading: loadingMutation}] = useToggleWorkStatusMutation();

  const workStatuses = data?.workStatuses;

  const workStatusesArray = useMemo(() => {
    return workStatuses && transformWorkStatuses(workStatuses);
  }, [workStatuses]);

  const handleToggle = useCallback(
    (status: {name: string; value: boolean}) => {
      toggleWorkStatusMutation({
        variables: {
          status: {
            // @ts-ignore
            name: EStatus[capitalizeFirstLetter(status.name)],
          },
        },
      });
    },
    [toggleWorkStatusMutation],
  );

  const WORK_STATUSES_NAMES = {
    isDepositEnabled: t("is_deposit_enabled"),
    isWithdrawalEnabled: t("is_withdrawal_enabled"),
    isSellEnabled: t("is_sell_enabled"),
    isMaintenance: t("is_maintenance"),
    isSteamProblems: t("is_steam_problems"),
    isFuckup: t("is_fuckup"),
    isQiwiEnabled: t("is_qiwi_enabled"),
    isTinkoffEnabled: t("is_tinkoff_enabled"),
  };

  return (
    <ManageLayout title={t("settings")}>
      {!!loading && <div>{t("loading")}</div>}
      {!loading && (
        <div className="flex">
          <div>
            <div className="mb-5">
              <div className="mb-1 text-lg">{t("statuses")}</div>
              <div className="text-cloud-dark">{t("statuses_setting_subtitle")}</div>
            </div>
            {workStatusesArray?.map((workStatus, idx) => {
              const isLastItem = idx === workStatusesArray.length - 1;
              return (
                workStatus.name !== "__typename" && (
                  <div key={idx} className={clsx("flex", isLastItem ? "mb-0" : "mb-8")}>
                    <Switch
                      disabled={loadingMutation}
                      checked={workStatus.value}
                      onChange={() => handleToggle(workStatus)}
                      className={`${workStatus.value ? "bg-blue" : "bg-cloud"}
          transition-colors relative inline-flex h-[30px] w-[58px] shrink-0 cursor-pointer rounded-full border-2 border-transparent duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span
                        aria-hidden="true"
                        className={`${workStatus.value ? "translate-x-7" : "translate-x-0"}
            transition pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 duration-200 ease-in-out`}
                      />
                    </Switch>
                    <div className="ml-4 hover:cursor-pointer" onClick={() => handleToggle(workStatus)}>
                      <div className="mb-1 text-lg">{getValueByKey(WORK_STATUSES_NAMES, workStatus.name)}</div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </ManageLayout>
  );
};

export default Settings;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
