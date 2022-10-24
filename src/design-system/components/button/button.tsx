import React, {FC} from "react";

import clsx from "clsx";

interface IProps {
  value: string;
  onClick?: () => void;
  disabled?: boolean;
}

// TODO: add loading state, color, size, etc.
export const Button: FC<IProps> = ({value, onClick, disabled = false}) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        "rounded-lg bg-blue py-2 px-4 text-center duration-200 hover:cursor-pointer hover:bg-blue-dark",
        disabled && "cursor-not-allowed bg-gray hover:cursor-not-allowed hover:bg-gray",
      )}
    >
      {value}
    </div>
  );
};
