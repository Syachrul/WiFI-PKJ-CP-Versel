'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Coverage from './components/Coverage'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Coverage />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
