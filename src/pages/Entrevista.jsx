import { useState, useEffect } from 'react'

// Sección de Entrevistas
export default function Entrevista() {
  const [selectedInterview, setSelectedInterview] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const interviews = [
    {
      id: 1,
      name: 'Dr. María González',
      role: 'Científica de Datos',
      image: '/scientist-woman.jpg',
      topic: 'Inteligencia Artificial y Ética',
      excerpt: 'Conversamos sobre el futuro de la IA y su impacto en la sociedad.',
      fullInterview: 'En esta entrevista exclusiva, la Dra. González nos habla sobre los desafíos éticos de la inteligencia artificial y cómo podemos construir sistemas más justos y transparentes.'
    },
    {
      id: 2,
      name: 'Carlos Méndez',
      role: 'Desarrollador de Videojuegos',
      image: '/game-developer.png',
      topic: 'El Arte de Crear Mundos Virtuales',
      excerpt: 'Descubre el proceso creativo detrás de los videojuegos modernos.',
      fullInterview: 'Carlos comparte su experiencia en el desarrollo de videojuegos, desde el concepto inicial hasta el producto final, incluyendo los desafíos técnicos y creativos del proceso.'
    },
    {
      id: 3,
      name: 'Chef Roberto Silva',
      role: 'Chef Molecular',
      image: '/chef-cooking.png',
      topic: 'Gastronomía y Ciencia',
      excerpt: 'La química detrás de los sabores y texturas en la cocina moderna.',
      fullInterview: 'El Chef Silva explica cómo la ciencia y la cocina se unen en la gastronomía molecular, creando experiencias culinarias únicas que desafían nuestras expectativas.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6">🎤 Entrevistas</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl">
            Conversaciones con expertos que están transformando el mundo de la ciencia, tecnología y cultura.
          </p>
        </div>
      </div>

      {/* Sección de Entrevistas */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              onClick={() => setSelectedInterview(interview)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={interview.image || "/placeholder.svg"} alt={interview.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{interview.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{interview.role}</p>
                <h4 className="text-lg font-bold text-gray-700 mb-2">{interview.topic}</h4>
                <p className="text-gray-600">{interview.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Entrevista */}
      {selectedInterview && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInterview(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedInterview.image || "/placeholder.svg"}
                alt={selectedInterview.name}
                className="w-full h-96 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedInterview(null)}
                className="absolute top-4 right-4 bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-100 transition-colors font-bold text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-4xl font-black text-gray-800 mb-2">{selectedInterview.name}</h2>
              <p className="text-xl text-purple-600 font-semibold mb-6">{selectedInterview.role}</p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedInterview.topic}</h3>
                <p className="text-gray-700 leading-relaxed">{selectedInterview.fullInterview}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">💬 Puntos Destacados</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-purple-500 font-bold">→</span>
                    Visión única sobre el futuro de su campo
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-purple-500 font-bold">→</span>
                    Consejos para jóvenes interesados en el área
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-purple-500 font-bold">→</span>
                    Reflexiones sobre los desafíos actuales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de Próximas Entrevistas */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📅 Próximamente</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos preparando nuevas entrevistas con científicos, innovadores y creadores que están marcando la diferencia.
          </p>
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 px-8 py-4 rounded-full">
            <p className="text-lg font-semibold text-purple-700">¡Mantente atento a las actualizaciones!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
