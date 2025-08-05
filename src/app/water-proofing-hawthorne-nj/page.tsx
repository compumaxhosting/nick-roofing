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

const waterproofs = () => {
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
};

export default waterproofs;
