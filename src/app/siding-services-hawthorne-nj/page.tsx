// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BenefitsSection } from "@/components/services/siding/BenefitsSection";
import { CtaSection } from "@/components/services/siding/CtaSection";
import { FAQSection } from "@/components/services/siding/FAQSection";
import { FeaturesSection } from "@/components/services/siding/FeaturesSection";
import { GallerySection } from "@/components/services/siding/GallerySection";
import { HeroSection } from "@/components/services/siding/HeroSection";
import { IntroductionSection } from "@/components/services/siding/IntroductionSection";
import { ServiceAreas } from "@/components/services/siding/ServiceAreas";
import { TrustIndicators } from "@/components/services/siding/TrustIndicators";

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
