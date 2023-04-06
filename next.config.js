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
};

module.exports = nextConfig;
