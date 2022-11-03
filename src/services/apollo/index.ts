import {useMemo} from "react";

import isEqual from "lodash.isequal";
import {createClient} from "graphql-ws";
import merge from "deepmerge";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";

import type {InMemoryCacheConfig, NormalizedCacheObject} from "@apollo/client";

type ApolloInitConfig = {
  apiUrl: string;
  inMemoryCacheConfig?: InMemoryCacheConfig;
};

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const disconnectedVar = makeVar(false);

function createApolloClient({apiUrl, inMemoryCacheConfig}: ApolloInitConfig) {
  let link;

  if (typeof window !== "undefined") {
    link = new GraphQLWsLink(
      createClient({
        url: `${apiUrl}/graphql`,
        lazy: false,
        isFatalConnectionProblem: () => false,
        retryAttempts: 10,
        connectionParams: async () => {
          const token = await fetch("/api/auth/token")
            .then((res) => res.json())
            .then((data) => data?.token);

          return {token};
        },
        on: {
          closed: () => {
            disconnectedVar(true);
          },
          connected: () => {
            if (disconnectedVar()) {
              disconnectedVar(false);
            }
          },
        },
      }),
    );
  }

  return new ApolloClient({
    link,
    ssrMode: false,
    cache: new InMemoryCache({...inMemoryCacheConfig}),
  });
}

export function initializeApollo(initialState = null, apolloInitConfig: ApolloInitConfig) {
  const _apolloClient = apolloClient ?? createApolloClient(apolloInitConfig);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any, apolloInitConfig: ApolloInitConfig) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const store = useMemo(() => initializeApollo(state, apolloInitConfig), [state]);
  return store;
}
