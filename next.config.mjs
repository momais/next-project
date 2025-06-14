/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com', 'letsenjoyksa.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'letsenjoyksa.com',
        port: '',
        pathname: '/imgupload/**',
      },
    ],
    unoptimized: true, // This will help with local images
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'Next App',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    // Add other environment variables here
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
