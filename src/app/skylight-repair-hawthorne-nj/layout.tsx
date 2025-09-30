// app/skylight-repair-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
  description:
    "Expert Velux skylight repair, glass replacement, flashing & leak fixes in Hawthorne, NJ. Trusted installers for homes & businesses. Free estimates.",
  alternates: {
    canonical: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  },
  openGraph: {
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Velux skylight repair, installation, and leak fixes in Hawthorne and nearby NJ towns. Fast service. Free estimates.",
    url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
    siteName: "Nick Roofing",
    locale: "en_US",
    type: "article",
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
      "Skylight repair & installation (Velux). Glass replacement, flashing, and leak fixes. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` omitted on purpose—Google ignores them.
};

// Keep your LocalBusiness/RoofingContractor JSON-LD once sitewide (root layout/home).
// This route gets WebPage + BreadcrumbList + Service for clarity and relevance.

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Skylight Repair & Installation – Hawthorne, NJ",
  url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  description:
    "Velux skylight repair and installation in Hawthorne, NJ. Leak detection, glass replacement, flashing repair, and maintenance for residential and commercial properties.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nickroofing.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Skylight Repair – Hawthorne, NJ",
      item: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
    },
  ],
};

const skylightService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skylight Repair & Installation",
  serviceType: "Skylight",
  category: "Roofing",
  url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  description:
    "Velux skylight installation and repair, including leak fixes, flashing repair, and glass replacement for homes and businesses in North Jersey.",
  provider: {
    "@type": "RoofingContractor",
    name: "Nick Roofing",
    url: "https://www.nickroofing.com/",
    telephone: "(973) 207-0689",
    areaServed: "Hawthorne, NJ",
  },
  areaServed: [
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
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
    eligibleRegion: "US-NJ",
  },
};

export default function SkylightLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="skylight-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPage)}
      </Script>
      <Script
        id="skylight-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="skylight-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(skylightService)}
      </Script>
    </>
  );
}
