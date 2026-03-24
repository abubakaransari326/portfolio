import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Repo root can contain stray lockfiles; pin the app root to this package.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
