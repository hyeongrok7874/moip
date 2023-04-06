const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.msscdn.net"],
  },
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

module.exports = nextConfig;
