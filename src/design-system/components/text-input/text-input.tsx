import React, {FC} from "react";

import {FieldValues} from "react-hook-form";

interface IProps {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  register?: FieldValues;
  type?: string;
}

export const TextInput: FC<IProps> = ({
  defaultValue = "",
  placeholder = "",
  isDisabled = false,
  register,
  type = "text",
}) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={isDisabled}
      className="mb-2 block h-10 w-full rounded-lg border border-gray-light bg-gray p-2 pr-14 text-sm text-cloud focus:outline-none"
      {...register}
    />
  );
};
