import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      }
    ],
  },
};

export default nextConfig;
