import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Redirects from old WordPress URL patterns
  async redirects() {
    return [
      {
        // WordPress had a typo: "goverment" instead of "government"
        source: "/goverment-services",
        destination: "/government-services",
        permanent: true,
      },
      {
        source: "/blogs/page/:page",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
