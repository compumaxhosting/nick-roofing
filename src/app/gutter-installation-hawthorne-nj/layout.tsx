import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Gutter Installation Hawthorne NJ | Seamless Gutters | Nick Roofing",
  description:
    "Expert gutter installation in Hawthorne, NJ. Nick Roofing provides seamless gutters, leaf guards, and repairs to protect your home from water damage. Free consultation!",
  
  keywords: [
    "gutter installation Hawthorne NJ",
    "seamless gutters",
    "gutter repair Hawthorne",
    "leaf guards NJ",
    "Nick Roofing gutters",
  ],

  authors: [{ name: "Nick Roofing" }],
  metadataBase: new URL("https://www.nickroofing.com"),

  alternates: {
    canonical: "/gutter-installation-hawthorne-nj",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  themeColor: "#ffffff",

  openGraph: {
    title: "Professional Gutter Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Protect your home with seamless, durable gutter solutions. Expert installation, repair, and leaf guards in Hawthorne, NJ.",
    url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
    siteName: "Nick Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nickroofing.com/images/gutter-installation-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Gutter Installation Hawthorne NJ - Nick Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gutter Installation Hawthorne NJ | Nick Roofing",
    description:
      "Durable, seamless gutter solutions tailored to Hawthorne's weather. Contact Nick Roofing for a free consultation.",
    images: [
      "https://www.nickroofing.com/images/gutter-installation-social-share.jpg",
    ],
    creator: "@NickRoofing",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://www.nickroofing.com/#organization",
      name: "Nick Roofing",
      url: "https://www.nickroofing.com/",
      image: "https://www.nickroofing.com/images/logo.png",
      description:
        "Nick Roofing is a trusted roofing contractor in Hawthorne, NJ specializing in gutter installation, repair, and exterior services.",
      telephone: "+1-973-207-0689",
      email: "nickcontractorllc@gmail.com",
      priceRange: "$$",

      address: {
        "@type": "PostalAddress",
        streetAddress: "525 Lafayette Ave",
        addressLocality: "Hawthorne",
        addressRegion: "NJ",
        postalCode: "07506",
        addressCountry: "US",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.9576,
        longitude: -74.1504,
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:30",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "15:00",
        },
      ],

      areaServed: [
        { "@type": "City", name: "Hawthorne" },
        { "@type": "City", name: "Ridgewood" },
        { "@type": "City", name: "Paramus" },
        { "@type": "City", name: "Clifton" },
        { "@type": "City", name: "Wayne" },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing and Exterior Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Gutter Installation" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Gutter Repair" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Leaf Guard Installation" },
          },
        ],
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.nickroofing.com/#website",
      url: "https://www.nickroofing.com/",
      name: "Nick Roofing",
      publisher: {
        "@id": "https://www.nickroofing.com/#organization",
      },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ClientOnlyJsonLd data={schemaData} />
    </>
  );
}