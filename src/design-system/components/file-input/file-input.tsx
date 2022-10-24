import React, {FC} from "react";

interface IProps {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  accept?: string;
}

export const FileInput: FC<IProps> = ({id, defaultValue = "", placeholder = "", isDisabled = false, accept}) => {
  return (
    <input
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={isDisabled}
      accept={accept}
      type="file"
      className="mb-2 block h-10 w-full rounded-lg border border-gray-light bg-gray p-2 pr-14 text-sm text-cloud focus:outline-none"
    />
  );
};
