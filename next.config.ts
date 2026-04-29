import type { NextConfig } from "next";
import pathRedirects from "./redirects.json";

type PathRedirect = { source: string; destination: string };

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return (pathRedirects as PathRedirect[]).map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;