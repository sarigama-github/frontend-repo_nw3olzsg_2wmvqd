export default function Footer({ onCalcClick, onPrimaryClick }) {
  return (
    <footer className="pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 md:p-10 text-center mb-10">
          <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Ready to remove busywork in 7 days?</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button onClick={onPrimaryClick} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 font-medium">Book 30-min audit</button>
            <button onClick={onCalcClick} className="rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 px-6 py-3 font-medium">Get a price estimate</button>
          </div>
          <p className="mt-3 text-slate-400 text-sm">Plan with pricing in 24 hours.</p>
        </div>
        <div className="py-8 text-center text-slate-500 text-sm">© {new Date().getFullYear()} KVFIR Automation</div>
      </div>
    </footer>
  )
}
