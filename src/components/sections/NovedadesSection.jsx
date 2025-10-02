import { Calendar } from 'lucide-react'
import { novedades } from '@/data/novedades'

export default function NovedadesSection() {
  return (
    <section id="novedades" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Novedades
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {novedades.map((novedad, idx) => (
            <div
              key={idx}
              className="
  bg-black rounded-lg
  border-l-[8px] border-l-yellow-500
  ring-1 ring-white/10
  shadow-[0_0_18px_rgba(255,255,255,0.08)]
  p-4 sm:p-6
  transition
  hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
"          >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-yellow-600" size={18} />
                    <span className="text-sm sm:text-base text-white font-semibold">
                      {novedad.fecha}
                    </span>
                  </div>
                  <span className="bg-gray-300 text-black-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {novedad.categoria}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {novedad.titulo}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white ">
                {novedad.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}