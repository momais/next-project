/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com'],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'Next App',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    // Add other environment variables here
  },
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
