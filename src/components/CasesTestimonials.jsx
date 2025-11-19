export default function CasesTestimonials() {
  const cases = [
    { title: 'B2B leads → bookings', problem: 'Low show-up rate', solution: 'Automated reminders + reschedule', result: '+18% bookings, −22% no-show', stack: 'Forms, Calendar, TG, n8n' },
    { title: 'Owner morning digest', problem: 'Manual reporting', solution: '08:30 cron + merge sources', result: '−4.5 h/week manual work', stack: 'ERP, Payments, Email' },
    { title: 'DMs at scale', problem: 'Lost messages', solution: 'Smart auto-replies + escalation', result: '0 lost DMs; median reply 14 min', stack: 'FB/IG, Sheets, n8n' },
  ]
  const quotes = [
    { name: 'Anna • Online Courses', text: 'Fewer no-shows; pipeline finally predictable.', avatar: 'A' },
    { name: 'Mārtiņš • Retail', text: 'Reliable 08:30 report. Team aligned without meetings.', avatar: 'M' },
    { name: 'Olga • Beauty', text: 'Zero lost DMs. We reply fast even on weekends.', avatar: 'O' },
  ]
  return (
    <section id="cases" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Cases & Testimonials</h2>
        <div className="grid grid-cols-12 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="col-span-12 md:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full">
                <div className="flex gap-2 mb-3">
                  <span className="rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs px-3 py-1">Problem</span>
                  <span className="rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1">Result</span>
                </div>
                <h3 className="text-white font-medium mb-2">{c.title}</h3>
                <p className="text-slate-300 text-sm">Problem → {c.problem}</p>
                <p className="text-slate-300 text-sm">Solution → {c.solution}</p>
                <p className="text-slate-300 text-sm">Result → {c.result}</p>
                <p className="text-slate-400 text-xs mt-2">Stack: {c.stack}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-12 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="col-span-12 md:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 grid place-items-center text-slate-200">{q.avatar}</div>
                  <span className="text-slate-200 text-sm">{q.name}</span>
                </div>
                <p className="text-slate-300">“{q.text}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
