import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
  description:
    "Hawthorne's trusted roof repair experts. Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services and free estimates for residential & commercial properties.",
  keywords: [
    "Roof repair Hawthorne NJ",
    "Emergency roof repair NJ",
    "Storm damage roof repair",
    "Flat roof repair",
    "Asphalt shingle repair",
    "Roof leak detection",
    "Roof flashing repair",
    "Gutter repair and maintenance",
    "Roof restoration services",
    "Waterproofing and sealant services",
  ],

  alternates: {
    canonical: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
    description:
      "Hawthorne's trusted roof repair experts. Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services and free estimates for residential & commercial properties.",
    url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
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
    title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
    description:
      "Hawthorne's trusted roof repair experts. Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services and free estimates for residential & commercial properties.",
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
    "Hawthorne's trusted roof repair experts. Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services and free estimates for residential & commercial properties.",
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
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ClientOnlyJsonLd data={schemaData} />
    </>
  );
}
