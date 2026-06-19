import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Repair Fair Lawn NJ | Roof Leak Repair Services",
  description:
    "Expert roof repair Fair Lawn NJ services for roof leaks, storm damage, inspections, flashing, and residential roofing. Contact Nick Roofing today.",

  keywords: [
    "roof repair Fair Lawn NJ",
    "roof leak repair Fair Lawn",
    "roofing contractor Fair Lawn NJ",
    "storm damage roof repair NJ",
    "residential roofing Fair Lawn",
    "roof inspection Fair Lawn NJ",
    "emergency roof repair NJ",
  ],

  authors: [{ name: "Nick Roofing" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.nickroofing.com/roofing-repair-fair-lawn-nj",
  },

  openGraph: {
    type: "website",
    url: "https://www.nickroofing.com/roofing-repair-fair-lawn-nj",
    siteName: "Nick Roofing",
    title: "Roof Repair Fair Lawn NJ | Roof Leak Repair Services",
    description:
      "Professional roof repair in Fair Lawn NJ. Fix roof leaks, storm damage, flashing issues, and protect your home with expert roofing services.",
    images: [
      {
        url: "https://www.nickroofing.com/wp-content/uploads/roof-repair-fair-lawn-nj.webp",
        alt: "Roof repair service in Fair Lawn NJ by Nick Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roof Repair Fair Lawn NJ | Nick Roofing",
    description:
      "Get reliable roof repair Fair Lawn NJ services for leaks, storm damage, inspections, and residential roofing systems.",
    images: [
      "https://www.nickroofing.com/wp-content/uploads/roof-repair-fair-lawn-nj.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
