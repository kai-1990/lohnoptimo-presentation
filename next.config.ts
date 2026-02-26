import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/arina-mosaik",
        destination: "https://arina-mosaik.vercel.app/arina-mosaik",
      },
      {
        source: "/arina-mosaik/:path*",
        destination: "https://arina-mosaik.vercel.app/arina-mosaik/:path*",
      },
    ];
  },
};

export default nextConfig;
