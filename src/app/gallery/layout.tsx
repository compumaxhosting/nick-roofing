import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Roofing & Siding Gallery – Nick Roofing | Hawthorne, NJ",
  description:
    "Browse Nick Roofing’s gallery featuring skylight, gutter, roofing, waterproofing & siding projects across Hawthorne, Ridgewood, Wayne, and nearby NJ towns.",
  keywords: [
    "roofing gallery Hawthorne NJ",
    "gutter installation photos",
    "skylight installation NJ",
    "waterproofing project gallery",
    "siding installation pictures",
    "roof repair gallery",
    "North Jersey roofing company",
    "Ridgewood roofers",
    "Wayne NJ exterior work",
    "Fair Lawn roofing contractor",
  ],
  alternates: {
    canonical: "https://www.nickroofing.com/gallery",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Roofing & Siding Gallery – Nick Roofing | Hawthorne, NJ",
    description:
      "Browse Nick Roofing’s gallery featuring skylight, gutter, roofing, waterproofing & siding projects across Hawthorne, Ridgewood, Wayne, and nearby NJ towns.",
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
  twitter: {
    card: "summary_large_image",
    title: "Roofing & Siding Gallery – Nick Roofing | Hawthorne, NJ",
    description:
      "See skylight, gutter, roofing, waterproofing & siding projects we’ve completed across North Jersey.",
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
    "Browse Nick Roofing’s gallery featuring skylight, gutter, roofing, waterproofing & siding projects across Hawthorne, Ridgewood, Wayne, and nearby NJ towns.",
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
