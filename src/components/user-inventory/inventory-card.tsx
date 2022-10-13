import {FC} from "react";

import Image from "next/image";
import clsx from "clsx";

import {Skin} from "_app/generated/graphql";

interface IProps {
  skin: Skin;
  selected: boolean;
  handleSelect: (skin: Skin) => void;
}

export const InventoryCard: FC<IProps> = ({skin, selected, handleSelect}) => {
  const {steamName, steamImg, quality, price} = skin;

  return (
    <div
      onClick={() => handleSelect(skin)}
      className={clsx(
        selected ? "hover:takeloot-gradient takeloot-gradient border-blue" : "hover:takeloot-gradient bg-gray",
        "box-content rounded-lg border-2 border-gray bg-background p-4 hover:cursor-pointer",
      )}
    >
      {!!steamImg && (
        <div className="relative mb-4 h-20 w-full text-center">
          <Image src={steamImg} alt="CS:GO" layout="fill" objectFit="contain" />
        </div>
      )}
      <div>
        {!!quality && <div>{quality}</div>}
        {!!steamName && <div>{steamName}</div>}
        {!!price && <div>Price {price}</div>}
      </div>
    </div>
  );
};
