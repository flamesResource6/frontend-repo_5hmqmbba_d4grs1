import { useEffect, useState } from 'react'
import { Filter, Search, ChevronDown } from 'lucide-react'

export default function Filters({ onChange }) {
  const [vendors, setVendors] = useState([])
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState({ vendor: '', category: '', modality: '' })

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    // Load categories and vendors from backend
    fetch(`${baseUrl}/api/categories`).then(r=>r.json()).then(data=>{
      setCategories(data || [])
    }).catch(()=>{})

    fetch(`${baseUrl}/api/models`).then(r=>r.json()).then(data=>{
      const v = Array.from(new Set((data||[]).map(m=>m.vendor))).sort()
      setVendors(v)
    }).catch(()=>{})
  }, [])

  useEffect(() => { onChange && onChange(selected) }, [selected])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
      <div className="flex flex-wrap gap-3 items-center text-slate-200">
        <div className="inline-flex items-center gap-2 text-slate-300"><Filter className="h-4 w-4"/> Фильтры</div>
        <div className="flex-1"></div>
        <div className="relative">
          <select className="appearance-none bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 pr-8"
                  value={selected.vendor}
                  onChange={e=>setSelected(s=>({...s, vendor:e.target.value}))}>
            <option value="">Все вендоры</option>
            {vendors.map(v=> <option key={v} value={v}>{v}</option>)}
          </select>
          <ChevronDown className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"/>
        </div>
        <div className="relative">
          <select className="appearance-none bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 pr-8"
                  value={selected.category}
                  onChange={e=>setSelected(s=>({...s, category:e.target.value}))}>
            <option value="">Все категории</option>
            {categories.map(c=> <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <ChevronDown className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"/>
        </div>
        <div className="relative">
          <select className="appearance-none bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 pr-8"
                  value={selected.modality}
                  onChange={e=>setSelected(s=>({...s, modality:e.target.value}))}>
            <option value="">Все модальности</option>
            {['text','vision','audio','tool'].map(m=> <option key={m} value={m}>{m}</option>)}
          </select>
          <ChevronDown className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"/>
        </div>
      </div>
    </div>
  )
}
