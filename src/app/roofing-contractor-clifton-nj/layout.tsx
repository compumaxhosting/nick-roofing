import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Contractor Clifton NJ | Roof Repair Services",
  description:
    "Trusted roofing contractor Clifton NJ for roof repair, replacement, inspections, leak repair, and residential roofing services by Nick Roofing.",

  keywords: [
    "roofing contractor Clifton NJ",
    "roof repair Clifton NJ",
    "roof replacement Clifton NJ",
    "roofing services Clifton NJ",
    "roof inspection Clifton NJ",
    "roof leak repair Clifton NJ",
    "residential roofing Clifton NJ",
    "emergency roofing Clifton NJ",
  ],

  authors: [{ name: "Nick Roofing" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.nickroofing.com/roofing-contractor-clifton-nj/",
  },

  openGraph: {
    type: "website",
    url: "https://www.nickroofing.com/roofing-contractor-clifton-nj/",
    siteName: "Nick Roofing",
    title: "Roofing Contractor Clifton NJ | Roof Repair Services",
    description:
      "Professional roofing contractor in Clifton NJ providing roof repair, roof replacement, inspections, waterproofing, and leak repair solutions.",
    images: [
      {
        url: "https://www.nickroofing.com/wp-content/uploads/roofing-contractor-clifton-nj.webp",
        alt: "Roofing contractor services in Clifton NJ by Nick Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Clifton NJ | Nick Roofing",
    description:
      "Reliable roofing services in Clifton NJ including repairs, replacements, inspections, and roof leak solutions.",
    images: [
      "https://www.nickroofing.com/wp-content/uploads/roofing-contractor-clifton-nj.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
