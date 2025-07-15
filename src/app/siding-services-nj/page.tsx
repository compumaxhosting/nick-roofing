import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import ServicePage from '@/components/ServiceData'
import React from 'react'

const siding = () => {
  return (
    <>
      <Header />
      <ServicePage service="siding" />
      <Footer />
    </>
  )
}

export default siding