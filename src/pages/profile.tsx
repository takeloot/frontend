import type {GetStaticProps, NextPage} from "next";

import Image from "next/image";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {MainLayout} from "_app/layouts/main-layout";
import {useMeQuery} from "_app/generated/graphql";
import {CopyField, Loader} from "_app/components";

const Profile: NextPage = () => {
  const userQuery = useMeQuery();

  const loading = userQuery.loading;

  const user = userQuery.data?.me;
  const name = user?.name;
  const avatar = user?.avatar;
  const id = user?.id;

  // TODO: get from user when will be done on backend
  const steamId = "76561198079068212";

  if (loading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {avatar && name && (
          <div className="flex flex-row items-start justify-between rounded-lg border border-gray bg-surface p-2">
            <div className="flex flex-row items-center">
              <Image className="rounded-full" src={avatar} alt={name} height="40" width="40" loading="lazy" />
              <div className="ml-4">{name}</div>
            </div>
            {!!id && <CopyField title="id" text={id} />}
          </div>
        )}
        <div className="flex flex-row items-center justify-between rounded-lg border border-gray bg-surface p-2">
          <div>Steam account</div>
          {!!steamId && <CopyField title="steam id" text={steamId} />}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
