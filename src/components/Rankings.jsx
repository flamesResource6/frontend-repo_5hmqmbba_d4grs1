import { useEffect, useState } from 'react'
import { Trophy, Flame, ExternalLink } from 'lucide-react'

function Badge({ children, color="blue" }) {
  const classes = {
    blue: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
    green: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
    purple: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  }[color]
  return <span className={`text-xs px-2 py-0.5 rounded border ${classes}`}>{children}</span>
}

export default function Rankings() {
  const [filters, setFilters] = useState({})
  const [items, setItems] = useState([])
  const [bench, setBench] = useState('mtbench')
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    const qs = new URLSearchParams()
    if (filters.category) qs.set('category', filters.category)
    if (filters.vendor) qs.set('vendor', filters.vendor)
    if (filters.modality) qs.set('modality', filters.modality)
    if (bench) qs.set('benchmark', bench)
    const res = await fetch(`${baseUrl}/api/rankings?${qs.toString()}`)
    const data = await res.json()
    setItems(data.items || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [bench, filters])

  return (
    <section id="rankings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white font-semibold"><Trophy className="h-5 w-5"/> Топы</div>
        <div className="flex items-center gap-2">
          {['mtbench','mmlu','gsm8k','humaneval'].map(b => (
            <button key={b} onClick={()=>setBench(b)}
              className={`px-3 py-1.5 text-sm rounded-lg border ${bench===b? 'bg-white/20 text-white border-white/30':'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'}`}>
              {b.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-slate-300">Загрузка...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <div key={it.model_id} className="rounded-xl p-4 bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-white font-semibold ${idx===0?'bg-gradient-to-br from-yellow-500 to-amber-400': idx===1?'bg-gradient-to-br from-slate-400 to-slate-200': 'bg-gradient-to-br from-amber-700 to-amber-500'}`}>{idx+1}</div>
                  <div>
                    <div className="text-white font-medium">{it.model}</div>
                    <div className="text-xs text-slate-300">{it.vendor}</div>
                  </div>
                </div>
                <Badge color={it.open_source? 'green':'purple'}>{it.open_source? 'Open-Source':'Proprietary'}</Badge>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-white">{it.score}</div>
                <div className="flex gap-1">
                  {it.modalities?.map(m => <span key={m} className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-200">{m}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
