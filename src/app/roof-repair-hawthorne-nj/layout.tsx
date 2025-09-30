import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Emergency Roof Repair in Hawthorne, NJ | nickroofing.com",
  description:
    "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
  keywords: [
    "Roof Repair Hawthorne NJ",
    "Emergency Roof Repair NJ",
    "Storm Damage Roof Repair",
    "Flat Roof Repair",
    "Asphalt Shingle Repair",
    "Roof Leak Detection & Repair",
    "Roof Flashing Repair",
    "Gutter Repair & Maintenance",
    "Roof Restoration Services",
    "Waterproofing & Sealant Services",
  ],

  openGraph: {
    title: "Emergency Roof Repair in Hawthorne, NJ | nickroofing.com",
    description:
      "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
    url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
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
    canonical: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  image: "https://www.nickroofing.com/og-image.jpg",
  description:
    "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
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

export default function RoofRepairLayout({
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
