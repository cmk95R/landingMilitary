'use client'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="
        relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden
        bg-black
        border-l-[8px] border-l-[#9D7852]
        ring-1 ring-white/10
        shadow-[0_0_18px_rgba(255,255,255,0.08)]
        hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
      "
    >
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="https://comisioningenieros.mil.ar/wp-content/uploads/2022/08/Tapa-2-copia-scaled.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white z-10 max-w-4xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-balance">
            Bienvenidos
          </h2>

           <img
              className="h-48 w-auto mx-auto mb-6 sm:mb-8"
              src="/01.png"
              alt="Logo de la Comisión de Ingenieros"
            />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/80 text-balance">
            Transformando ideas en realidad desde 2010
          </p>
          <button
            className="
              inline-flex items-center justify-center
              bg-[#4099a2] text-white font-semibold
              px-6 py-3 sm:px-8 sm:py-4 rounded-lg
              ring-1 ring-white/10
              shadow-[0_0_12px_rgba(255,255,255,0.06)]
              transition
              hover:bg-[#4099a2]/90 hover:ring-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
            "
          >
            Sumate
          </button>
        </div>
      </div>
    </section>
  )
}
