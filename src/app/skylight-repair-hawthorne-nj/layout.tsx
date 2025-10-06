import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
  description:
    "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
  keywords: [
    "Velux skylight repair",
    "skylight installation Hawthorne NJ",
    "skylight leak repair",
    "skylight glass replacement",
    "flat roof skylights",
    "emergency skylight services",
    "skylight flashing repair",
    "best skylight company NJ",
    "skylight maintenance",
    "skylight cost estimates",
  ],
  alternates: {
    canonical: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
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
      "Velux skylight repairs, glass replacement & leak fixes in Hawthorne, NJ. Free estimates.",
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
    "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
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
  areaServed: [
    { "@type": "Place", name: "Hawthorne" },
    { "@type": "Place", name: "Franklin Lakes" },
    { "@type": "Place", name: "Midland Park" },
    { "@type": "Place", name: "Allendale" },
    { "@type": "Place", name: "Waldwick" },
    { "@type": "Place", name: "Ramsey" },
    { "@type": "Place", name: "Saddle River" },
    { "@type": "Place", name: "Ridgewood" },
    { "@type": "Place", name: "Glen Rock" },
    { "@type": "Place", name: "Fair Lawn" },
    { "@type": "Place", name: "Clifton" },
    { "@type": "Place", name: "Paramus" },
    { "@type": "Place", name: "Oradell" },
    { "@type": "Place", name: "North Haledon" },
    { "@type": "Place", name: "Totowa" },
    { "@type": "Place", name: "Wayne" },
  ],
  priceRange: "$$",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // 👇 Injected server-side — visible to crawlers
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
