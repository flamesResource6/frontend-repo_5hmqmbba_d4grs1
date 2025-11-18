import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import Rankings from './components/Rankings'
import Benchmarks from './components/Benchmarks'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar/>
      <Hero/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Filters onChange={()=>{}}/>
      </main>
      <Rankings/>
      <Benchmarks/>
      <footer className="border-t border-white/10 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
          Данные собираются из публичных источников. Проект ориентирован на новые модели, включая GPT-5.1.
        </div>
      </footer>
    </div>
  )
}

export default App