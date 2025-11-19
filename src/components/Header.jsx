import { useEffect, useState } from 'react'
import { Menu, Globe2 } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ onPrimaryClick, onCalcClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-lg bg-slate-900/70 border-b border-white/5' : 'bg-transparent'
    )}>
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 grid place-items-center">
              <span className="text-indigo-400 font-semibold text-sm">KV</span>
            </div>
            <span className="text-slate-100 font-semibold tracking-tight">KVFIR Automation</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#workflows" className="text-slate-300 hover:text-white">Workflows</a>
            <a href="#cases" className="text-slate-300 hover:text-white">Cases</a>
            <a href="#pricing" className="text-slate-300 hover:text-white">Pricing</a>
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe2 className="w-4 h-4" />
              <button className="hover:text-white">RU</button>
              <span className="opacity-40">/</span>
              <button className="hover:text-white">LV</button>
              <span className="opacity-40">/</span>
              <button className="hover:text-white">EN</button>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 font-medium shadow-sm shadow-indigo-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book 30-min audit
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sticky minimal bar when scrolled */}
      {scrolled && (
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-12 items-center justify-between">
            <span className="text-slate-300 text-sm">KVFIR Automation</span>
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book 30-min audit
            </button>
          </div>
        </div>
      )}

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/90 backdrop-blur p-4 space-y-3">
          <a onClick={() => setOpen(false)} href="#workflows" className="block text-slate-300">Workflows</a>
          <a onClick={() => setOpen(false)} href="#cases" className="block text-slate-300">Cases</a>
          <a onClick={() => setOpen(false)} href="#pricing" className="block text-slate-300">Pricing</a>
          <a onClick={() => setOpen(false)} href="#about" className="block text-slate-300">About</a>
          <div className="pt-2 flex items-center gap-2 text-slate-300">
            <Globe2 className="w-4 h-4" /> RU / LV / EN
          </div>
          <div className="pt-2 flex gap-3">
            <button
              onClick={onPrimaryClick}
              className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book 30-min audit
            </button>
            <button
              onClick={onCalcClick}
              className="flex-1 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 px-4 py-2.5 font-medium"
            >
              Get a price estimate
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
