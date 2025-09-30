// app/roof-repair-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
  description:
    "Hawthorne’s trusted roof repair experts. Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency service and free estimates for homes & businesses.",
  alternates: {
    canonical: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
  },
  openGraph: {
    title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
    description:
      "Fast, reliable roof leak & storm damage repairs in Hawthorne and nearby NJ towns. 24/7 emergency response. Free estimates.",
    url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
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
    title: "Emergency Roof Repair in Hawthorne, NJ | Nick Roofing",
    description:
      "24/7 emergency roof repair. Leaks, shingles, flashing, storm damage. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` intentionally omitted; Google ignores them.
};

// Route-focused JSON-LD. Keep your LocalBusiness/RoofingContractor entity once sitewide (root layout/home).
const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Roof Repair – Hawthorne, NJ",
  url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
  description:
    "Emergency roof repair for leaks, storm damage, shingles and flashing in Hawthorne, NJ and nearby towns. 24/7 response and free estimates.",
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
      name: "Roof Repair – Hawthorne, NJ",
      item: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
    },
  ],
};

const roofRepairService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Roof Repair",
  serviceType: "Roof Repair",
  category: "Roofing",
  url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
  description:
    "24/7 emergency roof repair including leak detection, storm damage, shingle and flashing repair for residential and commercial properties.",
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
    url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
    eligibleRegion: "US-NJ",
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
      <Script
        id="roofrepair-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPage)}
      </Script>
      <Script
        id="roofrepair-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="roofrepair-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(roofRepairService)}
      </Script>
    </>
  );
}
