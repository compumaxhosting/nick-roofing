// Force static generation + daily revalidation (matches your indexed routes)
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBar from "@/components/ServiceBar";
import { CtaSection } from "@/components/services/skylight/CtaSection";
import { HeroSection } from "@/components/services/skylight/HeroSection";
import { IntroductionSection } from "@/components/services/skylight/IntroductionSection";
import { ServiceAreas } from "@/components/services/skylight/ServiceAreas";
import SkylightContentSections from "@/components/services/skylight/tablecontent/SkylightContentSections";
import TableOfContents from "@/components/services/skylight/tablecontent/TableOfContents";
import { TrustIndicators } from "@/components/services/skylight/TrustIndicators";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />

      <TrustIndicators />
      <IntroductionSection />
<TableOfContents />
<SkylightContentSections />
      <ServiceBar />

      <ServiceAreas />

      <CtaSection />
      <Footer />
    </>
  );
}
