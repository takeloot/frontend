import React from "react";

import {MainLayout} from "_app/layouts";

export const Loader = () => {
  return (
    <MainLayout withoutFooter withoutHeader>
      <div className="flex h-screen w-full items-center justify-center text-center">
        <div>
          <div className="loader m-auto h-12 w-12 rounded-full border-8 border-t-8 border-surface-light align-middle ease-linear" />
          <div className="animate-pulse pt-4">
            <div className="text-lg">Processing</div>
            <div>It takes a few seconds</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
