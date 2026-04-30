/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // ✓ wildcard belongs here
      },
    ],
  },
};

export default nextConfig;