import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      {
        source: "/skylight-repair-hawthorne-nj.html",
        destination: "/skylight-repair-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/gutter-installation-hawthorne-nj.html",
        destination: "/gutter-installation-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/water-proofing-hawthorne-nj.html",
        destination: "/water-proofing-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/roof-repair-hawthorne-nj.html",
        destination: "/roof-repair-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/siding-services-hawthorne-nj.html",
        destination: "/siding-services-hawthorne-nj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
