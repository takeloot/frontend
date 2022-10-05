import {ApolloProvider} from "@apollo/client";

import {useApollo} from "_app/services/apollo";
import {PUBLIC_API} from "_app/constants";

import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps, {
    apiUrl: PUBLIC_API,
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
