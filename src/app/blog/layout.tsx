import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Premium Roofing Services in New Jersey – Nick Roofing Blog",
  description:
    "Explore expert tips, industry insights & real‑life project stories from Nick Roofing, your trusted roofing contractor in Northern New Jersey. Stay informed and protected.",
  keywords: [
    "roofing services NJ",
    "roof repair Hawthorne NJ",
    "gutter installation New Jersey",
    "skylight installation NJ",
    "waterproofing roofing NJ",
    "Nick Roofing blog",
    "roofing contractor Northern NJ",
    "residential & commercial roofing NJ",
  ],

  openGraph: {
    title: "Premium Roofing Services in New Jersey – Nick Roofing Blog",
    description:
      "Explore expert tips, industry insights & real‑life project stories from Nick Roofing, your trusted roofing contractor in Northern New Jersey. Stay informed and protected.",
    url: "https://www.nickroofing.com/blog",
    siteName: "Nick Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nickroofing.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Nick Roofing",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.nickroofing.com/blog",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  image: "https://www.nickroofing.com/og-image.webp",
  description:
    "Explore expert tips, industry insights & real‑life project stories from Nick Roofing, your trusted roofing contractor in Northern New Jersey. Stay informed and protected.",
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ClientOnlyJsonLd data={schemaData} />
    </>
  );
}
