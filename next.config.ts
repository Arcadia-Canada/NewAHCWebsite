import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/conditions/alzheimers-care/",
        destination: "/conditions/dementia-care-at-home/",
        permanent: true,
      },
      {
        source: "/how-care-starts/book-a-consultation/",
        destination: "/contact/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;