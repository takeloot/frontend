import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {ManageLayout} from "_app/layouts";

const Manage: NextPage = () => {
  const {t} = useTranslation("common");

  return (
    <ManageLayout title={t("manage")}>
      {/* TODO: Remove this later */}
      <div className="mb-4 text-lg">Список необходимого функционала</div>
      <ul className="mb-4">
        <li className="text-cloud-dark">Минимальная сумма вывода</li>
        <li className="text-cloud-dark">Минимальная цена предмента при продаже</li>
        <li className="text-cloud-dark">Максимальная цена предмента при продаже</li>
        <li className="text-cloud-dark">Формула цены</li>
        <li className="text-cloud-dark">Вариант подтверждения продажи (Автоматический / Ручной)</li>
        <li className="text-cloud-dark">Включить / отключить вывод средств</li>
        <li className="text-cloud-dark">Включить / отключить депозит средств</li>
        <li className="text-cloud-dark">Включить / отключить возможность продажи</li>
        <li className="text-cloud-dark">Включить / отключить возможность продажи</li>
        <li className="text-cloud-dark">Включить / отключить оплату через Qiwi</li>
        <li className="text-cloud-dark">Включить / отключить оплату через Tinkoff</li>
        <li className="text-cloud-dark">Включить / отключить заглушку (Технические работы)</li>
        <li className="text-cloud-dark">Включить / отключить заглушку (Факап)</li>
        <li className="text-cloud-dark">Включить / отключить заглушку (Проблемы на стороне Steam)</li>
        <li className="text-cloud-dark">Разлогинить пользователя</li>
        <li className="text-cloud-dark">Бан / разбан пользователя</li>
        <li className="text-cloud-dark">Модуль тикетов службы поддержки</li>
      </ul>
      <ul>
        <li className="text-cloud-dark">Онлайн пользователей на сайте</li>
        <li className="text-cloud-dark">Графики</li>
      </ul>
    </ManageLayout>
  );
};

export default Manage;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
