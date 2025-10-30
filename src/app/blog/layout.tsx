import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Skylight Installation in Hawthorne, NJ | Nick Roofing Experts",
  description:
    "Brighten your home with expert skylight installation in Hawthorne, NJ. Nick Roofing offers skylight repair, replacement, and waterproofing services.",
  keywords: [
    "Skylight installation Hawthorne NJ",
    "Roof window installation",
    "Skylight repair service",
    "Skylight replacement Hawthorne",
    "Custom skylight design",
    "Residential skylight experts",
    "Commercial skylight installers",
    "Skylight leak repair",
    "Roof skylight maintenance",
    "Energy-efficient skylights",
    "Flat roof skylight solutions",
    "Velux skylight installation",
    "Sun tunnel installation",
    "Skylight flashing repair",
    "Dome skylight installation",
    "Skylight waterproofing",
    "Skylight contractor near me",
    "Roofing and skylight services",
    "Glass skylight installation",
    "Skylight renovation experts",
    "Roof lighting solutions",
    "Skylight inspection service",
    "Skylight window upgrade",
    "Affordable skylight installer",
    "Natural light roofing solutions",
  ],
  openGraph: {
    title: "Skylight Installation in Hawthorne, NJ | Nick Roofing Experts",
    description:
      "Brighten your home with expert skylight installation in Hawthorne, NJ. Nick Roofing offers skylight repair, replacement, and waterproofing services.",
    url: "https://www.nickroofing.com/blog/skylight-installation-hawthorne-nj",
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
    canonical: "https://www.nickroofing.com/blog/skylight-installation-hawthorne-nj",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  image: "https://www.nickroofing.com/og-image.jpg",
  description:
    "Brighten your home with expert skylight installation in Hawthorne, NJ. Nick Roofing offers skylight repair, replacement, and waterproofing services.",
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
