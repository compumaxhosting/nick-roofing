// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BenefitsSection } from "@/components/services/roofrepair/BenefitsSection";
import { CtaSection } from "@/components/services/roofrepair/CtaSection";
import { FAQSection } from "@/components/services/roofrepair/FAQSection";
import { FeaturesSection } from "@/components/services/roofrepair/FeaturesSection";
import { GallerySection } from "@/components/services/roofrepair/GallerySection";
import { HeroSection } from "@/components/services/roofrepair/HeroSection";
import { IntroductionSection } from "@/components/services/roofrepair/IntroductionSection";
import { ServiceAreas } from "@/components/services/roofrepair/ServiceAreas";
import { TrustIndicators } from "@/components/services/roofrepair/TrustIndicators";
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
