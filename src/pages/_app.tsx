import {useEffect} from "react";

import toast, {useToasterStore} from "react-hot-toast";
import NProgress from "nprogress";
import {Router} from "next/router";
import {appWithTranslation} from "next-i18next";
import {ApolloProvider} from "@apollo/client";

import {useApollo} from "_app/services";
import {Tooltip} from "_app/primitives";
import {ConfirmationDialogProvider} from "_app/core";
import {PUBLIC_API, TOAST_LIMIT} from "_app/constants";
import {sellListVar} from "_app/components";

import type {AppProps} from "next/app";

import "_styles/global.css";
import "@fontsource/inter";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const typePolicies = {
  Query: {
    fields: {
      sellList: {
        read() {
          return sellListVar();
        },
      },
    },
  },
};

function MyApp({Component, pageProps}: AppProps) {
  const {toasts} = useToasterStore();

  const apolloClient = useApollo(pageProps, {
    apiUrl: PUBLIC_API,
    inMemoryCacheConfig: {typePolicies},
  });

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <ConfirmationDialogProvider>
      <ApolloProvider client={apolloClient}>
        <Tooltip.Provider>
          <Component {...pageProps} />
        </Tooltip.Provider>
      </ApolloProvider>
    </ConfirmationDialogProvider>
  );
}

export default appWithTranslation(MyApp);
