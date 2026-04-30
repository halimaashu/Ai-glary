// next.config.js
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
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