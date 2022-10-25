import React from "react";

import type {GetStaticProps, NextPage} from "next";

import {FieldValues, useForm} from "react-hook-form";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import {ManageLayout} from "_app/layouts";
import {Button, FileInput, Label, TextInput} from "_app/design-system";

const Add: NextPage = () => {
  const {t} = useTranslation("common");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <ManageLayout title={t("add_bot")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <div className="w-1/3">
            <div className="mb-4">
              <Label name={t("login")} htmlFor="login" />
              <TextInput id="login" defaultValue="" placeholder={t("login")} {...register("login")} />
            </div>
            <div className="mb-4">
              <Label name={t("password")} htmlFor="password" />
              <TextInput
                id="password"
                defaultValue=""
                placeholder="********"
                {...register("password", {required: true})}
              />
              {errors.password && <div className="my-4 text-red">{t("This field is required")}</div>}
            </div>
            <div className="mb-4">
              <Label name={t("proxy")} htmlFor="proxy" />
              <TextInput id="proxy" defaultValue="" placeholder={t("proxy")} {...register("proxy")} />
            </div>
            <div className="mb-4">
              <Label name="maFile" htmlFor="maFile" />
              <FileInput id="maFile" accept=".maFile" />
            </div>
            <Button onClick={() => console.log("button")} value={t("add")} />
          </div>
        </div>
      </form>
    </ManageLayout>
  );
};

export default Add;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
