import { MapPin, Phone, Mail } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-lg
            border-l-[8px] border-l-yellow-500
            ring-1 ring-white/10
            shadow-[0_0_18px_rgba(255,255,255,0.08)]
            p-6 sm:p-8
            transition
            hover:ring-white/20 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]
          "
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
            Nuestra Ubicación
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Google Maps */}
            <div
              className="
                bg-black rounded-lg overflow-hidden
                ring-1 ring-white/10
                shadow-[0_0_12px_rgba(255,255,255,0.06)]
                h-64 sm:h-80 lg:h-96
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52564.09834425892!2d-58.4438462!3d-34.6037181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1632847200000!5m2!1ses!2sar"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de ubicación"
              />
            </div>

            {/* Información de Contacto */}
            <div className="bg-white/5 rounded-lg ring-1 ring-white/10 p-5 sm:p-6 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Dirección
                  </h4>
                  <p className="text-sm sm:text-base text-white/70">
                    Av. Corrientes 1234, Buenos Aires
                  </p>
                  <p className="text-sm sm:text-base text-white/70">
                    Buenos Aires, Argentina C1043
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Teléfono
                  </h4>
                  <p className="text-sm sm:text-base text-white/70">+54 11 1234-5678</p>
                  <p className="text-sm sm:text-base text-white/70">+54 11 8765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Email
                  </h4>
                  <p className="text-sm sm:text-base text-white/70">
                    info@miorganizacion.com
                  </p>
                  <p className="text-sm sm:text-base text-white/70">
                    contacto@miorganizacion.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
