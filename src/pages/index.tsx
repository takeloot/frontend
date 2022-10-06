import type {NextPage} from "next";

import {UserInventory} from "_components/UserInventory";

import {MainLayout} from "_app/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <UserInventory />
    </MainLayout>
  );
};

export default Home;
