import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Contractor Paramus NJ | Roof Repair Services",
  description:
    "Trusted roofing contractor Paramus NJ for roof repair, replacement, inspections, and leak repair. Professional roofing services by Nick Roofing.",

  keywords: [
    "roofing contractor Paramus NJ",
    "roof repair Paramus NJ",
    "roof replacement Paramus NJ",
    "roofing services Paramus NJ",
    "roof leak repair Paramus NJ",
    "roof inspection Paramus NJ",
    "emergency roofing Paramus NJ",
    "residential roofing Paramus NJ",
  ],

  authors: [{ name: "Nick Roofing" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.nickroofing.com/roofing-repair-paramus-nj/",
  },

  openGraph: {
    type: "website",
    url: "https://www.nickroofing.com/roofing-repair-paramus-nj/",
    siteName: "Nick Roofing",
    title: "Roofing Contractor Paramus NJ | Roof Repair Services",
    description:
      "Professional roofing contractor in Paramus NJ providing roof repair, replacement, inspections, leak repair, and residential roofing services.",
    images: [
      {
        url: "https://www.nickroofing.com/wp-content/uploads/roofing-repair-paramus-nj.webp",
        alt: "Roofing contractor services in Paramus NJ by Nick Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Paramus NJ | Nick Roofing",
    description:
      "Expert roofing services in Paramus NJ including roof repair, replacement, inspections, and leak solutions.",
    images: [
      "https://www.nickroofing.com/wp-content/uploads/roofing-repair-paramus-nj.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
