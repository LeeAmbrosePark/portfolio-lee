import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/finance",
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
