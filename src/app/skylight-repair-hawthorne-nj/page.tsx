// app/skylight-repair-hawthorne-nj/page.tsx
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BenefitsSection } from "@/components/services/skylight/BenefitsSection";
import { CtaSection } from "@/components/services/skylight/CtaSection";
import { FAQSection } from "@/components/services/skylight/FAQSection";
import { FeaturesSection } from "@/components/services/skylight/FeaturesSection";
import { GallerySection } from "@/components/services/skylight/GallerySection";
import { HeroSection } from "@/components/services/skylight/HeroSection";
import { IntroductionSection } from "@/components/services/skylight/IntroductionSection";
import { ServiceAreas } from "@/components/services/skylight/ServiceAreas";
import { TrustIndicators } from "@/components/services/skylight/TrustIndicators";
import React from "react";

// ✅ Force static generation + revalidate daily
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

// ✅ Page-specific metadata
export const metadata: Metadata = {
  title: "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
  description:
    "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
  alternates: {
    canonical: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
  },
  openGraph: {
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
    url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
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
  twitter: {
    card: "summary_large_image",
    title:
      "Velux Skylight Repair & Installation in Hawthorne, NJ | Nick Roofing",
    description:
      "Expert Velux skylight repair, glass replacement & leak fixes in Hawthorne, NJ. Trusted skylight installers for residential & commercial properties. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function SkylightRepairPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <IntroductionSection />
      <FeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <ServiceAreas />
      <GallerySection />
      <CtaSection />
      <Footer />
    </>
  );
}
