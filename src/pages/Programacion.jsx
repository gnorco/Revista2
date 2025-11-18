import { useState, useEffect } from 'react'

export default function Programacion() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setIsVisible(true), 200)
  }, [])

  const equipo = [
    {
      id: 1,
      nombre: 'Lionel Juncos',
      rol: 'Programador',
      color: 'from-blue-400 to-cyan-500',
      icon: '💻'
    },
    {
      id: 2,
      nombre: 'Giuliano Nardi',
      rol: 'Programador',
      color: 'from-purple-400 to-pink-500',
      icon: '⚡'
    },
    {
      id: 3,
      nombre: 'Gustavo Carrasco',
      rol: 'Programador',
      color: 'from-green-400 to-emerald-500',
      icon: '🛠️'
    },
    {
      id: 4,
      nombre: 'Francesco Nardi',
      rol: 'Diseñador',
      color: 'from-orange-400 to-red-500',
      icon: '🎨'
    },
    {
      id: 5,
      nombre: 'Román García',
      rol: 'Diseñador',
      color: 'from-yellow-400 to-orange-500',
      icon: '✨'
    }
  ]

  const experiencias = [
    { titulo: 'Videojuegos', icon: '🎮' },
    { titulo: 'Páginas Web', icon: '🌐' },
    { titulo: 'Aplicaciones', icon: '📱' }
  ]

  const tecnologias = [
    { nombre: 'React', color: 'from-cyan-400 to-blue-500' },
    { nombre: 'HTML & CSS', color: 'from-orange-400 to-red-500' },
    { nombre: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { nombre: 'Python', color: 'from-blue-600 to-cyan-400' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4 w-full">
      {/* Header */}
      <div className={`max-w-6xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
            Nuestro Equipo
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-transparent bg-clip-text leading-tight">
          Programación & Diseño
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold mb-8">
          Hacemos videojuegos, webs y apps
        </p>
        
        <div className="flex justify-center">
          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Sobre Nosotros */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border-2 border-blue-200 p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-300 rounded-full -mr-24 -mt-24 opacity-10"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Somos 5 pibes programando
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                3 programadores y 2 diseñadores. Hacemos proyectos que funcionen y que se vean bien. Es lo que nos gusta.
              </p>
            </div>
          </div>
        </div>

        {/* Equipo - Cards */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            El Equipo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipo.map((miembro) => (
              <div
                key={miembro.id}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${miembro.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full transform hover:scale-105 hover:-translate-y-3 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {miembro.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold leading-tight">
                      {miembro.nombre}
                    </h3>
                    
                    <p className="text-lg font-semibold text-white/90 bg-white/20 inline-block px-4 py-1.5 rounded-full">
                      {miembro.rol}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-4 rounded-full bg-white/80 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-300 rounded-full -ml-24 -mt-24 opacity-5"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Lo que hacemos
              </h2>
              
              <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
                Nos gusta trabajar en distintos tipos de proyectos
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {experiencias.map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="text-6xl mb-4">{exp.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.titulo}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cómo Trabajamos */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-9xl opacity-20">🚀</div>
              <div className="absolute bottom-10 right-10 text-9xl opacity-20">💡</div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-center">
                Cómo trabajamos
              </h2>
              
              <p className="text-lg leading-relaxed text-white/95 mb-8 text-center">
                Nos gusta trabajar juntos, probar cosas nuevas y siempre buscamos hacer las cosas lo mejor posible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-bold text-lg mb-2">Trabajo en Equipo</h3>
                  <p className="text-white/90 text-sm">Programadores y diseñadores juntos</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-bold text-lg mb-2">Ideas Nuevas</h3>
                  <p className="text-white/90 text-sm">Probamos nuevas formas de hacer las cosas</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg mb-2">Calidad</h3>
                  <p className="text-white/90 text-sm">Proyectos que funcionen y que se vean bien</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra Filosofía */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Tecnologías que usamos
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Trabajamos con herramientas modernas que nos permiten crear soluciones sólidas y eficientes.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                {tecnologias.map((tech, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white text-center font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                  >
                    {tech.nombre}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-12 text-white text-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/4 text-9xl">💻</div>
              <div className="absolute top-1/2 right-1/4 text-9xl">🎨</div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
                ¿Tenés un proyecto?
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Nos encanta trabajar en cosas nuevas. Si tenes una idea, charlemos.
              </p>
              
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
                Contactanos Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
