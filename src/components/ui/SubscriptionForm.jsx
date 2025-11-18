'use client'

import { useState } from 'react'

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', grado: '', arma: '', dni: '', edad: '', nacionalidad: '', celular: '',
    estadoCivil: 'Soltero/a', sexo: 'Masculino', email: '', domicilio: '', localidad: '', provincia: '',
    cp: '', obraSocial: '', hijos: '', peso: '', altura: '', fotoFrente: null, fotoCuerpoEntero: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Usaremos FormData para poder enviar archivos
    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key])
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: data, // No se necesita 'Content-Type' header, el navegador lo pone solo con FormData
      })

      if (!response.ok) throw new Error('Error al enviar el formulario.')

      setIsSubmitted(true) // Mostramos el mensaje de éxito
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un problema al enviar tu inscripción. Por favor, intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-white mb-4">¡Inscripción Recibida!</h3>
        <p className="text-white/80 max-w-sm mx-auto">
          En caso de incorporación será contactado vía mail con los documentos, requisitos y requerimientos a cumplir.
        </p>
        {/* Opcional: un botón para cerrar el modal manualmente */}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-h-[70vh] overflow-y-auto pr-4 -mr-4">
      {/* --- Datos Personales y Militares --- */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-white mb-3">Datos Personales y Militares</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Nombre', 'Apellido', 'Grado', 'Arma', 'DNI', 'Edad', 'Nacionalidad', 'Celular'].map((field) => (
            <div key={field.toLowerCase()}>
              <label htmlFor={field.toLowerCase()} className="block text-sm font-medium text-white/80 mb-2">{field}</label>              <input type={['DNI', 'Edad', 'Celular'].includes(field) ? 'number' : 'text'} id={field.toLowerCase()} name={field.toLowerCase()} value={formData[field.toLowerCase()]} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
            </div>
          ))}
          <div>
            <label htmlFor="estado-civil" className="block text-sm font-medium text-white/80 mb-2">Estado Civil</label>
            <select id="estado-civil" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition">
              <option>Soltero/a</option>
              <option>Casado/a</option>
              <option>Viudo/a</option>
              <option>Divorciado/a</option>
            </select>
          </div>
          <div>
            <label htmlFor="sexo" className="block text-sm font-medium text-white/80 mb-2">Sexo</label>
            <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition">
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* --- Datos de Contacto --- */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-white mb-3">Datos de Contacto</legend>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="domicilio" className="block text-sm font-medium text-white/80 mb-2">Domicilio</label>
            <input type="text" id="domicilio" name="domicilio" value={formData.domicilio} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="localidad" className="block text-sm font-medium text-white/80 mb-2">Localidad</label>
            <input type="text" id="localidad" name="localidad" value={formData.localidad} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="provincia" className="block text-sm font-medium text-white/80 mb-2">Provincia</label>
            <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="cp" className="block text-sm font-medium text-white/80 mb-2">Código Postal (CP)</label>
            <input type="text" id="cp" name="cp" value={formData.cp} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
        </div>
      </fieldset>

      {/* --- Datos Adicionales --- */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-white mb-3">Datos Adicionales</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="obra-social" className="block text-sm font-medium text-white/80 mb-2">Obra Social</label>
            <input type="text" id="obra-social" name="obraSocial" value={formData.obraSocial} onChange={handleChange} required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="hijos" className="block text-sm font-medium text-white/80 mb-2">Cantidad de Hijos</label>
            <input type="number" id="hijos" name="hijos" value={formData.hijos} onChange={handleChange} min="0" required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-white/80 mb-2">Peso (kg)</label>
            <input type="number" id="peso" name="peso" value={formData.peso} onChange={handleChange} step="0.1" min="0" required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
          <div>
            <label htmlFor="altura" className="block text-sm font-medium text-white/80 mb-2">Altura (cm)</label>
            <input type="number" id="altura" name="altura" value={formData.altura} onChange={handleChange} min="0" required className="w-full bg-[#2a2a2a] border border-white/10 text-white rounded-md p-3 focus:ring-[#4099a2] focus:border-[#4099a2] transition" />
          </div>
        </div>
      </fieldset>

      {/* --- Subir Foto --- */}
      <fieldset>
        <legend className="text-lg font-semibold text-white mb-3">Foto</legend>
        <div className="space-y-4">
          <label htmlFor="fotoFrente" className="block text-sm font-medium text-white/80 mb-2">
            Foto Frente
          </label>
          <input
            type="file"
            id="fotoFrente"
            name="fotoFrente"
            onChange={handleChange}
            accept="image/*"
            required
            className="
              w-full text-sm text-white/70
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-[#4099a2]/80 file:text-white
              hover:file:bg-[#4099a2]
            "
          />
          <label htmlFor="fotoCuerpoEntero" className="block text-sm font-medium text-white/80 mb-2">
            Foto de cuerpo entero
          </label>
          <input
            type="file"
            id="fotoCuerpoEntero"
            name="fotoCuerpoEntero"
            onChange={handleChange}
            accept="image/*"
            required
            className="
              w-full text-sm text-white/70
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-[#4099a2]/80 file:text-white
              hover:file:bg-[#4099a2]
            "
          />
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 inline-flex items-center justify-center bg-[#4099a2] text-white font-semibold px-6 py-3 rounded-lg ring-1 ring-white/10 shadow-[0_0_12px_rgba(255,255,255,0.06)] transition hover:bg-[#4099a2]/90 hover:ring-white/20 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}