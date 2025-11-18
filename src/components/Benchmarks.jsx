import { useEffect, useState } from 'react'
import { BarChart3 } from 'lucide-react'

export default function Benchmarks() {
  const [list, setList] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{(async()=>{
    try{ const r = await fetch(`${baseUrl}/api/benchmarks`); const d = await r.json(); setList(d||[]) }catch(e){}
  })()},[])

  return (
    <section id="benchmarks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-white font-semibold mb-4"><BarChart3 className="h-5 w-5"/> Бенчмарки</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(b => (
          <div key={b._id} className="rounded-xl p-4 bg-white/5 border border-white/10 text-slate-200">
            <div className="text-white font-medium">{b.name}</div>
            <div className="text-sm text-slate-300">{b.description}</div>
            <div className="mt-2 text-xs text-slate-400">{b.domain} • {b.unit || 'score'} • {b.higher_is_better? '↑ выше лучше':'↓ ниже лучше'}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
