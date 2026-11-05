import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // ukázka na GitHub Pages běží na /MN-Shine (npm run demo:build)
  ...(process.env.DEMO_BASE_PATH ? { basePath: process.env.DEMO_BASE_PATH } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
