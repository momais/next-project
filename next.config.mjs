/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  env: {
    NEXT_PUBLIC_APP_NAME: 'Next App',
    NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    // Add other environment variables here
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'letsenjoyksa.com',
        port: '',
        pathname: '/imgupload/**',
      },
    ],
    unoptimized: true, // This will help with local images
=======
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
>>>>>>> b551bcdd3df87fc62fea482d7a7b09c3c30ebfc1
  },
};

export default nextConfig;
