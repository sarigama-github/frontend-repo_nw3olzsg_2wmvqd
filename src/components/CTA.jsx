export default function CTA({ onPrimaryClick, onCalcClick }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-slate-900 p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Get a custom plan in 24 hours</h3>
          <p className="text-slate-300 mt-2">No prepayment. GDPR-safe access. Cancel anytime.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button onClick={onPrimaryClick} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 font-medium">Book 30-min audit</button>
            <button onClick={onCalcClick} className="rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 px-6 py-3 font-medium">Get a price estimate</button>
          </div>
        </div>
      </div>
    </section>
  )
}
