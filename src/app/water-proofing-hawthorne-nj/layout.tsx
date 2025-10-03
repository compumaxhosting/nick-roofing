import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
  description:
    "Expert residential & commercial waterproofing in Hawthorne, NJ—basement, roof & foundation sealing. Emergency leak repair & free estimates. Call today.",
  keywords: [
    "waterproofing Hawthorne NJ",
    "basement waterproofing",
    "roof leak repair",
    "foundation sealing",
    "crawl space waterproofing",
    "emergency waterproofing",
    "waterproof coating",
    "commercial waterproofing",
    "flat roof waterproofing",
    "waterproofing cost estimates", 
  ],
  alternates: {
    canonical: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Waterproofing in Hawthorne, NJ | Nick Roofing",
    description:
      "Basement, roof, crawl space & foundation waterproofing in Hawthorne, NJ.",
    url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
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
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing in Hawthorne, NJ | Nick Roofing",
    description:
      "Basement, roof & foundation waterproofing in Hawthorne, NJ. Emergency leak repair. Free estimates.",
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
    "Expert waterproofing services in Hawthorne, NJ—basement, roof & foundation sealing.",
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
