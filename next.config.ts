import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config,{ isServer, dev, buildId, defaultLoaders,webpack}) => {
    config.resolve.alias.canvas= false
    config.resolve.alias.encoding= false
    return config
  }
};

export default nextConfig;
