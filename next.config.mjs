/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_NAME: 'Next App',
    NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    // Add other environment variables here
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
