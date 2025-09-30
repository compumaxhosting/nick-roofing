// app/water-proofing-hawthorne-nj/page.tsx
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BenefitsSection } from "@/components/services/waterproof/BenefitsSection";
import { CtaSection } from "@/components/services/waterproof/CtaSection";
import { FAQSection } from "@/components/services/waterproof/FAQSection";
import { FeaturesSection } from "@/components/services/waterproof/FeaturesSection";
import { GallerySection } from "@/components/services/waterproof/GallerySection";
import { HeroSection } from "@/components/services/waterproof/HeroSection";
import { IntroductionSection } from "@/components/services/waterproof/IntroductionSection";
import { ServiceAreas } from "@/components/services/waterproof/ServiceAreas";
import { TrustIndicators } from "@/components/services/waterproof/TrustIndicators";
import React from "react";

// Force static generation (good for crawlability) and set ISR
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

export const metadata: Metadata = {
  title: "Waterproofing in Hawthorne, NJ | Basement, Roof & Foundation",
  description:
    "Certified waterproofing contractors in Hawthorne, NJ. Basement, roof, crawl space & foundation sealing, coatings, and emergency leak repair. Free estimates.",
  alternates: {
    canonical: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
  },
  openGraph: {
    title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
    description:
      "Basement, roof, and foundation waterproofing for homes & businesses in Hawthorne, NJ. Emergency leak repair. Free estimates.",
    url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
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
    title: "Top Waterproofing Services in Hawthorne, NJ | Leak Protection",
    description:
      "Basement, roof & foundation waterproofing in Hawthorne, NJ. Emergency leak repair. Free estimates.",
    images: ["https://www.nickroofing.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function WaterProofingPage() {
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
