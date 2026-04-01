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
    canonical: "/",
  },

  title:
    "Roofing Contractor Hawthorne NJ | Roof Repair, Gutters & Skylights | Nick Roofing",

  description:
    "Nick Roofing is a licensed roofing contractor in Hawthorne NJ specializing in roof repair, replacement & more. Call (973) 207-0689 for a free estimate!",

  keywords: [
    "roofing contractor Hawthorne NJ",
    "roof repair Hawthorne NJ",
    "roof replacement Hawthorne NJ",
    "residential roofing Hawthorne NJ",
    "commercial roofing Hawthorne NJ",
    "skylight installation Hawthorne NJ",
    "gutter installation Hawthorne NJ",
    "waterproofing contractor Hawthorne NJ",
    "siding installation Hawthorne NJ",
    "roofing contractor Ridgewood NJ",
    "roofing contractor Fair Lawn NJ",
    "roofing contractor Paramus NJ",
    "roofing contractor Clifton NJ",
    "roofing contractor Wayne NJ",
    "licensed roofing contractor NJ",
    "emergency roof repair NJ",
  ],

  openGraph: {
    title: "Roofing Contractor Hawthorne NJ | Nick Roofing",
    description:
      "Trusted roofing contractor in Hawthorne NJ offering roof repair, replacement, gutters, skylights & siding. Serving Northern New Jersey. Free estimates.",
    url: "https://www.nickroofing.com",
    siteName: "Nick Roofing",
    images: [
      {
        url: "https://www.nickroofing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nick Roofing - Roofing Contractor in Hawthorne NJ",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Hawthorne NJ | Nick Roofing",
    description:
      "Roof repair, replacement, gutters, skylights & siding in Hawthorne NJ. Licensed & insured roofing experts.",
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

  category: "Roofing Contractor Services",
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
        <meta
          name="p:domain_verify"
          content="0a26af29bad486083adb6cf76fbc82a3"
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
