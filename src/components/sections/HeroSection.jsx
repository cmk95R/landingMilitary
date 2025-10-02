'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section
      id="inicio"
      className="
        relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden
        bg-black
        border-l-[8px] border-l-yellow-500
        ring-1 ring-white/10
        shadow-[0_0_18px_rgba(255,255,255,0.08)]
        hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
      "
    >
      <div className="absolute inset-0">
        {!videoPlaying ? (
          <div className="relative w-full h-full">
            <img
              src="https://comisioningenieros.mil.ar/wp-content/uploads/2022/08/Tapa-2-copia-scaled.jpg"
              alt="Hero background"
              className="w-full h-full object-cover opacity-60"
            />
            {/* Overlay para mejor contraste del texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />

            <button
              onClick={() => setVideoPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Reproducir video"
            >
              <div
                className="
                  rounded-full p-4 sm:p-6 md:p-8
                  bg-yellow-500/15 backdrop-blur-sm
                  ring-1 ring-yellow-400/40
                  transition
                  group-hover:bg-yellow-500/25 group-hover:ring-yellow-300/60
                "
              >
                <Play
                  size={32}
                  className="sm:w-12 sm:h-12 md:w-16 md:h-16 text-yellow-300"
                  fill="#FDE047"
                />
              </div>
            </button>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-people-in-a-business-meeting-4894-large.mp4"
              type="video/mp4"
            />
          </video>
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white z-10 max-w-4xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Bienvenidos a Nuestra Organización
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/80">
            Transformando ideas en realidad desde 2010
          </p>
          <button
            className="
              inline-flex items-center justify-center
              bg-yellow-500 text-black font-semibold
              px-6 py-3 sm:px-8 sm:py-4 rounded-lg
              ring-1 ring-white/10
              shadow-[0_0_12px_rgba(255,255,255,0.06)]
              transition
              hover:bg-yellow-400 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
            "
          >
            Conocer Más
          </button>
        </div>
      </div>
    </section>
  )
}
