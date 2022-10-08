import {useEffect} from "react";

import toast, {useToasterStore} from "react-hot-toast";
import {appWithTranslation} from "next-i18next";
import {ApolloProvider} from "@apollo/client";

import {useApollo} from "_app/services";
import {ConfirmationDialogProvider} from "_app/core";
import {PUBLIC_API, TOAST_LIMIT} from "_app/constants";

import type {AppProps} from "next/app";

import "_styles/global.css";
import "@fontsource/inter";

function MyApp({Component, pageProps}: AppProps) {
  const {toasts} = useToasterStore();

  const apolloClient = useApollo(pageProps, {
    apiUrl: PUBLIC_API,
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
        <Component {...pageProps} />
      </ApolloProvider>
    </ConfirmationDialogProvider>
  );
}

export default appWithTranslation(MyApp);
