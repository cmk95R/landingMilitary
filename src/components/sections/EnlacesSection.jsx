import { Calendar, ExternalLink } from 'lucide-react'

import { enlacesInteres } from '@/data/enlaces'

export default function EventosSection() {
    return (
        <div className="bg-black rounded-lg shadow-md p-4 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                Enlaces de Interés
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {enlacesInteres.map((enlace, idx) => (
                    <a
                        key={idx}
                        href={enlace.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition group"
                    >
                        <span className="text-2xl sm:text-3xl">{enlace.icono}</span>
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 font-medium flex-1">
                            {enlace.nombre}
                        </span>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                    </a>
                ))}
            </div>
        </div>
    )
}
{/* Enlaces de Interés */ }
