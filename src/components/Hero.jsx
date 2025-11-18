import { Brain, Trophy, LineChart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 -left-24 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-64 -right-24 h-96 w-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
              <span className="inline-flex items-center gap-1"><Brain className="h-3.5 w-3.5"/> Новые модели • GPT-5.1</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Рейтинги ИИ по категориям и бенчмаркам
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Открой топовые модели от опенсорс до гигантов. Сравнивай по направлениям: чат, код, мультимодальность, vision, reasoning. Следим за свежими релизами.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#rankings" className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-lg shadow-blue-500/20 transition inline-flex items-center gap-2">
                <Trophy className="h-5 w-5"/> Смотреть топы
              </a>
              <a href="#benchmarks" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition inline-flex items-center gap-2">
                <LineChart className="h-5 w-5"/> Бенчмарки
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {["chat","coding","vision","multimodal","reasoning","tools"].map((c,i)=> (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-slate-300 text-sm">{c}</div>
                    <div className="mt-2 h-2 rounded bg-slate-700">
                      <div className="h-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400" style={{width: `${60 + i*6}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
