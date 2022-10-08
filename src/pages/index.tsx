import type {NextPage} from "next";

import {MainLayout} from "_app/layouts/main-layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="rounded-lg border border-gray bg-surface p-2">
        <div className="text-lg">Sell CS:GO skins</div>
      </div>
    </MainLayout>
  );
};

export default Home;
