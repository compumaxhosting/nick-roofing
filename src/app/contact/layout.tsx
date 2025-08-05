import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Nick Roofing – Contact Us for Roofing & Exterior Services",
  description:
    "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services. Request a free estimate today!",
  keywords: [
    "roofing contractor Hawthorne NJ",
    "contact Nick Roofing",
    "gutter installer NJ",
    "skylight services NJ",
    "waterproofing contractor NJ",
    "siding expert Hawthorne NJ",
    "roof repair estimate",
    "roofing near Franklin Lakes",
    "NJ roofing professionals",
    "free roofing quote NJ",
  ],

  openGraph: {
    title: "Nick Roofing – Contact Us for Roofing & Exterior Services",
    description:
      "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services. Request a free estimate today!",
    url: "https://www.nickroofing.com/contact",
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
    canonical: "https://www.nickroofing.com/contact",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  image: "https://www.nickroofing.com/og-image.jpg",
  description:
    "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services. Request a free estimate today!",
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

export default function WaterproofingLayout({
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
