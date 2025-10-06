// app/gutter-installation-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
  description:
    "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services. Call now.",
  keywords: [
    "gutter installation Hawthorne NJ",
    "seamless gutters",
    "gutter repair",
    "downspout installation",
    "best gutter company",
    "aluminum gutters",
    "commercial gutter installation",
    "gutter cleaning",
    "emergency gutter services",
    "gutter replacement",
  ],
  alternates: {
    canonical: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
    description:
      "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services. Call now.",
    url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
    siteName: "Nick Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nickroofing.com/roof-repair1.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Roofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
    description:
      "Seamless, aluminum & copper gutters for homes and businesses in Hawthorne, NJ. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  image: "https://www.nickroofing.com/og-image.jpg",
  description:
    "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services. Call now.",
  telephone: "(973) 207-0689",
  email: "nickcontractorllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "525 Lafayette Ave",
    addressLocality: "Hawthorne",
    addressRegion: "NJ",
    postalCode: "07506",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: [
    { "@type": "Place", name: "Hawthorne" },
    { "@type": "Place", name: "Franklin Lakes" },
    { "@type": "Place", name: "Midland Park" },
    { "@type": "Place", name: "Allendale" },
    { "@type": "Place", name: "Waldwick" },
    { "@type": "Place", name: "Ramsey" },
    { "@type": "Place", name: "Saddle River" },
    { "@type": "Place", name: "Ridgewood" },
    { "@type": "Place", name: "Glen Rock" },
    { "@type": "Place", name: "Fair Lawn" },
    { "@type": "Place", name: "Clifton" },
    { "@type": "Place", name: "Paramus" },
    { "@type": "Place", name: "Oradell" },
    { "@type": "Place", name: "North Haledon" },
    { "@type": "Place", name: "Totowa" },
    { "@type": "Place", name: "Wayne" },
  ],
  priceRange: "$$",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
