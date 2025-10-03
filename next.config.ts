import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Specific .html pages → corresponding Next.js routes
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },

      // Any other .html page → redirect to home
      {
        source: "/:path((?!index|about|gallery|contact|services).*)\\.html",
        destination: "/",
        permanent: true,
      },

      // Any other non-existent page → redirect to home
      {
        source: "/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
