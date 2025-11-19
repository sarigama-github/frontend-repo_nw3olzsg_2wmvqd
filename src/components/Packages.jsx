import { useState } from 'react'

const packages = [
  {
    name: 'Follow-Up Booster',
    kpi: ['+10–25% lead→booking', '−15–30% no-show'],
    timeline: '5–7 days',
    bullets: ['Triggers from form/DM', 'Reminders + reschedule link', 'Review request + escalation'],
    flow: ['Lead captured', 'Calendar check', 'T-24 reminder', 'T-3h reminder', 'Reschedule', 'Review + escalation']
  },
  {
    name: 'Report Pulse',
    kpi: ['08:30 digest', '−3–6 h/week manual work'],
    timeline: '5–7 days',
    bullets: ['Cron 08:30', 'Merge sales + payments', 'Owner digest via TG/Email'],
    flow: ['Cron 08:30', 'Fetch sales', 'Fetch payments', 'Merge + KPIs', 'Send TG/Email']
  },
  {
    name: 'Content Autopilot',
    kpi: ['≥95% scheduled posts', 'Median reply <20 min'],
    timeline: '7–10 days',
    bullets: ['Posting calendar', 'FB/IG/LinkedIn/Site', 'Smart DM replies'],
    flow: ['Content sheet', 'Queue', 'Publish', 'Monitor DMs', 'Auto-reply', 'Escalate']
  }
]

function Chip({ children }) {
  return <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 mr-2 mb-2">{children}</span>
}

export default function Packages({ onRequestPlan }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="workflows" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Product Packages</h2>
        <div className="grid grid-cols-12 gap-6">
          {packages.map((p, idx) => (
            <div key={p.name} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/20">
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-medium text-lg">{p.name}</h3>
                  <button onClick={() => setOpenIndex(idx)} className="text-indigo-400 text-sm hover:underline">View flow</button>
                </div>
                <div className="mt-3 flex flex-wrap">
                  {p.kpi.map(k => <Chip key={k}>{k}</Chip>)}
                  <Chip>Timeline: {p.timeline}</Chip>
                </div>
                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {p.bullets.map(b => <li key={b}>• {b}</li>)}
                </ul>
                <div className="mt-6">
                  <button onClick={onRequestPlan} className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm font-medium">Request plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-[60] grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenIndex(null)} />
          <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">{packages[openIndex].name} — Flow</h4>
              <button className="text-slate-400" onClick={() => setOpenIndex(null)}>Close</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {packages[openIndex].flow.map((step, i) => (
                <span key={step} className="rounded-full bg-white/5 border border-white/10 text-slate-200 px-3 py-1 text-xs">
                  {i+1}. {step}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => { setOpenIndex(null); onRequestPlan && onRequestPlan(); }} className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm font-medium">Request plan</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
