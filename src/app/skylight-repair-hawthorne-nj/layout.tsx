import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
  description:
    "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Free estimates. Residential & commercial service.",
  alternates: {
    canonical: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ.",
    url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
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
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ.",
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
    "Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ.",
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
