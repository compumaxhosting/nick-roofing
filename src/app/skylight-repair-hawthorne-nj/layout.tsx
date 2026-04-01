import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Skylight Repair Hawthorne, NJ | Expert Leak Repair & Maintenance",
  description:
    "Professional skylight repair in Hawthorne, NJ. We fix leaks, cracks, and foggy glass for all skylight brands. Fast, reliable service by Nick's Roofing. Get a free quote!",
  keywords: [
    "skylight repair Hawthorne NJ",
    "skylight leak repair",
    "fix leaky skylight NJ",
    "skylight glass replacement Hawthorne",
    "skylight maintenance near me",
  ],

  alternates: {
    canonical: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
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
    title: "Expert Skylight Leak Repair in Hawthorne, NJ | Nick's Roofing",
    description:
      "Don't let a leaky skylight damage your home. We provide expert repair and sealing services in Hawthorne and surrounding NJ areas.",
    url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
    siteName: "Nick's Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nickroofing.com/images/skylight-repair-hawthorne.jpg",
        width: 1200,
        height: 630,
        alt: "Skylight Repair Hawthorne NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fast Skylight Repair Services in Hawthorne, NJ",
    description:
      "Trusted local skylight repair experts. We stop leaks and replace damaged glass quickly.",
    images: [
      "https://www.nickroofing.com/images/skylight-repair-hawthorne.jpg",
    ],
    site: "@NickRoofing",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://www.nickroofing.com/#organization",
      name: "Nick's Roofing & Contractor LLC",
      url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
      telephone: "+1-973-207-0689",
      email: "nickcontractorllc@gmail.com",
      image:
        "https://www.nickroofing.com/images/skylight-repair-hawthorne.jpg",
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
        longitude: -74.1554,
      },

      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    },

    {
      "@type": "Service",
      serviceType: "Skylight Repair",
      provider: {
        "@id": "https://www.nickroofing.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Hawthorne",
      },
      description:
        "Professional skylight repair in Hawthorne, NJ. We specialize in fixing leaks, replacing cracked glass, and sealing frames for residential roofs.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does skylight repair cost in Hawthorne, NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skylight repair costs in Hawthorne vary based on the extent of the leak or glass damage. Nick's Roofing provides free on-site estimates for all residential repairs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency skylight leak repair near me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide prompt skylight repair and sealing services throughout Hawthorne and surrounding Passaic County areas to prevent interior water damage.",
          },
        },
      ],
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