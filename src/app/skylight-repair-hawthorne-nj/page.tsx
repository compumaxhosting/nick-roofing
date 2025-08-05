import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { BenefitsSection } from '@/components/services/skylight/BenefitsSection'
import { CtaSection } from '@/components/services/skylight/CtaSection'
import { FAQSection } from '@/components/services/skylight/FAQSection'
import { FeaturesSection } from '@/components/services/skylight/FeaturesSection'
import { GallerySection } from '@/components/services/skylight/GallerySection'
import { HeroSection } from '@/components/services/skylight/HeroSection'
import { IntroductionSection } from '@/components/services/skylight/IntroductionSection'
import { ServiceAreas } from '@/components/services/skylight/ServiceAreas'
import { TrustIndicators } from '@/components/services/skylight/TrustIndicators'
import React from 'react'

const skylights = () => {
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
  )
}

export default skylights