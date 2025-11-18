import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-white font-semibold tracking-tight">AI Model Rankings</div>
          <span className="ml-3 text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/30">Live</span>
        </div>
        <button className="inline-flex items-center gap-2 text-slate-200/80 hover:text-white transition text-sm">
          <Menu className="h-5 w-5" />
          Menu
        </button>
      </div>
    </header>
  )
}
