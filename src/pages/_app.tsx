import {ApolloProvider} from "@apollo/client";

import {useApollo} from "_app/services/apollo";

import type {AppProps} from "next/app";

const PUBLIC_DEV_API = "dev-api.takeloot.ru";

function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps, {
    apiUrl: process.env["NEXT_PUBLIC_API"] || PUBLIC_DEV_API,
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
