import {useCallback} from "react";

import type {NextPage} from "next";

import toast, {Toaster} from "react-hot-toast";
import {Copy} from "react-feather";
import Image from "next/image";

import {MainLayout} from "_app/layouts/main-layout";
import useCopyToClipboard from "_app/hooks/useCopyToClipboard";
import {useMeQuery} from "_app/generated/graphql";
import {Loader} from "_app/components";

const Profile: NextPage = () => {
  const userQuery = useMeQuery();
  const [value, copy] = useCopyToClipboard();

  const loading = userQuery.loading;

  const user = userQuery.data?.me;
  const name = user?.name;
  const avatar = user?.avatar;
  const id = user?.id;

  const successNotify = useCallback(() => {
    toast.success("Successfully copied", {
      duration: 1500,
      style: {
        borderRadius: "0.5rem",
        background: "#1E1F27",
        color: "#FFFFFF",
      },
    });
  }, []);

  const errorNotify = useCallback(() => {
    toast.error("Copy failed", {
      duration: 1500,
      style: {
        borderRadius: "0.5rem",
        background: "#1E1F27",
        color: "#FFFFFF",
      },
    });
  }, []);

  const handleCopy = useCallback(() => {
    if (!id) {
      return errorNotify();
    }

    copy(id);

    console.log("Successfully copied", value);

    successNotify();
  }, [id, value, copy, errorNotify, successNotify]);

  if (loading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {avatar && name && (
          <div className="flex flex-row items-center justify-between rounded-lg border border-gray bg-surface p-2">
            <div className="flex flex-row items-center">
              <Image className="rounded-full" src={avatar} alt={name} height="40" width="40" loading="lazy" />
              <div className="ml-4">{name}</div>
            </div>
            <div
              className="flex flex-row items-center rounded-lg bg-gray px-4 py-2 hover:cursor-pointer hover:bg-gray-light hover:duration-200"
              onClick={handleCopy}
            >
              <span className="uppercase">id:</span>
              <span className="ml-1">{id}</span>
              <Copy className="ml-4" color="#D2D7DF" size={16} />
            </div>
          </div>
        )}
        <div className="flex flex-row items-center rounded-lg border border-gray bg-surface p-2">Steam account</div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </MainLayout>
  );
};

export default Profile;
