const {i18n} = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["avatars.akamai.steamstatic.com", "community.cloudflare.steamstatic.com"],
    formats: ["image/avif", "image/webp"],
  },
  i18n,
};

module.exports = nextConfig;
