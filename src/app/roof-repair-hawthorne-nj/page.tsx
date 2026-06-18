// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/roofrepair/CtaSection";
import { HeroSection } from "@/components/services/roofrepair/HeroSection";
import { IntroductionSection } from "@/components/services/roofrepair/IntroductionSection";
import { ServiceAreas } from "@/components/services/roofrepair/ServiceAreas";
import RoofRepairContentSections from "@/components/services/roofrepair/tablecontent/RoofRepairContentSections";
import TableOfContents from "@/components/services/roofrepair/tablecontent/TableOfContents";
import { TrustIndicators } from "@/components/services/roofrepair/TrustIndicators";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <IntroductionSection />
      <TableOfContents />
      <RoofRepairContentSections />
      <ServiceBar />
      <ServiceAreas />
      <CtaSection />
      <Footer />
    </>
  );
}
