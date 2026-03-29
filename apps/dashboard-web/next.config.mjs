/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@enterprise/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com' // Google OAuth avatars
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com' // GitHub OAuth avatars
      },
      {
        protocol: 'https',
        hostname: '*.microsoftonline.com' // Microsoft OAuth avatars
      }
    ]
  }
};

export default nextConfig;
