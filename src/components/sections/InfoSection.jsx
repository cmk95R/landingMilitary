import sitiosDeInteres from '@/data/informacion'

export default function InfoSection() {
  const lastIndex = sitiosDeInteres.length - 1

  return (
    <section id="informacion" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Enlaces de Interés
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 p-4">
          {sitiosDeInteres.map((sitio, idx) => (
            <a
              key={idx}
              href={sitio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              <img
                src={sitio.logo}
                alt={`Logo de ${sitio.nombre}`}
                loading="lazy"
                className={`object-contain select-none transition-transform duration-300 group-hover:scale-105
                    ${sitio.smaller
                    ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
                    : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28'}
                    `}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
