import { UserRole } from "_app/generated/graphql";

export const humanizeRole = (role: UserRole): string => {
  const translations = {
    [UserRole.Creator]: "creator",
    [UserRole.Admin]: "admin",
    [UserRole.Support]: "support",
    [UserRole.User]: "user",
  };

  return translations[role];
};