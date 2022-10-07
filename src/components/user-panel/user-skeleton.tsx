import {Menu} from "@headlessui/react";

export const UserProfileSkeleton = () => {
  return (
    <Menu as="div" className="relative max-h-10">
      <Menu.Button>
        <div className="h-10 w-10 rounded-full bg-tl-dark-gray" />
      </Menu.Button>
    </Menu>
  );
};
