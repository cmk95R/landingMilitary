import { Calendar, ExternalLink } from 'lucide-react'
import { eventos } from '@/data/eventos'
import { enlacesInteres } from '@/data/enlaces'

export default function EventosSection() {
  return (
    <section id="eventos" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Eventos de Interés
        </h2>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="
        group
        bg-black rounded-lg overflow-hidden
        border-l-[8px] border-l-yellow-500
        ring-1 ring-white/10
        shadow-[0_0_18px_rgba(255,255,255,0.08)]
        transition
        hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
      "
            >
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="
          w-full h-48 sm:h-52 object-cover
          transition-transform duration-300
          group-hover:scale-[1.02]
        "
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-yellow-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-semibold text-sm sm:text-base">{evento.fecha}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {evento.titulo}
                </h3>

                <p className="text-sm sm:text-base text-white/70">
                  {evento.descripcion}
                </p>

                <button
                  className="
            mt-4 text-yellow-400 font-semibold text-sm sm:text-base
            hover:text-yellow-300 hover:underline transition
          "
                >
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Enlaces de Interés */}
        <div
          className="
    bg-black rounded-lg
    border-l-[8px] border-l-yellow-500
    ring-1 ring-white/10
    shadow-[0_0_18px_rgba(255,255,255,0.08)]
    p-6 sm:p-8
    transition
    hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
  "
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Enlaces de Interés
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {enlacesInteres.map((enlace, idx) => (
              <a
                key={idx}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10border-l-[6px] border-l-yellow-500transition hover:bg-white/10 hover:ring-white/20
"
              >
                <span className="text-2xl sm:text-3xl text-yellow-400">
                  {enlace.icono}
                </span>

                <span className="flex-1 font-medium text-sm sm:text-base text-white/80 group-hover:text-white">
                  {enlace.nombre}
                </span>

                <ExternalLink
                  size={16}
                  className="text-white/40 group-hover:text-white/70 flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}