import {FC} from "react";

import Image from "next/image";
import clsx from "clsx";

interface IProps {
  id: string;
  quality?: string;
  name: string;
  price?: string;
  img?: string;
  selected: boolean;
  handleSelect: (value: string) => void;
}

export const InventoryCard: FC<IProps> = ({id, quality, name, price, img, selected, handleSelect}) => {
  return (
    <div
      onClick={() => handleSelect(id)}
      className={clsx(
        selected ? "hover:takeloot-gradient takeloot-gradient border-blue" : "hover:takeloot-gradient bg-gray",
        "box-content rounded-lg border border-b-2 border-gray bg-background p-4 hover:cursor-pointer",
      )}
    >
      {!!img && (
        <div className="relative mb-4 h-20 w-full text-center">
          <Image src={img} alt="CS:GO" layout="fill" objectFit="contain" />
        </div>
      )}
      <div>
        {!!quality && <div>{quality}</div>}
        <div />
        <div>{name}</div>
        {!!price && <div>Price {price}</div>}
      </div>
    </div>
  );
};
