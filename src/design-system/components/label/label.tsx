import React, {FC} from "react";

interface IProps {
  name: string;
  htmlFor: string;
}

export const Label: FC<IProps> = ({name, htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex">
      {name}
    </label>
  );
};
