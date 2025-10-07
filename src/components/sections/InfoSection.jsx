import sitiosDeInteres from '@/data/informacion'
export default function InfoSection() {
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
      className="groupbg-gray-50 rounded-lg shadow-md p-4 flex items-center justify-center aspect-video sm:aspect-square hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <img
        src={sitio.logo}
        alt={`Logo de ${sitio.nombre}`}
        loading="lazy"
        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  ))}
</div>
      </div>
    </section>
  )
}