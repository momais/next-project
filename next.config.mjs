/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_NAME: 'Next App',
<<<<<<< HEAD
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    // Add other environment variables here
  },
  images: {
    domains: ['localhost'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
=======
    NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    // Add other environment variables here
  },
  experimental: {
    serverActions: true,
>>>>>>> 4caa4617078b9d6d3e9d9b17b2dd37dd30393525
  },
};

export default nextConfig;
