'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Nosotros' },
    { href: '#informacion', label: 'Información' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className="
        sticky top-0 z-50
        bg-black/95 backdrop-blur
        border-l-[8px] border-l-[#9D7852]
        ring-1 ring-white/10
        shadow-[0_0_18px_rgba(255,255,255,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 ">
          <a href="#inicio" className="flex items-center gap-4">
            <img
              className="h-12 w-auto"
              src="/01.png"
              alt="Logo de la Comisión de Ingenieros"
            />
            <h5 className="text-xl sm:text-2xl text-white font-small">
              Compañía de Reserva de Ingenieros
            </h5>
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-white/80 hover:text-yellow-300
                  transition
                  relative
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}

            {/* CTA */}
            {/* <a
              href="#contacto"
              className="
                ml-2 inline-flex items-center
                bg-yellow-500 text-black font-semibold
                px-4 py-2 rounded-lg
                ring-1 ring-white/10
                shadow-[0_0_12px_rgba(255,255,255,0.06)]
                transition
                hover:bg-yellow-400 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
              "
            >
              Contacto
            </a> */}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="
              md:hidden
              p-2 rounded-md
              text-white
              bg-white/5 ring-1 ring-white/10
              hover:bg-white/10 hover:ring-white/20
              transition
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="
              md:hidden
              pb-4
              border-t border-white/10 pt-2
              animate-in fade-in duration-200
            "
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white/80
                      bg-white/5 ring-1 ring-white/10
                      border-l-4 border-l-transparent
                      hover:text-white hover:bg-white/10 hover:ring-white/20
                      hover:border-l-yellow-500
                      transition
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="pt-1">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="
                    block text-center
                    bg-yellow-500 text-black font-semibold
                    px-3 py-2 rounded-lg
                    ring-1 ring-white/10
                    shadow-[0_0_12px_rgba(255,255,255,0.06)]
                    transition
                    hover:bg-yellow-400 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
                  "
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
