// app/gallery/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Roofing & Siding Gallery – Nick Roofing | Hawthorne, NJ",
  description:
    "Browse Nick Roofing’s gallery featuring skylight, gutter, roofing, waterproofing & siding projects across Hawthorne, Ridgewood, Wayne, and nearby NJ towns.",
  alternates: { canonical: "https://www.nickroofing.com/gallery" },
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Note: `keywords` intentionally omitted; Google ignores them.
};

// Keep LocalBusiness JSON-LD sitewide (root layout/homepage).
// For /gallery, describe the page itself + breadcrumbs.
const galleryWebPage = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "CollectionPage", "ImageGallery"],
  name: "Project Gallery – Nick Roofing",
  url: "https://www.nickroofing.com/gallery",
  description:
    "Photo gallery of Nick Roofing’s skylight, gutter, roofing, waterproofing, and siding projects across North Jersey.",
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
      name: "Gallery",
      item: "https://www.nickroofing.com/gallery",
    },
  ],
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="gallery-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(galleryWebPage)}
      </Script>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
    </>
  );
}
