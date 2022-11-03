const {withSentryConfig} = require("@sentry/nextjs");

const {i18n} = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [
      "avatars.akamai.steamstatic.com",
      "community.cloudflare.steamstatic.com",
      "steamcommunity-a.akamaihd.net",
      "dev-cdn.takeloot.ru",
    ],
    formats: ["image/avif", "image/webp"],
  },
  i18n,
  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
