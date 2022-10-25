import React, {FC} from "react";

interface IProps {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

export const TextInput: FC<IProps> = ({id, defaultValue = "", placeholder = "", isDisabled = false}) => {
  return (
    <input
      id={id}
      type="text"
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={isDisabled}
      className="mb-2 block h-10 w-full rounded-lg border border-gray-light bg-gray p-2 pr-14 text-sm text-cloud focus:outline-none"
    />
  );
};
