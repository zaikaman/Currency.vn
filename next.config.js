/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
}

module.exports = nextConfig
