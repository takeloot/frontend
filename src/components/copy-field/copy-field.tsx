import React, {FC, useCallback} from "react";

import toast, {Toaster} from "react-hot-toast";
import {Copy} from "react-feather";

import {useCopyToClipboard} from "_app/hooks";

interface IProps {
  title: string;
  text: string;
}

export const CopyField: FC<IProps> = ({title, text}) => {
  const [value, copy] = useCopyToClipboard();

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
    if (!text) {
      return errorNotify();
    }

    copy(text);

    console.log("Successfully copied", value);

    successNotify();
  }, [text, value, copy, errorNotify, successNotify]);

  return (
    <>
      <div
        className="flex flex-row items-center rounded-lg bg-gray p-2 hover:cursor-pointer hover:bg-gray-light hover:duration-200"
        onClick={handleCopy}
      >
        <span className="uppercase text-cloud-dark">{title}:</span>
        <span className="ml-1 text-cloud-dark">{text}</span>
        <Copy className="ml-4" color="#9FAABB" size={14} />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
