import {EStatus} from "_app/generated/graphql";

export const randomInteger = (min: number, max: number): number => {
  const rand = min - 1 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const transformWorkStatuses = (
  obj:
    | string
    | EStatus
    | {
        __typename?: "WorkStatuses" | undefined;
        isDepositEnabled: boolean;
        isWithdrawalEnabled: boolean;
        isSellEnabled: boolean;
        isMaintenance: boolean;
        isSteamProblems: boolean;
        isFuckup: boolean;
        isQiwiEnabled: boolean;
        isTinkoffEnabled: boolean;
      },
): {name: string; value: boolean}[] => {
  // @ts-ignore
  return Object.keys(obj).map((key) => ({name: key, value: obj[key]}));
};

export const switchFn =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    (lookupObject: {[x: string]: any}, defaultCase = "_default") =>
      (expression: string | number) =>
        (lookupObject[expression] || lookupObject[defaultCase])();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValueByKey = (object: any, key: string): string => object[key];
