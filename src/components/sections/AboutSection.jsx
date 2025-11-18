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
              Nos llena de orgullo darles la bienvenida a la
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">¡COMPAÑÍA DE RESERVA DE INGENIEROS!
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Esta Subunidad fue creada durante el año 2025 a peticion de las Autoridades del  Departamento de Reservas del Ejército Argentino
              La mision de esta Sub Unidad del arma de Ingenieros es la capacitacion, preparacion y alistamiento permanente para asistir en todas aquellas operaciones del arma que determine la Agrupacion de Ingenieros 601
              El sitio tiene un compendio actualizado de las novedades del Arma de Ingenieros, de esta CA de Reserva, los logros de los integrantes del arma, como asi tambien artículos de interés históricos y de naturaleza técnico-profesional

            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Trabajamos y nos preparamos para cumplir con el Ejercito Argentino y con la Sociedad.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              
              “Ingenieros “Primero la Mision”
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