/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

export default nextConfig;
