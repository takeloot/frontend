import type {NextPage} from "next";

import {Copy} from "react-feather";
import Image from "next/image";

import {MainLayout} from "_app/layouts/main-layout";
import {useMeQuery} from "_app/generated/graphql";

const Profile: NextPage = () => {
  const userQuery = useMeQuery();
  const loading = userQuery.loading;

  const user = userQuery.data?.me;
  const name = user?.name;
  const avatar = user?.avatar;
  const id = user?.id;

  return (
    <MainLayout>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {avatar && name && (
          <div className="flex flex-row items-center justify-between rounded-lg border border-tl-gray bg-tl-dark-gray p-2">
            <div className="flex flex-row items-center">
              <Image className="rounded-full" src={avatar} alt={name} height="40" width="40" loading="lazy" />
              <div className="ml-4">{name}</div>
            </div>
            <div className="flex flex-row items-center rounded-lg bg-tl-gray px-4 py-2 duration-200 hover:cursor-pointer hover:bg-tl-black hover:duration-200">
              <span className="uppercase">id:</span>
              <span> {id}</span>
              <Copy className="ml-4" color="#D2D7DF" size={16} />
            </div>
          </div>
        )}
        <div className="flex flex-row items-center rounded-lg border border-tl-gray bg-tl-dark-gray p-2">
          Steam account
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
