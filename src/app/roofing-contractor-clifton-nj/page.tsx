// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import LocationBar from "@/components/LocationBar";
import ServiceBar from "@/components/ServiceBar";
import { IntroductionSection } from "@/components/services/roofingcontractorcliftonnj/IntroductionSection";
import RoofRepairContentSections from "@/components/services/roofingcontractorcliftonnj/tablecontent/RoofRepairContentSections";
import { CtaSection } from "@/components/services/roofrepair/CtaSection";
import { ServiceAreas } from "@/components/services/roofrepair/ServiceAreas";
import { TrustIndicators } from "@/components/services/roofrepair/TrustIndicators";
import { HeroSection } from "@/components/services/roofrepairfairlawnnj/HeroSection";


export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <LocationBar />
      <IntroductionSection />
      <RoofRepairContentSections />
      <ServiceBar />
      <ServiceAreas />
      <CtaSection />
      <Footer />
    </>
  );
}
