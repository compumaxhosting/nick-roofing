import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

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
        url: "https://www.nickroofing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Roofing",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
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
  areaServed: {
    "@type": "Place",
    name: [
      "Hawthorne",
      "Franklin Lakes",
      "Midland Park",
      "Allendale",
      "Waldwick",
      "Ramsey",
      "Saddle River",
      "Ridgewood",
      "Glen Rock",
      "Fair Lawn",
      "Clifton",
      "Paramus",
      "Oradell",
      "North Haledon",
      "Totowa",
      "Wayne",
    ],
  },
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Exterior Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Skylight Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Gutter Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Waterproofing Services" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Roofing Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Siding Services" },
      },
    ],
  },
};

export default function GutterInstallation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <ClientOnlyJsonLd data={schemaData} />
    </>
  );
}
