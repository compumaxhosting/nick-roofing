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
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/roofing-repair-hawthorne-nj ",
        destination: "/",
        permanent: true,
      },
      {
        source: "/skylight-repair",
        destination: "/skylight-repair-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/roof-leak-repair-hawthorne-nj",
        destination: "/blog/top-signs-you-need-roof-repair-services-hawthorne-nj",
        permanent: true,
      },
      {
        source: "/roof-leak-repair-hawthorne-nj",
        destination: "/blog/top-signs-you-need-roof-repair-services-hawthorne-nj",
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
        source: "/lander",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/contact",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;