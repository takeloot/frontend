import React, {useCallback, useMemo, useState} from "react";

import type {GetStaticProps, NextPage} from "next";

import {FieldValues, useForm} from "react-hook-form";
import {File} from "react-feather";
import {useDropzone} from "react-dropzone";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import FormData from "form-data";
import axios from "axios";

import {ManageLayout} from "_app/layouts";
import {useSteamBotsQuery} from "_app/generated/graphql";
import {Button, Label, TextInput} from "_app/design-system";

// TODO: add form validation and error handling later
// TODO: add success and error toast later
const Add: NextPage = () => {
  const {t} = useTranslation("common");

  const [file, setFile] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const steamBotsQuery = useSteamBotsQuery();

  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  const formData = useMemo(() => new FormData(), []);

  const {getRootProps, getInputProps, open} = useDropzone({
    onDropAccepted: async (files) => {
      formData.append("maFile", files[0]);
      setFile(files[0].name);
      console.log(files[0]);
    },
    noClick: true,
    noKeyboard: true,
  });

  const handleCreateBot = useCallback(() => {
    // TODO: add proxy append later
    const {login, password} = getValues();
    formData.append("accountName", login);
    formData.append("password", password);

    const createBot = async () => {
      setIsLoading(true);
      const getToken = async () =>
        await fetch("/api/auth/token")
          .then((res) => res.json())
          .then((data) => data?.token);

      const token = await getToken();
      const sendQuery = async () =>
        await axios.post(`https://${process.env.NEXT_PUBLIC_API}/steam-bot/create`, formData, {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        });

      try {
        const result = await sendQuery();
        if (result.status === 201) {
          steamBotsQuery.refetch();
          router.push("/manage/bots");
        }
      } catch (e) {
        // @ts-ignore: update later
        alert(`${e.message || e}`);
      }

      setIsLoading(false);
    };

    createBot();
  }, [formData, getValues, router, steamBotsQuery]);

  return (
    <ManageLayout title={t("add_bot")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <div className="w-1/3">
            <div className="mb-4">
              <Label name={t("login")} htmlFor="login" />
              <TextInput id="login" defaultValue="" placeholder={t("login")} register={{...register("login")}} />
            </div>
            <div className="mb-4">
              <Label name={t("password")} htmlFor="password" />
              <TextInput
                id="password"
                type="password"
                defaultValue=""
                placeholder="********"
                register={{...register("password", {required: true})}}
              />
              {errors.password && <div className="my-4 text-red">{t("This field is required")}</div>}
            </div>
            <div className="mb-4">
              <Label name={t("proxy")} htmlFor="proxy" />
              <TextInput id="proxy" defaultValue="" placeholder={t("proxy")} register={{...register("proxy")}} />
            </div>
            <div className="mb-4">
              <Label name="maFile" htmlFor="maFile" />
              <div
                {...getRootProps({
                  className:
                    "dropzone mb-2 block h-10 w-full rounded-lg border border-gray-light bg-gray p-2 pr-14 text-sm text-cloud focus:outline-none hover:cursor-pointer",
                })}
              >
                <input {...getInputProps()} />
                <div className="btn btn-primary flex flex-row items-center" onClick={open}>
                  <File size="16" className="mr-2" />
                  {file || <div>{t("select_a_file")}</div>}
                </div>
              </div>
            </div>
            <Button onClick={handleCreateBot} value={isLoading ? t("loading") : t("add")} />
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
