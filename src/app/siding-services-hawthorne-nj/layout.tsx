// app/siding-services-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
  description:
    "Top-quality siding installation, repair, and replacement in Hawthorne, NJ. Vinyl, wood, and fiber cement siding by local experts with honest pricing.",
  alternates: {
    canonical: "https://www.nickroofing.com/siding-services-hawthorne-nj",
  },
  openGraph: {
    title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
    description:
      "Top-quality siding installation, repair, and replacement in Hawthorne, NJ. Vinyl, wood, and fiber cement siding by local experts with honest pricing.",
    url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
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
    title: "Expert Siding Services in Hawthorne, NJ | Nick Roofing",
    description:
      "Vinyl, wood, and fiber cement siding installation and repair in Hawthorne, NJ. Local experts. Honest pricing.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` intentionally omitted; Google ignores them.
};

// Keep your LocalBusiness/RoofingContractor JSON-LD once sitewide (root layout/home).
// This route gets WebPage + BreadcrumbList + Service for relevance.

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Siding Services – Hawthorne, NJ",
  url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
  description:
    "Siding installation, repair, and replacement services in Hawthorne, NJ. Vinyl, wood, and fiber cement options with honest pricing.",
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
      name: "Siding Services – Hawthorne, NJ",
      item: "https://www.nickroofing.com/siding-services-hawthorne-nj",
    },
  ],
};

const sidingService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Siding Installation & Repair",
  serviceType: "Siding",
  category: "Exterior Services",
  url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
  description:
    "Vinyl, wood, and fiber cement siding installation, repair, and replacement for residential properties in North Jersey.",
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
    url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
    eligibleRegion: "US-NJ",
  },
};

export default function SidingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="siding-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPage)}
      </Script>
      <Script
        id="siding-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="siding-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(sidingService)}
      </Script>
    </>
  );
}
