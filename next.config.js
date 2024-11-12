/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Thêm các domain cho images nếu cần
  },
}

module.exports = nextConfig
