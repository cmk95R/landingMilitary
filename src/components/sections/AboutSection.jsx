export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://comisioningenieros.mil.ar/wp-content/uploads/2022/08/7.jpg"
              alt="Sobre nosotros"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Compañía de Reserva de Ingenieros
            </h2>
            <h3>¡El Consejo Superior y la Comisión del Arma de Ingenieros "San Ignacio de Loyola" les da la bienvenida!
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Hoy nos cabe la satisfacción de decir que este ámbito zapador está dirigido a los camaradas, amigos y a todos aquellos que deseen acceder a este sitio,
              para encontrar aquí un compendio actualizado de las novedades del Arma de Ingenieros, los logros de sus hombres y mujeres, artículos de interés históricos y de naturaleza técnico-profesional, así como detalles de las distintas actividades que lleva a cabo la Comisión.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Nuestro equipo está compuesto por profesionales altamente capacitados, comprometidos
              con la excelencia y la mejora continua. Trabajamos con pasión para ofrecer servicios
              de calidad que superen las expectativas de nuestros clientes.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              ¡Bienvenidos!
              Comisión del Arma de Ingenieros
              <br />
              “SAN IGNACIO DE LOYOLA”
            </p>
            {/* <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">15+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Profesionales</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}