/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.msscdn.net'],
  }
}

module.exports = nextConfig
