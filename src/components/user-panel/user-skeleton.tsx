import {Menu} from "@headlessui/react";

export const UserProfileSkeleton = () => {
  return (
    <Menu as="div" className="relative pt-2">
      <Menu.Button>
        <div className="h-10 w-10 rounded-full bg-surface" />
      </Menu.Button>
    </Menu>
  );
};
