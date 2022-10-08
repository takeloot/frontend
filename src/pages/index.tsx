import type {NextPage} from "next";

import {MainLayout} from "_app/layouts/main-layout";
import {UserInventory} from "_app/components";

const Home: NextPage = () => {
  return (
    <MainLayout withStyle>
      <UserInventory />
    </MainLayout>
  );
};

export default Home;
