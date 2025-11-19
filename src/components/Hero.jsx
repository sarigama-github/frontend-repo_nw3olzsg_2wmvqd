import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryClick, onCalcClick }) {
  return (
    <section className="relative pt-28" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-10 gap-x-8 items-center min-h-[68vh]">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Custom automation that ships in 7 days
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl">
              Follow-ups, daily reports, and content posting on n8n. Clear, secure, measurable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onPrimaryClick} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                Book 30-min audit
              </button>
              <button onClick={onCalcClick} className="rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 px-6 py-3 font-medium">
                Get a price estimate
              </button>
            </div>
            <p className="mt-3 text-slate-400 text-sm">No prepayment. Plan with pricing in 24 hours.</p>

            {/* Integration strip */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-slate-400">
              {['Telegram','WhatsApp','Google Sheets','Google Calendar','ERPLY','Jumis','Klix','Montonio','Omniva'].map((name) => (
                <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
