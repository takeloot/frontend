import {gql} from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DateTime: any;
};

export type Mutation = {
  __typename?: "Mutation";
  logout: Scalars["Boolean"];
  updateConnectionStatus: Scalars["Boolean"];
};

export type Profile = {
  __typename?: "Profile";
  avatar?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  me: User;
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  profiles?: Maybe<Array<Profile>>;
  updatedAt: Scalars["DateTime"];
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: "Query";
  me: {
    __typename?: "User";
    id: string;
    name?: string | null;
    avatar?: string | null;
    profiles?: Array<{__typename?: "Profile"; id: string; provider: string}> | null;
  };
};

export type LogoutMutationVariables = Exact<{[key: string]: never}>;

export type LogoutMutation = {__typename?: "Mutation"; logout: boolean};

export type UpdateConnectionStatusMutationVariables = Exact<{[key: string]: never}>;

export type UpdateConnectionStatusMutation = {__typename?: "Mutation"; updateConnectionStatus: boolean};

export const MeDocument = gql`
  query me {
    me {
      id
      name
      avatar
      profiles {
        id
        provider
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateConnectionStatusDocument = gql`
  mutation updateConnectionStatus {
    updateConnectionStatus
  }
`;
export type UpdateConnectionStatusMutationFn = Apollo.MutationFunction<
  UpdateConnectionStatusMutation,
  UpdateConnectionStatusMutationVariables
>;

/**
 * __useUpdateConnectionStatusMutation__
 *
 * To run a mutation, you first call `useUpdateConnectionStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConnectionStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConnectionStatusMutation, { data, loading, error }] = useUpdateConnectionStatusMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpdateConnectionStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>(
    UpdateConnectionStatusDocument,
    options,
  );
}
export type UpdateConnectionStatusMutationHookResult = ReturnType<typeof useUpdateConnectionStatusMutation>;
export type UpdateConnectionStatusMutationResult = Apollo.MutationResult<UpdateConnectionStatusMutation>;
export type UpdateConnectionStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateConnectionStatusMutation,
  UpdateConnectionStatusMutationVariables
>;
