export default function Pricing({ onCalcClick }) {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Pricing</h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <h3 className="text-white font-medium">Pilot</h3>
                  <p className="text-slate-300 mt-1">€600–900 (5–7 days, 1–2 integrations)</p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="text-white font-medium">Retainer</h3>
                  <p className="text-slate-300 mt-1">€150–300/mo (monitoring, tweaks, SLA)</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">Invoices without VAT / on request</p>
              <div className="mt-6">
                <button onClick={onCalcClick} className="rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 px-5 py-3 font-medium">Get a price estimate</button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-slate-900 p-6">
              <h3 className="text-white text-xl font-semibold">Get a custom plan in 24 hours</h3>
              <p className="text-slate-300 mt-2">No prepayment. GDPR-safe access. Cancel anytime.</p>
              <button className="mt-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 font-medium">Book 30-min audit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
