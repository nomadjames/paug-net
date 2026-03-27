import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/paug-net" : "",
  assetPrefix: isProd ? "/paug-net/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
