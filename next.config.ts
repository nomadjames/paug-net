import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/paug-net",
  assetPrefix: "/paug-net/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
