import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/finance",
        destination: "/finance/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/finance/",
        destination: "https://park-finance.vercel.app/",
      },
      {
        source: "/finance/:path*",
        destination: "https://park-finance.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
