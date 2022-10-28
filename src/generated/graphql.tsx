import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'Case';
  id: Scalars['String'];
  img: Scalars['String'];
  name: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['String'];
  img: Scalars['String'];
  name: Scalars['String'];
};

export type CreateSellInput = {
  items: Array<Item>;
};

export enum EGame {
  Csgo = 'CSGO',
  Dota2 = 'DOTA2'
}

export enum ESellStatus {
  AcceptedBySupport = 'ACCEPTED_BY_SUPPORT',
  Completed = 'COMPLETED',
  PayAcceptedByMerchant = 'PAY_ACCEPTED_BY_MERCHANT',
  PayRequestToMerchant = 'PAY_REQUEST_TO_MERCHANT',
  TradeAcceptedByUser = 'TRADE_ACCEPTED_BY_USER',
  TradeTimeoutExceeded = 'TRADE_TIMEOUT_EXCEEDED',
  WaitingSupportAccept = 'WAITING_SUPPORT_ACCEPT',
  WaitingUserTradeConfirmation = 'WAITING_USER_TRADE_CONFIRMATION'
}

export enum EStatus {
  IsDepositEnabled = 'IS_DEPOSIT_ENABLED',
  IsFuckup = 'IS_FUCKUP',
  IsMaintenance = 'IS_MAINTENANCE',
  IsQiwiEnabled = 'IS_QIWI_ENABLED',
  IsSellEnabled = 'IS_SELL_ENABLED',
  IsSteamProblems = 'IS_STEAM_PROBLEMS',
  IsTinkoffEnabled = 'IS_TINKOFF_ENABLED',
  IsWithdrawalEnabled = 'IS_WITHDRAWAL_ENABLED'
}

export type Inventory = {
  __typename?: 'Inventory';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  skins?: Maybe<Array<Skin>>;
  updatedAt: Scalars['DateTime'];
};

export type Item = {
  id: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSell: Sell;
  logout: Scalars['Boolean'];
  toggleWorkStatus: WorkStatuses;
  updateConnectionStatus: Scalars['Boolean'];
  updateMyTradeUrl: Scalars['Boolean'];
  updatePrice: SteamMarketItem;
  updatePrices: SteamMarketItem;
};


export type MutationCreateSellArgs = {
  dto: CreateSellInput;
  userId: Scalars['ID'];
};


export type MutationToggleWorkStatusArgs = {
  status: UpdateWorkStatusesInput;
};


export type MutationUpdateMyTradeUrlArgs = {
  tradeUrl?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePriceArgs = {
  dto: UpdatePriceInput;
  name: Scalars['String'];
};


export type MutationUpdatePricesArgs = {
  dto: UpdatePricesInput;
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  serviceId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  myInventory?: Maybe<Inventory>;
  searchByPrice: SteamMarketItem;
  steamBot?: Maybe<SteamBotModel>;
  steamBots: Array<SteamBotModel>;
  user?: Maybe<User>;
  userInventory?: Maybe<Inventory>;
  users: Array<User>;
  workStatuses: WorkStatuses;
};


export type QueryMyInventoryArgs = {
  appId: Scalars['Int'];
};


export type QuerySearchByPriceArgs = {
  query: SearchQueryInput;
};


export type QuerySteamBotArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserInventoryArgs = {
  appId: Scalars['Int'];
  userId: Scalars['ID'];
};

export type SearchQueryInput = {
  compare: Scalars['String'];
  limit?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Sell = {
  __typename?: 'Sell';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  givenItem: Scalars['String'];
  id: Scalars['String'];
  ip: Scalars['String'];
  items: Array<Skin>;
  paymentProvider: Scalars['String'];
  status: ESellStatus;
  steamBot: SteamBotModel;
  totalItemsPrice: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userAgent: Scalars['String'];
  wallet: Scalars['String'];
};

export type Skin = {
  __typename?: 'Skin';
  appId: Scalars['Float'];
  assetId: Scalars['String'];
  botPrice?: Maybe<Scalars['Float']>;
  case?: Maybe<Array<Case>>;
  collection?: Maybe<Array<Collection>>;
  defaultPrice?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  floatMax?: Maybe<Scalars['Float']>;
  floatMin?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  hasHighDemand?: Maybe<Scalars['Boolean']>;
  hasScreenshot: Scalars['Boolean'];
  id: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  inspect?: Maybe<Scalars['String']>;
  isBlacklisted: Scalars['Boolean'];
  isStatTrak?: Maybe<Scalars['Boolean']>;
  isUnsellable?: Maybe<Scalars['Boolean']>;
  lowestPrice?: Maybe<Scalars['Float']>;
  model3d?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  overstockDiff?: Maybe<Scalars['Float']>;
  pattern?: Maybe<Scalars['Float']>;
  preview?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quality?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  rarityColor?: Maybe<Scalars['String']>;
  rubPrice?: Maybe<Scalars['Float']>;
  screenshot?: Maybe<Scalars['String']>;
  steamId: Scalars['String'];
  steamImg: Scalars['String'];
  steamName: Scalars['String'];
  stickers?: Maybe<Array<Sticker>>;
};

export type SteamBotModel = {
  __typename?: 'SteamBotModel';
  accountName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  cookies: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  identitySecret: Scalars['String'];
  isDeactivated: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  profileUrl: Scalars['String'];
  proxy?: Maybe<Scalars['String']>;
  sharedSecret: Scalars['String'];
  tradeUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SteamMarketItem = {
  __typename?: 'SteamMarketItem';
  createdAt: Scalars['DateTime'];
  gameId: EGame;
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Sticker = {
  __typename?: 'Sticker';
  id: Scalars['String'];
  img: Scalars['String'];
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  workStatusesUpdated: WorkStatuses;
};

export type UpdatePriceInput = {
  price: Scalars['Float'];
};

export type UpdatePricesInput = {
  game: EGame;
};

export type UpdateWorkStatusesInput = {
  name: EStatus;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  profiles?: Maybe<Array<Profile>>;
  role: UserRole;
  tradeUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Creator = 'CREATOR',
  Support = 'SUPPORT',
  User = 'USER'
}

export type WorkStatuses = {
  __typename?: 'WorkStatuses';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isDepositEnabled: Scalars['Boolean'];
  isFuckup: Scalars['Boolean'];
  isMaintenance: Scalars['Boolean'];
  isQiwiEnabled: Scalars['Boolean'];
  isSellEnabled: Scalars['Boolean'];
  isSteamProblems: Scalars['Boolean'];
  isTinkoffEnabled: Scalars['Boolean'];
  isWithdrawalEnabled: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type RegularSteamBotFragment = { __typename?: 'SteamBotModel', id: string, avatar?: string | null, name: string, profileUrl: string, tradeUrl?: string | null, isDeactivated: boolean, createdAt: any, updatedAt: any };

export type SteamBotsQueryVariables = Exact<{ [key: string]: never; }>;


export type SteamBotsQuery = { __typename?: 'Query', steamBots: Array<{ __typename?: 'SteamBotModel', id: string, avatar?: string | null, name: string, profileUrl: string, tradeUrl?: string | null, isDeactivated: boolean, createdAt: any, updatedAt: any }> };

export type SteamBotQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SteamBotQuery = { __typename?: 'Query', steamBot?: { __typename?: 'SteamBotModel', id: string, avatar?: string | null, name: string, profileUrl: string, tradeUrl?: string | null, isDeactivated: boolean, createdAt: any, updatedAt: any } | null };

export type RegularCollectionFragment = { __typename?: 'Collection', id: string, name: string, img: string };

export type RegularCaseFragment = { __typename?: 'Case', id: string, name: string, img: string };

export type RegularSkinFragment = { __typename?: 'Skin', id: string, appId: number, assetId: string, name?: string | null, img?: string | null, preview?: string | null, screenshot?: string | null, inspect?: string | null, float?: number | null, floatMin?: number | null, floatMax?: number | null, pattern?: number | null, quality?: string | null, rarity?: string | null, botPrice?: number | null, defaultPrice?: number | null, lowestPrice?: number | null, price?: number | null, overstockDiff?: number | null, hasHighDemand?: boolean | null, isUnsellable?: boolean | null, model3d?: string | null, fullName?: string | null, hasScreenshot: boolean, isStatTrak?: boolean | null, steamId: string, steamName: string, steamImg: string, isBlacklisted: boolean, collection?: Array<{ __typename?: 'Collection', id: string, name: string, img: string }> | null, case?: Array<{ __typename?: 'Case', id: string, name: string, img: string }> | null };

export type UserInventoryQueryVariables = Exact<{
  appId: Scalars['Int'];
  userId: Scalars['ID'];
}>;


export type UserInventoryQuery = { __typename?: 'Query', userInventory?: { __typename?: 'Inventory', id: string, createdAt: any, updatedAt: any, skins?: Array<{ __typename?: 'Skin', id: string, appId: number, assetId: string, name?: string | null, img?: string | null, preview?: string | null, screenshot?: string | null, inspect?: string | null, float?: number | null, floatMin?: number | null, floatMax?: number | null, pattern?: number | null, quality?: string | null, rarity?: string | null, botPrice?: number | null, defaultPrice?: number | null, lowestPrice?: number | null, price?: number | null, overstockDiff?: number | null, hasHighDemand?: boolean | null, isUnsellable?: boolean | null, model3d?: string | null, fullName?: string | null, hasScreenshot: boolean, isStatTrak?: boolean | null, steamId: string, steamName: string, steamImg: string, isBlacklisted: boolean, collection?: Array<{ __typename?: 'Collection', id: string, name: string, img: string }> | null, case?: Array<{ __typename?: 'Case', id: string, name: string, img: string }> | null }> | null } | null };

export type MyInventoryQueryVariables = Exact<{
  appId: Scalars['Int'];
}>;


export type MyInventoryQuery = { __typename?: 'Query', myInventory?: { __typename?: 'Inventory', id: string, createdAt: any, updatedAt: any, skins?: Array<{ __typename?: 'Skin', id: string, appId: number, assetId: string, name?: string | null, img?: string | null, preview?: string | null, screenshot?: string | null, inspect?: string | null, float?: number | null, floatMin?: number | null, floatMax?: number | null, pattern?: number | null, quality?: string | null, rarity?: string | null, botPrice?: number | null, defaultPrice?: number | null, lowestPrice?: number | null, price?: number | null, overstockDiff?: number | null, hasHighDemand?: boolean | null, isUnsellable?: boolean | null, model3d?: string | null, fullName?: string | null, hasScreenshot: boolean, isStatTrak?: boolean | null, steamId: string, steamName: string, steamImg: string, isBlacklisted: boolean, collection?: Array<{ __typename?: 'Collection', id: string, name: string, img: string }> | null, case?: Array<{ __typename?: 'Case', id: string, name: string, img: string }> | null }> | null } | null };

export type RegularSellFragment = { __typename?: 'Sell', id: string, totalItemsPrice: number, paymentProvider: string, wallet: string, email: string, givenItem: string, ip: string, userAgent: string, status: ESellStatus, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'Skin', id: string, appId: number, assetId: string, name?: string | null, img?: string | null, preview?: string | null, screenshot?: string | null, inspect?: string | null, float?: number | null, floatMin?: number | null, floatMax?: number | null, pattern?: number | null, quality?: string | null, rarity?: string | null, botPrice?: number | null, defaultPrice?: number | null, lowestPrice?: number | null, price?: number | null, overstockDiff?: number | null, hasHighDemand?: boolean | null, isUnsellable?: boolean | null, model3d?: string | null, fullName?: string | null, hasScreenshot: boolean, isStatTrak?: boolean | null, steamId: string, steamName: string, steamImg: string, isBlacklisted: boolean, collection?: Array<{ __typename?: 'Collection', id: string, name: string, img: string }> | null, case?: Array<{ __typename?: 'Case', id: string, name: string, img: string }> | null }>, user: { __typename?: 'User', id: string, name?: string | null, role: UserRole, avatar?: string | null, tradeUrl?: string | null, profiles?: Array<{ __typename?: 'Profile', id: string, provider: string, serviceId: string }> | null }, steamBot: { __typename?: 'SteamBotModel', id: string, avatar?: string | null, name: string, profileUrl: string, tradeUrl?: string | null, isDeactivated: boolean, createdAt: any, updatedAt: any } };

export type CreateSellMutationVariables = Exact<{
  dto: CreateSellInput;
  userId: Scalars['ID'];
}>;


export type CreateSellMutation = { __typename?: 'Mutation', createSell: { __typename?: 'Sell', id: string, totalItemsPrice: number, paymentProvider: string, wallet: string, email: string, givenItem: string, ip: string, userAgent: string, status: ESellStatus, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'Skin', id: string, appId: number, assetId: string, name?: string | null, img?: string | null, preview?: string | null, screenshot?: string | null, inspect?: string | null, float?: number | null, floatMin?: number | null, floatMax?: number | null, pattern?: number | null, quality?: string | null, rarity?: string | null, botPrice?: number | null, defaultPrice?: number | null, lowestPrice?: number | null, price?: number | null, overstockDiff?: number | null, hasHighDemand?: boolean | null, isUnsellable?: boolean | null, model3d?: string | null, fullName?: string | null, hasScreenshot: boolean, isStatTrak?: boolean | null, steamId: string, steamName: string, steamImg: string, isBlacklisted: boolean, collection?: Array<{ __typename?: 'Collection', id: string, name: string, img: string }> | null, case?: Array<{ __typename?: 'Case', id: string, name: string, img: string }> | null }>, user: { __typename?: 'User', id: string, name?: string | null, role: UserRole, avatar?: string | null, tradeUrl?: string | null, profiles?: Array<{ __typename?: 'Profile', id: string, provider: string, serviceId: string }> | null }, steamBot: { __typename?: 'SteamBotModel', id: string, avatar?: string | null, name: string, profileUrl: string, tradeUrl?: string | null, isDeactivated: boolean, createdAt: any, updatedAt: any } } };

export type RegularProfileFragment = { __typename?: 'Profile', id: string, provider: string, serviceId: string };

export type RegularUserFragment = { __typename?: 'User', id: string, name?: string | null, role: UserRole, avatar?: string | null, tradeUrl?: string | null, profiles?: Array<{ __typename?: 'Profile', id: string, provider: string, serviceId: string }> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, role: UserRole, avatar?: string | null, tradeUrl?: string | null, profiles?: Array<{ __typename?: 'Profile', id: string, provider: string, serviceId: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UpdateConnectionStatusMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateConnectionStatusMutation = { __typename?: 'Mutation', updateConnectionStatus: boolean };

export type UpdateMyTradeUrlMutationVariables = Exact<{
  tradeUrl: Scalars['String'];
}>;


export type UpdateMyTradeUrlMutation = { __typename?: 'Mutation', updateMyTradeUrl: boolean };

export type RegularWorkStatusesFragment = { __typename?: 'WorkStatuses', isDepositEnabled: boolean, isWithdrawalEnabled: boolean, isSellEnabled: boolean, isMaintenance: boolean, isSteamProblems: boolean, isFuckup: boolean, isQiwiEnabled: boolean, isTinkoffEnabled: boolean };

export type WorkStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkStatusesQuery = { __typename?: 'Query', workStatuses: { __typename?: 'WorkStatuses', isDepositEnabled: boolean, isWithdrawalEnabled: boolean, isSellEnabled: boolean, isMaintenance: boolean, isSteamProblems: boolean, isFuckup: boolean, isQiwiEnabled: boolean, isTinkoffEnabled: boolean } };

export type ToggleWorkStatusMutationVariables = Exact<{
  status: UpdateWorkStatusesInput;
}>;


export type ToggleWorkStatusMutation = { __typename?: 'Mutation', toggleWorkStatus: { __typename?: 'WorkStatuses', isDepositEnabled: boolean, isWithdrawalEnabled: boolean, isSellEnabled: boolean, isMaintenance: boolean, isSteamProblems: boolean, isFuckup: boolean, isQiwiEnabled: boolean, isTinkoffEnabled: boolean } };

export type WorkStatusesUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WorkStatusesUpdatedSubscription = { __typename?: 'Subscription', workStatusesUpdated: { __typename?: 'WorkStatuses', isDepositEnabled: boolean, isWithdrawalEnabled: boolean, isSellEnabled: boolean, isMaintenance: boolean, isSteamProblems: boolean, isFuckup: boolean, isQiwiEnabled: boolean, isTinkoffEnabled: boolean } };

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
  isBlacklisted
}
    ${RegularCollectionFragmentDoc}
${RegularCaseFragmentDoc}`;
export const RegularProfileFragmentDoc = gql`
    fragment RegularProfile on Profile {
  id
  provider
  serviceId
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  role
  avatar
  tradeUrl
  profiles {
    ...RegularProfile
  }
}
    ${RegularProfileFragmentDoc}`;
export const RegularSteamBotFragmentDoc = gql`
    fragment RegularSteamBot on SteamBotModel {
  id
  avatar
  name
  profileUrl
  tradeUrl
  isDeactivated
  createdAt
  updatedAt
}
    `;
export const RegularSellFragmentDoc = gql`
    fragment RegularSell on Sell {
  id
  totalItemsPrice
  paymentProvider
  wallet
  email
  items {
    ...RegularSkin
  }
  givenItem
  user {
    ...RegularUser
  }
  ip
  userAgent
  steamBot {
    ...RegularSteamBot
  }
  status
  createdAt
  updatedAt
}
    ${RegularSkinFragmentDoc}
${RegularUserFragmentDoc}
${RegularSteamBotFragmentDoc}`;
export const RegularWorkStatusesFragmentDoc = gql`
    fragment RegularWorkStatuses on WorkStatuses {
  isDepositEnabled
  isWithdrawalEnabled
  isSellEnabled
  isMaintenance
  isSteamProblems
  isFuckup
  isQiwiEnabled
  isTinkoffEnabled
}
    `;
export const SteamBotsDocument = gql`
    query steamBots {
  steamBots {
    ...RegularSteamBot
  }
}
    ${RegularSteamBotFragmentDoc}`;

/**
 * __useSteamBotsQuery__
 *
 * To run a query within a React component, call `useSteamBotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSteamBotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSteamBotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSteamBotsQuery(baseOptions?: Apollo.QueryHookOptions<SteamBotsQuery, SteamBotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SteamBotsQuery, SteamBotsQueryVariables>(SteamBotsDocument, options);
      }
export function useSteamBotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SteamBotsQuery, SteamBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SteamBotsQuery, SteamBotsQueryVariables>(SteamBotsDocument, options);
        }
export type SteamBotsQueryHookResult = ReturnType<typeof useSteamBotsQuery>;
export type SteamBotsLazyQueryHookResult = ReturnType<typeof useSteamBotsLazyQuery>;
export type SteamBotsQueryResult = Apollo.QueryResult<SteamBotsQuery, SteamBotsQueryVariables>;
export const SteamBotDocument = gql`
    query steamBot($id: ID!) {
  steamBot(id: $id) {
    ...RegularSteamBot
  }
}
    ${RegularSteamBotFragmentDoc}`;

/**
 * __useSteamBotQuery__
 *
 * To run a query within a React component, call `useSteamBotQuery` and pass it any options that fit your needs.
 * When your component renders, `useSteamBotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSteamBotQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSteamBotQuery(baseOptions: Apollo.QueryHookOptions<SteamBotQuery, SteamBotQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SteamBotQuery, SteamBotQueryVariables>(SteamBotDocument, options);
      }
export function useSteamBotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SteamBotQuery, SteamBotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SteamBotQuery, SteamBotQueryVariables>(SteamBotDocument, options);
        }
export type SteamBotQueryHookResult = ReturnType<typeof useSteamBotQuery>;
export type SteamBotLazyQueryHookResult = ReturnType<typeof useSteamBotLazyQuery>;
export type SteamBotQueryResult = Apollo.QueryResult<SteamBotQuery, SteamBotQueryVariables>;
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
    ${RegularSkinFragmentDoc}`;

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
export function useUserInventoryQuery(baseOptions: Apollo.QueryHookOptions<UserInventoryQuery, UserInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInventoryQuery, UserInventoryQueryVariables>(UserInventoryDocument, options);
      }
export function useUserInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInventoryQuery, UserInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
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
    ${RegularSkinFragmentDoc}`;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInventoryQuery, MyInventoryQueryVariables>(MyInventoryDocument, options);
      }
export function useMyInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInventoryQuery, MyInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInventoryQuery, MyInventoryQueryVariables>(MyInventoryDocument, options);
        }
export type MyInventoryQueryHookResult = ReturnType<typeof useMyInventoryQuery>;
export type MyInventoryLazyQueryHookResult = ReturnType<typeof useMyInventoryLazyQuery>;
export type MyInventoryQueryResult = Apollo.QueryResult<MyInventoryQuery, MyInventoryQueryVariables>;
export const CreateSellDocument = gql`
    mutation createSell($dto: CreateSellInput!, $userId: ID!) {
  createSell(dto: $dto, userId: $userId) {
    ...RegularSell
  }
}
    ${RegularSellFragmentDoc}`;
export type CreateSellMutationFn = Apollo.MutationFunction<CreateSellMutation, CreateSellMutationVariables>;

/**
 * __useCreateSellMutation__
 *
 * To run a mutation, you first call `useCreateSellMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellMutation, { data, loading, error }] = useCreateSellMutation({
 *   variables: {
 *      dto: // value for 'dto'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateSellMutation(baseOptions?: Apollo.MutationHookOptions<CreateSellMutation, CreateSellMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSellMutation, CreateSellMutationVariables>(CreateSellDocument, options);
      }
export type CreateSellMutationHookResult = ReturnType<typeof useCreateSellMutation>;
export type CreateSellMutationResult = Apollo.MutationResult<CreateSellMutation>;
export type CreateSellMutationOptions = Apollo.BaseMutationOptions<CreateSellMutation, CreateSellMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
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
        const options = {...defaultOptions, ...baseOptions}
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
export type UpdateConnectionStatusMutationFn = Apollo.MutationFunction<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>;

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
export function useUpdateConnectionStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>(UpdateConnectionStatusDocument, options);
      }
export type UpdateConnectionStatusMutationHookResult = ReturnType<typeof useUpdateConnectionStatusMutation>;
export type UpdateConnectionStatusMutationResult = Apollo.MutationResult<UpdateConnectionStatusMutation>;
export type UpdateConnectionStatusMutationOptions = Apollo.BaseMutationOptions<UpdateConnectionStatusMutation, UpdateConnectionStatusMutationVariables>;
export const UpdateMyTradeUrlDocument = gql`
    mutation updateMyTradeUrl($tradeUrl: String!) {
  updateMyTradeUrl(tradeUrl: $tradeUrl)
}
    `;
export type UpdateMyTradeUrlMutationFn = Apollo.MutationFunction<UpdateMyTradeUrlMutation, UpdateMyTradeUrlMutationVariables>;

/**
 * __useUpdateMyTradeUrlMutation__
 *
 * To run a mutation, you first call `useUpdateMyTradeUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyTradeUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyTradeUrlMutation, { data, loading, error }] = useUpdateMyTradeUrlMutation({
 *   variables: {
 *      tradeUrl: // value for 'tradeUrl'
 *   },
 * });
 */
export function useUpdateMyTradeUrlMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyTradeUrlMutation, UpdateMyTradeUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyTradeUrlMutation, UpdateMyTradeUrlMutationVariables>(UpdateMyTradeUrlDocument, options);
      }
export type UpdateMyTradeUrlMutationHookResult = ReturnType<typeof useUpdateMyTradeUrlMutation>;
export type UpdateMyTradeUrlMutationResult = Apollo.MutationResult<UpdateMyTradeUrlMutation>;
export type UpdateMyTradeUrlMutationOptions = Apollo.BaseMutationOptions<UpdateMyTradeUrlMutation, UpdateMyTradeUrlMutationVariables>;
export const WorkStatusesDocument = gql`
    query workStatuses {
  workStatuses {
    ...RegularWorkStatuses
  }
}
    ${RegularWorkStatusesFragmentDoc}`;

/**
 * __useWorkStatusesQuery__
 *
 * To run a query within a React component, call `useWorkStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkStatusesQuery(baseOptions?: Apollo.QueryHookOptions<WorkStatusesQuery, WorkStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkStatusesQuery, WorkStatusesQueryVariables>(WorkStatusesDocument, options);
      }
export function useWorkStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkStatusesQuery, WorkStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkStatusesQuery, WorkStatusesQueryVariables>(WorkStatusesDocument, options);
        }
export type WorkStatusesQueryHookResult = ReturnType<typeof useWorkStatusesQuery>;
export type WorkStatusesLazyQueryHookResult = ReturnType<typeof useWorkStatusesLazyQuery>;
export type WorkStatusesQueryResult = Apollo.QueryResult<WorkStatusesQuery, WorkStatusesQueryVariables>;
export const ToggleWorkStatusDocument = gql`
    mutation toggleWorkStatus($status: UpdateWorkStatusesInput!) {
  toggleWorkStatus(status: $status) {
    ...RegularWorkStatuses
  }
}
    ${RegularWorkStatusesFragmentDoc}`;
export type ToggleWorkStatusMutationFn = Apollo.MutationFunction<ToggleWorkStatusMutation, ToggleWorkStatusMutationVariables>;

/**
 * __useToggleWorkStatusMutation__
 *
 * To run a mutation, you first call `useToggleWorkStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleWorkStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleWorkStatusMutation, { data, loading, error }] = useToggleWorkStatusMutation({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useToggleWorkStatusMutation(baseOptions?: Apollo.MutationHookOptions<ToggleWorkStatusMutation, ToggleWorkStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleWorkStatusMutation, ToggleWorkStatusMutationVariables>(ToggleWorkStatusDocument, options);
      }
export type ToggleWorkStatusMutationHookResult = ReturnType<typeof useToggleWorkStatusMutation>;
export type ToggleWorkStatusMutationResult = Apollo.MutationResult<ToggleWorkStatusMutation>;
export type ToggleWorkStatusMutationOptions = Apollo.BaseMutationOptions<ToggleWorkStatusMutation, ToggleWorkStatusMutationVariables>;
export const WorkStatusesUpdatedDocument = gql`
    subscription workStatusesUpdated {
  workStatusesUpdated {
    ...RegularWorkStatuses
  }
}
    ${RegularWorkStatusesFragmentDoc}`;

/**
 * __useWorkStatusesUpdatedSubscription__
 *
 * To run a query within a React component, call `useWorkStatusesUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWorkStatusesUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkStatusesUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWorkStatusesUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WorkStatusesUpdatedSubscription, WorkStatusesUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WorkStatusesUpdatedSubscription, WorkStatusesUpdatedSubscriptionVariables>(WorkStatusesUpdatedDocument, options);
      }
export type WorkStatusesUpdatedSubscriptionHookResult = ReturnType<typeof useWorkStatusesUpdatedSubscription>;
export type WorkStatusesUpdatedSubscriptionResult = Apollo.SubscriptionResult<WorkStatusesUpdatedSubscription>;