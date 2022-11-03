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
  const {
    // steamName, 
    img, 
    steamImg, 
    // quality, 
    // price
  } = skin;

  return (
    <div
      onClick={() => handleSelect(skin)}
      className={clsx(
        selected ? "hover:takeloot-gradient takeloot-gradient border-blue" : "hover:takeloot-gradient bg-gray",
        "box-content rounded-lg border border-gray bg-background p-3 hover:cursor-pointer",
      )}
    >
      {(!!img || !!steamImg) && (
        <div className="relative mb-2 h-20 w-full text-center">
          <Image
            src={img || steamImg}
            alt="CS:GO"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      )}
      <div>
        {/* {!!quality && <div>{quality}</div>} */}
        {/* {!!steamName && <div>{steamName}</div>} */}
        {/* {!!price && <div>Price {price}</div>} */}
        <div className="text-sm text-cloud-dark">FT / 0.2066</div>
        <div className="text-sm font-bold">44.64 $</div>
      </div>
    </div>
  );
};
