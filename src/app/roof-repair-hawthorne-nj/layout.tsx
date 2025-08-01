import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "../globals.css";

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
  title: "Emergency Roof Repair in Hawthorne, NJ | nickroofing.com",
  description:
    "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
  keywords: [
    "Roof Repair Hawthorne NJ",
    "Emergency Roof Repair NJ",
    "Storm Damage Roof Repair",
    "Flat Roof Repair",
    "Asphalt Shingle Repair",
    "Roof Leak Detection & Repair",
    "Roof Flashing Repair",
    "Gutter Repair & Maintenance",
    "Roof Restoration Services",
    "Waterproofing & Sealant Services",
  ],
  metadataBase: new URL("https://www.nickroofing.com"), // replace with your domain
  openGraph: {
    title: "Emergency Roof Repair in Hawthorne, NJ | nickroofing.com",
    description:
      "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
    url: "https://www.nickroofing.com",
    siteName: "Nick Roofing",
    images: [
      {
        url: "https://www.nickroofing.com/og-image.jpg", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Nick Roofing team installing new roof",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Roof Repair in Hawthorne, NJ | nickroofing.com",
    description:
      "Hawthorne’s trusted roof repair experts! Fast fixes for leaks, storm damage & shingle repairs. 24/7 emergency services + free estimates. Serving residential & commercial properties.",
    images: ["https://www.nickroofing.com/og-image.jpg"], // replace with actual image
  },
  authors: [{ name: "Nick Roofing Team", url: "https://www.nickroofing.com" }],
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
  category: "Roofing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "Nick Roofing",
              url: "https://www.nickroofing.com/",
              image: "https://www.nickroofing.com/images/logo.png",
              description:
                "Nick Roofing provides expert skylight installation, gutter services, waterproofing, roof repair, and siding in Hawthorne, NJ and surrounding areas.",
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
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Roofing & Exterior Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Skylight Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gutter Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Waterproofing Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Roofing Repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Siding Services",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${oswald.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
