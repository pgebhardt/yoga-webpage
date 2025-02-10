/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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