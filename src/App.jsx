import { useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Examples from './components/Examples'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import CasesTestimonials from './components/CasesTestimonials'
import ProcessFAQ from './components/ProcessFAQ'
import CTA from './components/CTA'
import CalculatorModal from './components/CalculatorModal'
import Footer from './components/Footer'

function App() {
  const [calcOpen, setCalcOpen] = useState(false)

  const bookAudit = () => {
    const el = document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header onPrimaryClick={bookAudit} onCalcClick={() => setCalcOpen(true)} />
      <main>
        <Hero onPrimaryClick={bookAudit} onCalcClick={() => setCalcOpen(true)} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* booking section as anchor */}
          <section id="booking" className="sr-only">Booking anchor</section>
        </div>
        <Packages onRequestPlan={bookAudit} />
        <Examples />
        <Integrations />
        <CTA onPrimaryClick={bookAudit} onCalcClick={() => setCalcOpen(true)} />
        <Pricing onCalcClick={() => setCalcOpen(true)} />
        <CasesTestimonials />
        <ProcessFAQ />
        <Footer onCalcClick={() => setCalcOpen(true)} onPrimaryClick={bookAudit} />
      </main>

      <CalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} onBook={bookAudit} />
    </div>
  )
}

export default App
