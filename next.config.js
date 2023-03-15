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
};

module.exports = nextConfig;
