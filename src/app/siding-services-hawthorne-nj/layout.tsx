import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

export const metadata: Metadata = {
  title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
  description:
    "Trust Nick Roofing for top-quality siding installation, repair & replacement in Hawthorne, NJ. Vinyl, wood & fiber cement siding services. Local experts, honest pricing!",
  keywords: [
    "Siding installation Hawthorne NJ",
    "Siding repair Hawthorne NJ",
    "Vinyl siding replacement",
    "Wood siding contractors",
    "Fiber cement siding experts",
    "Best siding company near me",
    "Siding contractors Passaic County",
    "Affordable siding services",
    "Residential siding repair",
    "Local siding installation",
  ],
  alternates: {
    canonical: "https://www.nickroofing.com/siding-services-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
    description:
      "Trust Nick Roofing for top-quality siding installation, repair & replacement in Hawthorne, NJ. Vinyl, wood & fiber cement siding services. Local experts, honest pricing!",
    url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
    siteName: "Nick Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nickroofing.com/siding1.png",
        width: 1200,
        height: 630,
        alt: "Nick Roofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
    description:
      "Trust Nick Roofing for top-quality siding installation, repair & replacement in Hawthorne, NJ. Vinyl, wood & fiber cement siding services. Local experts, honest pricing!",
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
    "Trust Nick Roofing for top-quality siding installation, repair & replacement in Hawthorne, NJ. Vinyl, wood & fiber cement siding services. Local experts, honest pricing!",
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
