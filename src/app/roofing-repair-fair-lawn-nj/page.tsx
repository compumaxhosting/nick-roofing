// Force static generation + daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import LocationBar from "@/components/LocationBar";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/roofrepair/CtaSection";
import { ServiceAreas } from "@/components/services/roofrepair/ServiceAreas";

import { TrustIndicators } from "@/components/services/roofrepair/TrustIndicators";
import { HeroSection } from "@/components/services/roofrepairfairlawnnj/HeroSection";
import { IntroductionSection } from "@/components/services/roofrepairfairlawnnj/IntroductionSection";
import RoofRepairContentSections from "@/components/services/roofrepairfairlawnnj/tablecontent/RoofRepairContentSections";
import TableOfContents from "@/components/services/roofrepairfairlawnnj/tablecontent/TableOfContents";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <LocationBar />
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
