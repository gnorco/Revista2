import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Sección Sobre La Revista
export default function SobreLaRevista() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => setIsVisible(true), 200)
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="w-full px-6 md:px-10 lg:px-16 py-16">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#7b91fe] to-[#41599f] text-white text-sm font-bold rounded-full shadow-lg">
              Sobre Nosotros
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#15274b] via-[#41599f] to-[#7b91fe] text-transparent bg-clip-text leading-tight">
            Revista ProA
          </h1>
          
          <p className="text-2xl text-gray-700 font-semibold mb-4">
            Ciencia, Innovación y Tecnología
          </p>
          
          <div className="flex justify-center">
            <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-[#7b91fe] to-[#41599f]"></div>
          </div>
        </div>

        {/* Subtítulo */}
        <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-10 border-2 border-blue-100 shadow-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-gray-800 text-center leading-relaxed font-medium">
            Descubrí cómo la ciencia y la tecnología transforman nuestra vida cotidiana, la educación y la cultura.
          </p>
        </div>

        {/* Contenido principal */}
        <section className={`space-y-6 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">📚</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                La <strong className="text-[#15274b]">Revista ProA</strong> es un medio digital y educativo que acerca a su audiencia a los últimos
                avances en ciencia, innovación y tecnología. Su objetivo es inspirar curiosidad, pensamiento crítico y
                participación activa en temas científicos.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">✍️</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                La revista ofrece <strong className="text-[#15274b]">artículos, entrevistas, reportajes y guías prácticas</strong> sobre innovación
                tecnológica, ciencia aplicada, educación y cultura, así como sostenibilidad y proyectos de futuro.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Además, integra <strong className="text-[#15274b]">elementos interactivos y multimedia</strong> como videos, gráficos animados y
                encuestas para que la experiencia del lector sea más inmersiva y educativa.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7b91fe] to-[#41599f] rounded-2xl p-8 shadow-xl text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">🎓</span>
              </div>
              <p className="leading-relaxed text-lg">
                Su misión es <strong>difundir información clara, confiable y actualizada</strong>, fomentando el interés por
                la ciencia y la tecnología en jóvenes, estudiantes, educadores y entusiastas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                La visión de la revista es convertirse en un <strong className="text-[#15274b]">referente educativo y cultural</strong>, inspirando a
                futuras generaciones a involucrarse en proyectos científicos y tecnológicos.
              </p>
            </div>
          </div>
        </section>

        {/* Galería */}
        <div className={`mt-12 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#15274b" }}>
            Nuestra Comunidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-blue-100 to-purple-100 h-80 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7b91fe]/20 to-[#41599f]/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎨</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">Creatividad</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-orange-100 to-red-100 h-80 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-orange-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💡</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">Innovación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de retorno */}
        <div className={`flex justify-center mt-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-xl bg-gradient-to-r from-[#7b91fe] to-[#41599f] hover:from-[#6b81ee] hover:to-[#5a70dd] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <svg 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
