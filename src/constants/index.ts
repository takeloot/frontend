export const PUBLIC_API = process.env.NEXT_PUBLIC_API || "dev-api.takeloot.ru";

export const LANGUAGES = ["en", "ru"];
export const CURRENCIES = ["usd", "rub"];

export const TOAST_LIMIT = 3;

export const STEAM_TRADE_URL_REGEX = /https?:\/\/steamcommunity.com\/tradeoffer\/new\/\?partner=(\d+)&token=(.{8})$/;
