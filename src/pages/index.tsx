import type {NextPage} from "next";

import {MainLayout} from "_app/layouts";
import {UserInventory} from "_app/components";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <UserInventory />
    </MainLayout>
  );
};

export default Home;
