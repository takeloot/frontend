/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["avatars.akamai.steamstatic.com", "community.cloudflare.steamstatic.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
