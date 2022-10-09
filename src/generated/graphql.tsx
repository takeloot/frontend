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
  DateTime: any;
};

export type Case = {
  __typename?: "Case";
  id: Scalars["String"];
  img: Scalars["String"];
  name: Scalars["String"];
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["String"];
  img: Scalars["String"];
  name: Scalars["String"];
};

export type Inventory = {
  __typename?: "Inventory";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  skins?: Maybe<Array<Skin>>;
  updatedAt: Scalars["DateTime"];
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
  myInventory?: Maybe<Inventory>;
  user?: Maybe<User>;
  userInventory?: Maybe<Inventory>;
};

export type QueryMyInventoryArgs = {
  appId: Scalars["Int"];
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUserInventoryArgs = {
  appId: Scalars["Int"];
  userId: Scalars["ID"];
};

export type Skin = {
  __typename?: "Skin";
  appId: Scalars["Float"];
  assetId: Scalars["String"];
  botPrice?: Maybe<Scalars["Float"]>;
  case?: Maybe<Array<Case>>;
  collection?: Maybe<Array<Collection>>;
  defaultPrice?: Maybe<Scalars["Float"]>;
  float?: Maybe<Scalars["Float"]>;
  floatMax?: Maybe<Scalars["Float"]>;
  floatMin?: Maybe<Scalars["Float"]>;
  fullName?: Maybe<Scalars["String"]>;
  hasHighDemand?: Maybe<Scalars["Boolean"]>;
  hasScreenshot: Scalars["Boolean"];
  id: Scalars["String"];
  img?: Maybe<Scalars["String"]>;
  inspect?: Maybe<Scalars["String"]>;
  isStatTrak?: Maybe<Scalars["Boolean"]>;
  isUnsellable?: Maybe<Scalars["Boolean"]>;
  lowestPrice?: Maybe<Scalars["Float"]>;
  model3d?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  overstockDiff?: Maybe<Scalars["Float"]>;
  pattern?: Maybe<Scalars["Float"]>;
  preview?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  quality?: Maybe<Scalars["String"]>;
  rarity?: Maybe<Scalars["String"]>;
  screenshot?: Maybe<Scalars["String"]>;
  steamId: Scalars["String"];
  steamImg: Scalars["String"];
  steamName: Scalars["String"];
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

export type RegularCollectionFragment = {__typename?: "Collection"; id: string; name: string; img: string};

export type RegularCaseFragment = {__typename?: "Case"; id: string; name: string; img: string};

export type RegularSkinFragment = {
  __typename?: "Skin";
  id: string;
  appId: number;
  assetId: string;
  name?: string | null;
  img?: string | null;
  preview?: string | null;
  screenshot?: string | null;
  inspect?: string | null;
  float?: number | null;
  floatMin?: number | null;
  floatMax?: number | null;
  pattern?: number | null;
  quality?: string | null;
  rarity?: string | null;
  botPrice?: number | null;
  defaultPrice?: number | null;
  lowestPrice?: number | null;
  price?: number | null;
  overstockDiff?: number | null;
  hasHighDemand?: boolean | null;
  isUnsellable?: boolean | null;
  model3d?: string | null;
  fullName?: string | null;
  hasScreenshot: boolean;
  isStatTrak?: boolean | null;
  steamId: string;
  steamName: string;
  steamImg: string;
  collection?: Array<{__typename?: "Collection"; id: string; name: string; img: string}> | null;
  case?: Array<{__typename?: "Case"; id: string; name: string; img: string}> | null;
};

export type UserInventoryQueryVariables = Exact<{
  appId: Scalars["Int"];
  userId: Scalars["ID"];
}>;

export type UserInventoryQuery = {
  __typename?: "Query";
  userInventory?: {
    __typename?: "Inventory";
    id: string;
    createdAt: any;
    updatedAt: any;
    skins?: Array<{
      __typename?: "Skin";
      id: string;
      appId: number;
      assetId: string;
      name?: string | null;
      img?: string | null;
      preview?: string | null;
      screenshot?: string | null;
      inspect?: string | null;
      float?: number | null;
      floatMin?: number | null;
      floatMax?: number | null;
      pattern?: number | null;
      quality?: string | null;
      rarity?: string | null;
      botPrice?: number | null;
      defaultPrice?: number | null;
      lowestPrice?: number | null;
      price?: number | null;
      overstockDiff?: number | null;
      hasHighDemand?: boolean | null;
      isUnsellable?: boolean | null;
      model3d?: string | null;
      fullName?: string | null;
      hasScreenshot: boolean;
      isStatTrak?: boolean | null;
      steamId: string;
      steamName: string;
      steamImg: string;
      collection?: Array<{__typename?: "Collection"; id: string; name: string; img: string}> | null;
      case?: Array<{__typename?: "Case"; id: string; name: string; img: string}> | null;
    }> | null;
  } | null;
};

export type MyInventoryQueryVariables = Exact<{
  appId: Scalars["Int"];
}>;

export type MyInventoryQuery = {
  __typename?: "Query";
  myInventory?: {
    __typename?: "Inventory";
    id: string;
    createdAt: any;
    updatedAt: any;
    skins?: Array<{
      __typename?: "Skin";
      id: string;
      appId: number;
      assetId: string;
      name?: string | null;
      img?: string | null;
      preview?: string | null;
      screenshot?: string | null;
      inspect?: string | null;
      float?: number | null;
      floatMin?: number | null;
      floatMax?: number | null;
      pattern?: number | null;
      quality?: string | null;
      rarity?: string | null;
      botPrice?: number | null;
      defaultPrice?: number | null;
      lowestPrice?: number | null;
      price?: number | null;
      overstockDiff?: number | null;
      hasHighDemand?: boolean | null;
      isUnsellable?: boolean | null;
      model3d?: string | null;
      fullName?: string | null;
      hasScreenshot: boolean;
      isStatTrak?: boolean | null;
      steamId: string;
      steamName: string;
      steamImg: string;
      collection?: Array<{__typename?: "Collection"; id: string; name: string; img: string}> | null;
      case?: Array<{__typename?: "Case"; id: string; name: string; img: string}> | null;
    }> | null;
  } | null;
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

export const RegularCollectionFragmentDoc = gql`
  fragment RegularCollection on Collection {
    id
    name
    img
  }
`;
export const RegularCaseFragmentDoc = gql`
  fragment RegularCase on Case {
    id
    name
    img
  }
`;
export const RegularSkinFragmentDoc = gql`
  fragment RegularSkin on Skin {
    id
    appId
    assetId
    name
    img
    preview
    screenshot
    inspect
    float
    floatMin
    floatMax
    pattern
    quality
    rarity
    botPrice
    defaultPrice
    lowestPrice
    price
    overstockDiff
    hasHighDemand
    isUnsellable
    model3d
    collection {
      ...RegularCollection
    }
    case {
      ...RegularCase
    }
    fullName
    hasScreenshot
    isStatTrak
    steamId
    steamName
    steamImg
  }
  ${RegularCollectionFragmentDoc}
  ${RegularCaseFragmentDoc}
`;
export const UserInventoryDocument = gql`
  query userInventory($appId: Int!, $userId: ID!) {
    userInventory(appId: $appId, userId: $userId) {
      id
      createdAt
      updatedAt
      skins {
        ...RegularSkin
      }
    }
  }
  ${RegularSkinFragmentDoc}
`;

/**
 * __useUserInventoryQuery__
 *
 * To run a query within a React component, call `useUserInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInventoryQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserInventoryQuery(
  baseOptions: Apollo.QueryHookOptions<UserInventoryQuery, UserInventoryQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<UserInventoryQuery, UserInventoryQueryVariables>(UserInventoryDocument, options);
}
export function useUserInventoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserInventoryQuery, UserInventoryQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<UserInventoryQuery, UserInventoryQueryVariables>(UserInventoryDocument, options);
}
export type UserInventoryQueryHookResult = ReturnType<typeof useUserInventoryQuery>;
export type UserInventoryLazyQueryHookResult = ReturnType<typeof useUserInventoryLazyQuery>;
export type UserInventoryQueryResult = Apollo.QueryResult<UserInventoryQuery, UserInventoryQueryVariables>;
export const MyInventoryDocument = gql`
  query myInventory($appId: Int!) {
    myInventory(appId: $appId) {
      id
      createdAt
      updatedAt
      skins {
        ...RegularSkin
      }
    }
  }
  ${RegularSkinFragmentDoc}
`;

/**
 * __useMyInventoryQuery__
 *
 * To run a query within a React component, call `useMyInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInventoryQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useMyInventoryQuery(baseOptions: Apollo.QueryHookOptions<MyInventoryQuery, MyInventoryQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<MyInventoryQuery, MyInventoryQueryVariables>(MyInventoryDocument, options);
}
export function useMyInventoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyInventoryQuery, MyInventoryQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<MyInventoryQuery, MyInventoryQueryVariables>(MyInventoryDocument, options);
}
export type MyInventoryQueryHookResult = ReturnType<typeof useMyInventoryQuery>;
export type MyInventoryLazyQueryHookResult = ReturnType<typeof useMyInventoryLazyQuery>;
export type MyInventoryQueryResult = Apollo.QueryResult<MyInventoryQuery, MyInventoryQueryVariables>;
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
