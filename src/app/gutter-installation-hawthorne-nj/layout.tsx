// app/gutter-installation-hawthorne-nj/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
  description:
    "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services. Call now.",
  alternates: {
    canonical: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
  },
  openGraph: {
    title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
    description:
      "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services. Call now.",
    url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
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
    title: "Best Gutter Installation in Hawthorne, NJ | Seamless & Durable",
    description:
      "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` intentionally omitted; Google ignores them.
};

// Keep LocalBusiness/RoofingContractor JSON-LD sitewide (root layout or homepage).
// This route gets Service + WebPage + BreadcrumbList for relevance and clarity.

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gutter Installation in Hawthorne, NJ",
  url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
  description:
    "Expert gutter installation in Hawthorne, NJ—seamless, aluminum, & copper gutters for homes & businesses. Free estimates, repairs & emergency services.",
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
      name: "Gutter Installation – Hawthorne, NJ",
      item: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
    },
  ],
};

const gutterService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gutter Installation",
  serviceType: "Gutter Installation",
  description:
    "Seamless, aluminum, and copper gutter installation with repair and emergency services for homes and businesses in North Jersey.",
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
  url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
};

export default function GutterInstallationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <Script
        id="gutter-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPage)}
      </Script>
      <Script
        id="gutter-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="gutter-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(gutterService)}
      </Script>
    </>
  );
}
