import type {NextPage} from "next";

import {MainLayout} from "_app/layouts/main-layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="rounded-lg border border-gray bg-surface p-2">
        <div>Landing</div>
      </div>
    </MainLayout>
  );
};

export default Home;
