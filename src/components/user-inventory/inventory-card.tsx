import {FC} from "react";

import Image from "next/image";

interface IProps {
  quality?: string;
  name: string;
  price?: string;
  img?: string;
}

export const InventoryCard: FC<IProps> = ({quality, name, price, img}) => {
  return (
    <div className="rounded-lg border border-gray bg-background p-4">
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
