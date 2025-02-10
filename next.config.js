/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
    domains: ['yoga-webpage.vercel.app'],
    unoptimized: false
  },
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Configure powered by header
  poweredByHeader: false
}

module.exports = nextConfig 