// Force static generation + daily revalidation (parity with your indexed pages)
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/gutter/CtaSection";
import { HeroSection } from "@/components/services/gutter/HeroSection";
import { IntroductionSection } from "@/components/services/gutter/IntroductionSection";
import { ServiceAreas } from "@/components/services/gutter/ServiceAreas";
import GutterContentSections from "@/components/services/gutter/tablecontent/GutterContentSections";
import TableOfContents from "@/components/services/gutter/tablecontent/TableOfContents";
import { TrustIndicators } from "@/components/services/gutter/TrustIndicators";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <IntroductionSection />
      <TableOfContents />
      <GutterContentSections />
      <ServiceBar />
      <ServiceAreas />
      <CtaSection />
      <Footer />
    </>
  );
}
