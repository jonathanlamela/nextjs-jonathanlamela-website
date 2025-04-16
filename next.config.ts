import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.radioflash.fm",
      },
      {
        protocol: "https",
        hostname: "www.ldc.it",
      },
      {
        protocol: "https",
        hostname: "www.4deco.it",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com"
      },
      {
        protocol: "https",
        hostname: "www.tonerfast24.it"
      }


    ],
  },
};

export default nextConfig;
