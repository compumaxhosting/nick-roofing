  import type { Metadata } from "next";
  import { ReactNode } from "react";
  import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

  export const metadata: Metadata = {
    title: "Trusted Roofing Experts in Hawthorne, NJ | Nick Roofing",
    description:
      "Learn about Nick Roofing — Hawthorne, NJ’s trusted provider of roofing, siding, gutter, and waterproofing services. Local expertise. Quality guaranteed.",
    keywords: [
      "roofing Hawthorne NJ",
      "Nick Roofing",
      "gutter installation NJ",
      "siding contractors Hawthorne",
      "skylight repair NJ",
      "waterproofing Hawthorne",
      "roof repair NJ",
      "local roofing company NJ",
      "roofing services near me",
      "Hawthorne NJ roofers",
    ],
    openGraph: {
      title: "Trusted Roofing Experts in Hawthorne, NJ | Nick Roofing",
      description:
        "Learn about Nick Roofing — Hawthorne, NJ’s trusted provider of roofing, siding, gutter, and waterproofing services. Local expertise. Quality guaranteed.",
      url: "https://www.nickroofing.com/gallery",
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
      canonical: "https://www.nickroofing.com/gallery",
    },
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Nick Roofing",
    url: "https://www.nickroofing.com/",
    image: "https://www.nickroofing.com/og-image.jpg",
    description:
      "Learn about Nick Roofing — Hawthorne, NJ’s trusted provider of roofing, siding, gutter, and waterproofing services. Local expertise. Quality guaranteed.",
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

  export default function Gallery({
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
