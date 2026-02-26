import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/arinna-mosaik",
        destination: "https://arinna-mosaik.vercel.app/arinna-mosaik",
      },
      {
        source: "/arinna-mosaik/:path*",
        destination: "https://arinna-mosaik.vercel.app/arinna-mosaik/:path*",
      },
    ];
  },
};

export default nextConfig;
