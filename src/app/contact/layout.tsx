// app/contact/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nick Roofing – Contact Us for Roofing & Exterior Services",
  description:
    "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services. Request a free estimate today!",
  alternates: { canonical: "https://www.nickroofing.com/contact" },
  openGraph: {
    title: "Nick Roofing – Contact Us for Roofing & Exterior Services",
    description:
      "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services. Request a free estimate today!",
    url: "https://www.nickroofing.com/contact",
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
  // Note: removed `keywords`
};

// Put LocalBusiness (RoofingContractor) in app/layout.tsx or on the homepage.
// For /contact use WebPage + BreadcrumbList + ContactPoint
const contactWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact Nick Roofing",
  url: "https://www.nickroofing.com/contact",
  description:
    "Get in touch with Nick Roofing in Hawthorne, NJ for expert roofing, gutter, skylight, waterproofing, and siding services.",
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
      name: "Contact",
      item: "https://www.nickroofing.com/contact",
    },
  ],
};

const contactPoint = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-973-207-0689",
      contactType: "customer service",
      areaServed: "US-NJ",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "525 Lafayette Ave",
    addressLocality: "Hawthorne",
    addressRegion: "NJ",
    postalCode: "07506",
    addressCountry: "US",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="contact-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(contactWebPage)}
      </Script>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script
        id="contactpoint-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(contactPoint)}
      </Script>
    </>
  );
}
