import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    domains: ['snehaltayde.com'],
  },
  redirects: async () => [
    {
      source: "/international-medical-university",
      destination: "/university/international-medical-university",
      permanent: true,
    },
    {
      source: "/icici",
      destination: "/loan/icici",
      permanent: true,
    },
    {
      source: "/eurasian-international-university",
      destination: "/university/eurasian-international-university",
      permanent: true,
    },
    {
      source: "/blog",
      destination: "/blogs",
      permanent: true,
    },
  ],
};

export default nextConfig;
