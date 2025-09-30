// app/water-proofing-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
  description:
    "Expert residential & commercial waterproofing in Hawthorne, NJ—basement, roof & foundation sealing. Emergency leak repair & free estimates. Call today.",
  alternates: {
    canonical: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  },
  openGraph: {
    title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
    description:
      "Basement, roof, and foundation waterproofing for homes & businesses in Hawthorne, NJ. Emergency leak repair. Free estimates.",
    url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
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
    title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
    description:
      "Basement, roof & foundation waterproofing in Hawthorne, NJ. Emergency leak repair. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` intentionally omitted; Google ignores them.
};

/**
 * Keep your LocalBusiness/RoofingContractor JSON-LD once sitewide (root layout/home).
 * This route uses WebPage + BreadcrumbList + Service for topical relevance.
 */

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Waterproofing Services – Hawthorne, NJ",
  url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  description:
    "Residential and commercial waterproofing in Hawthorne, NJ covering basements, roofs, foundations, and crawl spaces.",
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
      name: "Waterproofing – Hawthorne, NJ",
      item: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
    },
  ],
};

const waterproofingService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Waterproofing",
  serviceType: "Waterproofing",
  category: "Exterior Services",
  url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  description:
    "Basement, roof, crawl space, and foundation waterproofing including coatings, sealing, and emergency leak repair for residential and commercial properties.",
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
    url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
    eligibleRegion: "US-NJ",
  },
};

export default function WaterproofingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <Script
        id="waterproofing-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPage)}
      </Script>
      <Script
        id="waterproofing-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="waterproofing-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(waterproofingService)}
      </Script>
    </>
  );
}
