// Force static generation + daily revalidation (parity with your indexed pages)
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BenefitsSection } from "@/components/services/gutter/BenefitsSection";
import { CtaSection } from "@/components/services/gutter/CtaSection";
import { FAQSection } from "@/components/services/gutter/FAQSection";
import { FeaturesSection } from "@/components/services/gutter/FeaturesSection";
import { GallerySection } from "@/components/services/gutter/GallerySection";
import { HeroSection } from "@/components/services/gutter/HeroSection";
import { IntroductionSection } from "@/components/services/gutter/IntroductionSection";
import { ServiceAreas } from "@/components/services/gutter/ServiceAreas";
import { TrustIndicators } from "@/components/services/gutter/TrustIndicators";
import React from "react";

export default function Page() {
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
