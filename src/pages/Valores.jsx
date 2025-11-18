import { useState, useEffect } from 'react'

export default function Valores() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setIsVisible(true), 200)
  }, [])

  const valores = [
    {
      id: 1,
      nombre: 'Innovación',
      icon: '💡',
      descripcion: 'La escuela promueve la creatividad y el pensamiento innovador en sus estudiantes, fomentando la búsqueda constante de nuevas soluciones y formas de hacer las cosas.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      nombre: 'Trabajo en equipo',
      icon: '🤝',
      descripcion: 'Se valora el trabajo colaborativo y el respeto mutuo entre los estudiantes, promoviendo la construcción de relaciones basadas en la confianza y el apoyo.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      nombre: 'Solidaridad',
      icon: '❤️',
      descripcion: 'Se fomenta la empatía y la compasión hacia los demás, así como el compromiso con la comunidad y el bienestar social.',
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 4,
      nombre: 'Autonomía',
      icon: '🚀',
      descripcion: 'Se busca fomentar la independencia y la responsabilidad en los estudiantes, al mismo tiempo que se les brinda el apoyo y la orientación necesarios para que puedan tomar decisiones informadas.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 5,
      nombre: 'Protagonismo',
      icon: '⭐',
      descripcion: 'Se busca que los estudiantes se conviertan en los principales actores de su proceso de aprendizaje, impulsando su desarrollo personal y profesional.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      id: 6,
      nombre: 'Inclusión',
      icon: '🌈',
      descripcion: 'Se valora la diversidad y se busca crear un ambiente de respeto y aceptación para todos los estudiantes, independientemente de sus orígenes, habilidades o intereses.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      id: 7,
      nombre: 'Excelencia',
      icon: '🏆',
      descripcion: 'Se busca la excelencia en todas las áreas de la educación, desde la calidad académica hasta la atención al estudiante y la formación en valores.',
      color: 'from-amber-400 to-yellow-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4 w-full">
      {/* Header */}
      <div className={`max-w-6xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
            Nuestros Valores
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-transparent bg-clip-text leading-tight">
          Los Pilares de la Escuela Técnica ProA
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold mb-8">
          Valores que orientan nuestra educación integral, inclusiva y democrática
        </p>
        
        <div className="flex justify-center">
          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Misión y Visión */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-blue-200 hover:border-blue-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full -mr-16 -mt-16 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
                  🎯 Misión
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
                  Somos una escuela secundaria pública y gratuita que brinda formación orientada en programación y desarrollo de software
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Educamos desde una perspectiva integral, inclusiva y democrática, promoviendo valores de solidaridad, respeto y justicia social. A través del trabajo cooperativo y el uso de metodologías ágiles, favorecemos la innovación, la autonomía y el protagonismo estudiantil.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Buscamos que cada estudiante desarrolle capacidades para aprender a lo largo de toda la vida, participar activamente en la construcción de una sociedad más equitativa y ejercer una ciudadanía responsable.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-purple-200 hover:border-purple-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full -mr-16 -mt-16 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-bold">
                  🌟 Visión
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
                  Ser reconocidos como líderes en educación secundaria en programación y desarrollo de software
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nuestros estudiantes tendrán la capacidad de crear soluciones innovadoras y afrontar los desafíos del mundo digital con confianza. Nos esforzamos por ser una institución educativa de referencia que impulsa la educación en valores, fomenta la inclusión y promueve la formación integral de nuestros estudiantes como líderes en sus comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestros 7 Valores Fundamentales
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {valores.map((valor) => (
              <div
                key={valor.id}
                onClick={() => setActiveValue(activeValue === valor.id ? null : valor.id)}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${valor.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full transform hover:scale-105 hover:-translate-y-2 text-white relative overflow-hidden`}>
                  {/* Fondo decorativo */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{valor.icon}</span>
                      <h3 className="text-3xl font-bold leading-tight">{valor.nombre}</h3>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed text-lg">
                      {valor.descripcion}
                    </p>
                  </div>
                  
                  {/* Indicador interactivo */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-3 h-3 rounded-full bg-white/80 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de impacto */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-9xl opacity-20">💻</div>
              <div className="absolute bottom-10 right-10 text-9xl opacity-20">🎓</div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Formación Integral en Programación
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/95 mb-8">
                A través de estos valores, preparamos a nuestros estudiantes no solo como excelentes programadores, sino como ciudadanos responsables, innovadores y comprometidos con el cambio social. En la Escuela Técnica ProA, la educación va más allá del código.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
                  <div className="text-4xl mb-3">🚀</div>
                  <p className="font-semibold">Innovación Constante</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
                  <div className="text-4xl mb-3">🤝</div>
                  <p className="font-semibold">Comunidad Solidaria</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
                  <div className="text-4xl mb-3">⭐</div>
                  <p className="font-semibold">Excelencia Educativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Querés ser parte de nuestra comunidad?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactanos para conocer más sobre nuestra propuesta educativa basada en valores, innovación y excelencia académica.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">📞 Teléfono</p>
                <p className="text-gray-800 font-bold">0351 - 4331985 / 4342718</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">✉️ Email</p>
                <p className="text-gray-800 font-bold break-all">EducacionTecnica@cba.gov.ar</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">🎓 Institución</p>
                <p className="text-gray-800 font-bold">Escuela Técnica ProA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
