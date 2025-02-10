/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
}

module.exports = nextConfig 