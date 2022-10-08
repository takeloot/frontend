import {FC} from "react";

import Image from "next/image";

interface IProps {
  quality: string;
  name: string;
  price: string;
}

export const InventoryCard: FC<IProps> = ({quality, name, price}) => {
  return (
    <div className="rounded-lg border border-gray bg-background p-4">
      <div className="text-center">
        <Image
          width={100}
          height={100}
          src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7r--YXygECLpxIuNDztJ46SJwdsaFjSqVi3l7i9hJe47p_JzCdkvCMmtHaInhywhxBJbLFvgeveFwvEsgm-vQ/360fx360f"
          alt="CS:GO"
        />
      </div>
      <div>
        <div>{quality}</div>
        <div />
        <div>{name}</div>
        <div>Price {price}</div>
      </div>
    </div>
  );
};
