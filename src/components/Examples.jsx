export default function Examples() {
  const items = [
    {
      title: 'Form → Calendar → reminders → review + escalation',
      badges: ['Forms', 'Google Calendar', 'Telegram'],
    },
    {
      title: 'Cron 08:30 → sales/payments merge → owner digest',
      badges: ['ERP', 'Payments', 'Email/TG'],
    },
    {
      title: 'Content sheet → FB/IG/LinkedIn/Site → auto-reply DMs',
      badges: ['Sheets', 'FB', 'IG', 'LinkedIn'],
    },
    {
      title: 'Klix/Montonio → Omniva/DPD label → SMS to customer',
      badges: ['Payments', 'Delivery', 'SMS'],
    },
  ]

  return (
    <section className="py-16" aria-labelledby="examples-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="examples-title" className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Automation gallery</h2>
        <div className="grid grid-cols-12 gap-6">
          {items.map((it) => (
            <div key={it.title} className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full shadow-xl">
                <h3 className="text-white font-medium mb-3">{it.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {it.badges.map(b => (
                    <span key={b} className="rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
