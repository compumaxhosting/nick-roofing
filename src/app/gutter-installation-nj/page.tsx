import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import ServicePage from '@/components/ServiceData'
import React from 'react'

const gutterInstallation = () => {
  return (
    <>
      <Header />
      <ServicePage service="gutter-installation" />
      <Footer />
    </>
  )
}

export default gutterInstallation