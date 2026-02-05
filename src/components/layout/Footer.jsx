import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-black text-white py-10 sm:py-12">
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
          {/* Contenido alineado a la derecha */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-8 mb-6 sm:mb-8">
            

            <div className="text-left">
              <h5 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Síguenos
              </h5>
              <div className="flex justify-end space-x-4 mb-4 sm:mb-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-yellow-300" />
                </a>
              
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-yellow-300" />
                </a>
              
              </div>
            </div>
            <div className="text-right">
              <h5 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Contacto
              </h5>
              <ul className="space-y-2 text-sm sm:text-base text-white/70">
                
                <li>cares.agring.601@gmail.com</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-sm sm:text-base text-white/60">
            <p>&copy; {currentYear} Compañía de Reserva de Ingenieros. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
