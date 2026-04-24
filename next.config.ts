import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal-landing-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
