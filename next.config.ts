import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  // Explicitly use webpack instead of Turbopack
  webpack: (config) => {
    // Add any custom webpack configuration here if needed
    return config;
  },
  // Empty turbopack config to explicitly disable Turbopack
  turbopack: {},
});

export default nextConfig;
