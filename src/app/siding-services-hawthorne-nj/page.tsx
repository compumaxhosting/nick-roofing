// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/siding/CtaSection";
import { HeroSection } from "@/components/services/siding/HeroSection";
import { IntroductionSection } from "@/components/services/siding/IntroductionSection";
import { ServiceAreas } from "@/components/services/siding/ServiceAreas";
import SidingContentSections from "@/components/services/siding/tablecontent/SidingContentSections";
import TableOfContents from "@/components/services/siding/tablecontent/TableOfContents";
import { TrustIndicators } from "@/components/services/siding/TrustIndicators";

export default function Page() {
  return (
    <>
      <Header /> 
      <HeroSection />
      <TrustIndicators />
      <IntroductionSection />
     <TableOfContents />
     <SidingContentSections />
      <ServiceBar />
     
     
      <ServiceAreas />
      
      <CtaSection />
      <Footer />
    </>
  );
}
