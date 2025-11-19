export default function Integrations() {
  const groups = [
    { title: 'Payments', items: ['Klix', 'Montonio', 'Paysera', 'EveryPay'] },
    { title: 'BNPL', items: ['ESTO', 'Inbank'] },
    { title: 'Open Banking', items: ['Enable Banking', 'Citadele PSD2', 'Luminor', 'LHV', 'Rietumu'] },
    { title: 'ERP/Accounting', items: ['Scoro', 'Directo', 'Merit', 'Rivile'] },
    { title: 'E-signature/KYC', items: ['eParaksts', 'Smart-ID', 'Dokobit'] },
    { title: 'Delivery', items: ['Omniva', 'DPD', 'Itella', 'Venipak', 'Latvijas Pasts'] },
    { title: 'Last-mile', items: ['Wolt Drive', 'Bolt Food'] },
    { title: 'CMS/Marketplace', items: ['Mozello', 'PHH Group (220.lv/Pigu)'] },
    { title: 'Comms', items: ['Messente', 'Infobip', 'CM.com'] },
    { title: 'Geo', items: ['Jāņa sēta (kartes.lv)'] },
  ]

  return (
    <section className="py-16" aria-labelledby="integrations-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="integrations-title" className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Supported Integrations</h2>
        <div className="grid grid-cols-12 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 h-full">
                <h3 className="text-slate-200 font-medium mb-3">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1">{it}</span>
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
