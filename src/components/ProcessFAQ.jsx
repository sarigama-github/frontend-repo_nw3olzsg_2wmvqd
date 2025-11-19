export default function ProcessFAQ() {
  const faqs = [
    { q: 'Is data secure?', a: 'Access via service accounts; secrets in vault; least-privilege. Audit on request.' },
    { q: 'How do you access systems?', a: 'GDPR-safe access: delegated accounts or read-only tokens. No password sharing.' },
    { q: 'Timelines?', a: 'Pilot ships in 5–7 days; content autopilot 7–10 days. Clear milestones.' },
    { q: 'Languages?', a: 'RU / LV / EN for calls and documentation.' },
    { q: 'Are we a fit?', a: 'Best for SMBs with 1–3 systems and clear goals. Not a good fit for custom ERP dev.' },
    { q: 'Cancellation?', a: 'Cancel anytime. Offboarding and handover docs included.' },
    { q: 'Support?', a: 'Retainer covers monitoring, tweaks, and SLA response times.' },
    { q: 'Ownership?', a: 'You own the workspace, credentials, and flows. We transfer everything.' }
  ]

  const steps = [
    { title: 'Discovery', text: 'Understand goals and constraints.' },
    { title: 'Prototype', text: 'Build a working flow quickly.' },
    { title: 'Adjust', text: 'Refine based on feedback and data.' },
    { title: 'Support', text: 'Monitor and document handover.' },
  ]

  return (
    <section className="py-16" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Process & FAQ</h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full">
              <h3 className="text-slate-200 font-medium mb-4">Process</h3>
              <div className="grid grid-cols-2 gap-4">
                {steps.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-indigo-300 text-sm mb-1">{i + 1}. {s.title}</div>
                    <div className="text-slate-300 text-sm">{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 h-full">
              <h3 className="text-slate-200 font-medium mb-4">FAQ</h3>
              <dl className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-slate-200 text-sm font-medium">{f.q}</dt>
                    <dd className="text-slate-300 text-sm mt-1">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
