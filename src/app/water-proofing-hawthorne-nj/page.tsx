export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/waterproof/CtaSection";
import { HeroSection } from "@/components/services/waterproof/HeroSection";
import { IntroductionSection } from "@/components/services/waterproof/IntroductionSection";
import { ServiceAreas } from "@/components/services/waterproof/ServiceAreas";
import TableOfContents from "@/components/services/waterproof/tablecontent/TableOfContents";
import WaterproofContentSections from "@/components/services/waterproof/tablecontent/WaterproofContentSections";
import { TrustIndicators } from "@/components/services/waterproof/TrustIndicators";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <IntroductionSection />
     <TableOfContents />
     <WaterproofContentSections />
      <ServiceBar />
    
     
      <ServiceAreas />  
     
      <CtaSection />
      <Footer />
    </>
  );
}
