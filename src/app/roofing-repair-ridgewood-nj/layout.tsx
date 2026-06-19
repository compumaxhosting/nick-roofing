import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Repair Ridgewood NJ | Roof Leak Repair Services",
  description:
    "Expert roof repair Ridgewood NJ services for roof leaks, storm damage, inspections, flashing, and residential roofing. Call Nick Roofing today.",

  keywords: [
    "roof repair Ridgewood NJ",
    "roof leak repair Ridgewood",
    "roofing contractor Ridgewood NJ",
    "storm damage roof repair Ridgewood",
    "residential roofing Ridgewood NJ",
    "roof inspection Ridgewood NJ",
    "emergency roof repair Ridgewood",
  ],

  authors: [{ name: "Nick Roofing" }],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",

  alternates: {
    canonical: "https://www.nickroofing.com/roofing-repair-ridgewood-nj/",
  },

  openGraph: {
    type: "website",
    url: "https://www.nickroofing.com/roofing-repair-ridgewood-nj/",
    siteName: "Nick Roofing",
    title: "Roof Repair Ridgewood NJ | Roof Leak Repair Services",
    description:
      "Professional roof repair in Ridgewood NJ for leaks, storm damage, flashing issues, waterproofing, and residential roofing services.",
    images: [
      {
        url: "https://www.nickroofing.com/wp-content/uploads/roofing-repair-ridgewood-nj.webp",
        alt: "Roof repair service in Ridgewood NJ by Nick Roofing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roof Repair Ridgewood NJ | Nick Roofing",
    description:
      "Reliable roof repair Ridgewood NJ services including leak repair, inspections, storm damage repair, and roofing maintenance.",
    images: [
      "https://www.nickroofing.com/wp-content/uploads/roofing-repair-ridgewood-nj.webp",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
