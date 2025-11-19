import { useEffect, useMemo, useState } from 'react'
import jsPDF from 'jspdf'

const INTEGRATIONS = [
  'Klix','Montonio','Paysera','EveryPay','ESTO','Inbank','Enable Banking','Citadele PSD2','Luminor','LHV','Rietumu','Scoro','Directo','Merit','Rivile','eParaksts','Smart-ID','Dokobit','Omniva','DPD','Itella','Venipak','Latvijas Pasts','Wolt Drive','Bolt Food','Mozello','PHH Group (220.lv/Pigu)','Messente','Infobip','CM.com','Jāņa sēta (kartes.lv)'
]

export default function CalculatorModal({ open, onClose, onBook }) {
  const [selected, setSelected] = useState([])
  const [complexity, setComplexity] = useState(2)
  const [sla, setSla] = useState('standard')
  const [rate, setRate] = useState(60)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!open) {
      setSelected([]); setComplexity(2); setSla('standard'); setRate(60); setEmail('')
    }
  }, [open])

  const estimate = useMemo(() => {
    const baseHours = 10 + selected.length * 2 + complexity * 4
    const slaMultiplier = sla === 'priority' ? 1.25 : 1
    const project = Math.round(baseHours * rate * slaMultiplier)
    const monthly = Math.round((selected.length > 0 ? 120 : 90) * (sla === 'priority' ? 1.3 : 1))
    return { project, monthly }
  }, [selected, complexity, sla, rate])

  const toggle = (name) => {
    setSelected(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name])
  }

  const downloadPDF = () => {
    setLoading(true)
    setTimeout(() => {
      const doc = new jsPDF()
      doc.setFontSize(18)
      doc.text('KVFIR Automation — Estimate', 14, 22)
      doc.setFontSize(12)
      doc.text(`Integrations: ${selected.join(', ') || '—'}` , 14, 35)
      doc.text(`Complexity: ${complexity} / 3`, 14, 42)
      doc.text(`SLA: ${sla}`, 14, 49)
      doc.text(`Rate: €${rate}/h`, 14, 56)
      doc.text(`Project: €${estimate.project}`, 14, 70)
      doc.text(`Monthly retainer: €${estimate.monthly}`, 14, 77)
      doc.save('kvfir-estimate.pdf')
      setLoading(false)
    }, 600)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-3xl mx-4 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold">Quick estimate</h3>
          <button className="text-slate-400" onClick={onClose}>Close</button>
        </div>
        <p className="text-slate-300 text-sm mb-4">60-second estimate. No obligations.</p>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <label className="block text-slate-300 text-sm mb-2">Integrations</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-auto rounded-xl border border-white/10 p-2">
              {INTEGRATIONS.map((it) => (
                <label key={it} className="flex items-center gap-2 text-slate-200 text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                  <input type="checkbox" className="accent-indigo-600" checked={selected.includes(it)} onChange={() => toggle(it)} />
                  {it}
                </label>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 text-sm mb-1">Complexity</label>
                <select value={complexity} onChange={(e) => setComplexity(Number(e.target.value))} className="w-full rounded-lg bg-white/5 border border-white/10 text-slate-200 p-2">
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={3}>High</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">SLA</label>
                <select value={sla} onChange={(e) => setSla(e.target.value)} className="w-full rounded-lg bg-white/5 border border-white/10 text-slate-200 p-2">
                  <option value="standard">Standard</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-slate-300 text-sm mb-1">Hourly rate (€)</label>
              <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded-lg bg-white/5 border border-white/10 text-slate-200 p-2" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-slate-200">Total project estimate</div>
              <div className="text-white text-3xl font-semibold mt-1">€{estimate.project}</div>
              <div className="text-slate-200 mt-4">Monthly retainer</div>
              <div className="text-white text-2xl font-semibold">€{estimate.monthly}</div>

              <div className="mt-6 space-y-3">
                <div className="flex gap-2">
                  <input type="email" placeholder="Email for PDF" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-lg bg-slate-950/80 border border-white/10 text-slate-200 p-2" />
                  <button onClick={downloadPDF} disabled={loading} className="rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white px-4 py-2 font-medium">
                    {loading ? 'Generating…' : 'Get PDF quote'}
                  </button>
                </div>
                <button onClick={onBook} className="w-full rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 px-4 py-2 font-medium">Book audit</button>
              </div>

              <p className="text-slate-400 text-xs mt-3">60-second estimate. No obligations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
