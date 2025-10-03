// app/layout.tsx
import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap", 
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nickroofing.com"),
  alternates: {
    canonical: "/", // root canonical
  },
  title: "Nick Roofing: Roof, Skylight & Gutter Services Hawthorne, NJ",
  description:
    "Trusted roofing, skylight, gutter, siding & waterproofing experts in Hawthorne, NJ & nearby towns. Local pros. Free estimates. Quality guaranteed!",
  keywords: [
    "roofing services Hawthorne NJ",
    "skylight installation Hawthorne NJ",
    "gutter installation NJ",
    "waterproofing contractors NJ",
    "siding services Hawthorne NJ",
    "roof repair Franklin Lakes NJ",
    "gutter repair Midland Park NJ",
    "siding contractor Ridgewood NJ",
    "skylight repair Glen Rock NJ",
    "waterproofing Fair Lawn NJ",
  ],
  openGraph: {
    title: "Nick Roofing: Roof, Skylight & Gutter Services Hawthorne, NJ",
    description:
      "Trusted roofing, skylight, gutter, siding & waterproofing experts in Hawthorne, NJ & nearby towns. Local pros. Free estimates. Quality guaranteed!",
    url: "https://www.nickroofing.com",
    siteName: "Nick Roofing",
    images: [
      {
        url: "https://www.nickroofing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Roofing team installing new roof",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Roofing: Roof, Skylight & Gutter Services Hawthorne, NJ",
    description:
      "Trusted roofing, skylight, gutter, siding & waterproofing experts in Hawthorne, NJ & nearby towns. Local pros. Free estimates. Quality guaranteed!",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  authors: [{ name: "Nick Roofing Team", url: "https://www.nickroofing.com" }],
  category: "Roofing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sitewide entity (keep a single source of truth)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Nick Roofing",
    url: "https://www.nickroofing.com/",
    image: "https://www.nickroofing.com/og-image.jpg",
    description:
      "Trusted roofing, skylight, gutter, siding & waterproofing experts in Hawthorne, NJ & nearby towns. Local pros. Free estimates. Quality guaranteed!",
    telephone: "+1-973-207-0689",
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
    sameAs: [], // add profiles if available
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing & Exterior Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Skylight Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Gutter Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Waterproofing Services" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Roofing Repair" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Siding Services" },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="YEt9cDcHycOEi1XrfeLJgGEMJ-kZgPwai7l0BgZLS8Y"
        />
        <script
          type="application/ld+json"
          // JSON-LD in <head> for the sitewide entity
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${oswald.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
