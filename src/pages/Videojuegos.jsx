import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Videojuegos = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('historia')
  const [expandedCard, setExpandedCard] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }, [])

  const handleScrollAndNavigate = (path) => {
    navigate(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const handlePlayOnScratch = () => {
    window.open('https://scratch.mit.edu/projects/1242888045', '_blank')
  }

  const handleDownloadGame = () => {
    window.open('https://drive.google.com/file/d/1OoXbkcunWWekTGj9qSGSFq_zUeEIGdO5/view?usp=sharing', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section con animación */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative px-6 md:px-12 py-20 text-center">
          <div className="inline-block animate-bounce mb-6">
            <span className="text-7xl">🎮</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            ¿Los videojuegos pueden transmitir sentimientos?
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Sí. Y no solo lo hacen; lo hacen como ningún otro medio.
          </p>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-200 text-lg leading-relaxed">
            <p>
              Desde que existen, las personas han buscado nuevas formas de contar lo que sienten. 
              Pinturas en cuevas, libros, canciones, películas... Cada paso fue una mejora en nuestra 
              forma de comunicarnos. Pero hoy, en pleno siglo XXI, los videojuegos se convirtieron en 
              uno de los lenguajes más completos que tenemos para expresar ideas, emociones e historias.
            </p>
            <p className="text-xl font-semibold text-cyan-300">
              ¿Por qué? Porque no solo muestran o cuentan. Nos ponen en el centro. Nos hacen vivir.
            </p>
            <p>
              Un videojuego puede hacerte reír, estresarte, emocionarte o incluso hacerte llorar. 
              Todo eso a través de imágenes, música, decisiones y una simple cosa que lo cambia todo: 
              la interacción. Es uno de los pocos medios donde el mensaje no pasa solo por lo que ves, 
              sino por lo que hacés. Y eso lo vuelve único.
            </p>
            <p className="text-lg text-cyan-200 mt-6">
              En esta sección vas a encontrar lo mejor de este universo. Noticias y movimientos que 
              están pasando en Argentina y Córdoba. Historias del pasado que marcaron época. Avances 
              tecnológicos que parecen sacados de ciencia ficción. Y también, una mirada a cómo los 
              videojuegos están cambiando el mundo: desde la educación hasta el arte, desde el deporte 
              hasta la salud mental.
            </p>
            <p className="text-xl font-bold text-pink-300 mt-4">
              Porque los videojuegos no son solo "juegos". Son cultura, son herramientas, son un 
              fenómeno global que crece todos los días.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg">
        <div className="flex justify-center px-6 md:px-12 py-4">
          <div className="flex gap-4 flex-wrap justify-center">
            {['historia', 'argentina', 'novedades', 'masalla'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {tab === 'historia' && '📜 Historia'}
                {tab === 'argentina' && '🇦🇷 Argentina'}
                {tab === 'novedades' && '💡 Novedades'}
                {tab === 'masalla' && '🌟 Más Allá'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12">
        {/* Historia Section */}
        {activeTab === 'historia' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-5xl">📜</span>
              Historia De Los Juegos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: 'evolucion',
                  title: 'La evolución del gaming',
                  emoji: '🕹️',
                  content: 'Desde los primeros arcades de Pong y Space Invaders hasta el cloud gaming moderno, la industria ha evolucionado de manera impresionante. Los juegos pasaron de píxeles simples a mundos fotorrealistas con narrativas complejas.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  id: 'doom',
                  title: 'La historia secreta de la creación de Doom',
                  emoji: '👾',
                  content: 'Doom revolucionó los FPS en 1993. John Carmack y John Romero crearon un motor gráfico innovador que cambió la industria para siempre, estableciendo las bases del gaming moderno.',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  id: 'mundo',
                  title: 'Cómo el mundo inspiró los juegos',
                  emoji: '🌍',
                  content: 'Los videojuegos se nutren de la historia, mitología, cultura y eventos reales. Desde Assassin\'s Creed recreando épocas históricas hasta juegos que exploran conflictos sociales contemporáneos.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  id: 'retro',
                  title: '¿Por qué los juegos retro están volviendo?',
                  emoji: '👴',
                  content: 'La nostalgia es poderosa. Los juegos retro nos conectan con nuestra infancia, tienen mecánicas simples pero adictivas, y su estética pixelada se ha convertido en un género artístico propio.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  id: 'cloud',
                  title: 'Del cartucho al cloud gaming',
                  emoji: '☁️',
                  content: 'La forma de jugar cambió radicalmente: de cartuchos físicos a CDs, descargas digitales y ahora streaming. El cloud gaming permite jugar AAA en cualquier dispositivo sin necesidad de hardware potente.',
                  color: 'from-indigo-500 to-blue-500'
                }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCard(item.id)}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{item.emoji}</span>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className={`text-white/90 ${expandedCard === item.id ? '' : 'line-clamp-2'}`}>
                    {item.content}
                  </p>
                  {expandedCard === item.id && (
                    <div className="mt-4 pt-4 border-t border-white/30">
                      <span className="text-sm text-white/80">Click para cerrar</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Argentina Section */}
        {activeTab === 'argentina' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-5xl">🇦🇷</span>
              Argentina Gamer
            </h2>
            
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-8 rounded-3xl shadow-2xl mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Argentina y su distinción gaming</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                La escena gamer en Argentina crece cada año con eventos como EVA (Exposición de Videojuegos Argentina), 
                una de las convenciones más grandes de Latinoamérica. Los desarrolladores argentinos destacan en 
                programación, diseño y narrativa, dejando huella internacional con estudios como NGD Studios y Nimble Giant Entertainment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-3xl shadow-2xl mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Videojuegos argentinos: un recorrido olvidado</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Desde los años 80 con juegos para Commodore 64, Argentina tiene una rica historia en desarrollo de videojuegos. 
                Títulos como Master of Orion, Malvinas 2032 y más recientemente Pampa y Eternity: The Last Unicorn muestran 
                el talento local que merece ser recordado y celebrado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">Juegos ProA</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Una propuesta innovadora es crear videojuegos desarrollados por estudiantes del ProA, colaborando con 
                otras secciones como música para soundtracks originales. Un proyecto educativo que combina creatividad, 
                tecnología y trabajo en equipo, mostrando el potencial de los jóvenes desarrolladores cordobeses.
              </p>
            </div>
          </div>
        )}

        {/* Novedades Section */}
        {activeTab === 'novedades' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-5xl">💡</span>
              Novedades
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'PlayStation 6: lo que se sabe hasta ahora', emoji: '🎮', desc: 'Rumores apuntan a tecnología ray-tracing avanzada, soporte 8K nativo y posible integración con cloud gaming. Se espera para 2027-2028.' },
                { title: 'Consolas futuras: el futuro de cómo se juega', emoji: '🕹️', desc: 'Las consolas evolucionan hacia híbridos entre hardware local y streaming, con controles hápticos avanzados y realidad virtual integrada.' },
                { title: '¿Qué nuevas grandes obras maestras vienen?', emoji: '🎨', desc: 'GTA VI, The Elder Scrolls VI, y nuevas IPs prometen revolucionar la narrativa y el gameplay con tecnologías de próxima generación.' },
                { title: 'Joyas ocultas: juegos que todos deben jugar', emoji: '💎', desc: 'Hollow Knight, Celeste, Hades, Outer Wilds - Indies que demuestran que la creatividad supera al presupuesto.' },
                { title: '¿$100 por un juego?', emoji: '💰', desc: 'El debate sobre los precios AAA aumenta. ¿Justifican los costos de desarrollo? ¿Es sostenible el modelo actual?' },
                { title: 'Crea tu juego, transmite tu mundo', emoji: '🛠️', desc: 'Unity, Unreal Engine y Godot democratizan el desarrollo. Cualquiera con una idea puede crear su propio videojuego.' },
                { title: 'IA: la mejora que cambiará los juegos para siempre', emoji: '🤖', desc: 'NPCs con comportamiento realista, generación procedural mejorada y diálogos dinámicos transformarán la inmersión.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border-2 border-purple-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Más Allá Section */}
        {activeTab === 'masalla' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-5xl">🌟</span>
              Más allá del entretenimiento
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">🎓 Aplicaciones de videojuegos fuera del entretenimiento</h3>
                <ul className="space-y-3 text-white/90 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <span><strong>Educación:</strong> Minecraft Education, Duolingo gamificado, simuladores médicos para cirugía.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <span><strong>Salud:</strong> Terapia física con Ring Fit Adventure, tratamiento de PTSD con VR, rehabilitación cognitiva.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <span><strong>Empresarial:</strong> Simuladores de entrenamiento, teambuilding virtual, onboarding interactivo.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">🧠 ¿Los videojuegos son malos para la salud?</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  <strong>La respuesta corta: depende del uso.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-xl mb-2 text-green-300">✅ Beneficios:</h4>
                    <ul className="space-y-1 text-white/90">
                      <li>• Mejora reflejos y coordinación</li>
                      <li>• Desarrolla pensamiento estratégico</li>
                      <li>• Fomenta creatividad y resolución de problemas</li>
                      <li>• Reduce estrés (juegos relajantes)</li>
                      <li>• Mejora habilidades sociales (multijugador)</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="font-bold text-xl mb-2 text-red-300">⚠️ Riesgos:</h4>
                    <ul className="space-y-1 text-white/90">
                      <li>• Adicción por uso excesivo</li>
                      <li>• Sedentarismo si no se balancea</li>
                      <li>• Problemas de sueño por jugar tarde</li>
                      <li>• Aislamiento social (si se abusa)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">🗣️ CASI un lenguaje perfecto</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Los videojuegos combinan narrativa, música, arte visual, diseño de niveles, mecánicas y elección del jugador. 
                  Es un medio que integra todas las formas de arte y comunicación previas, añadiendo la interactividad como 
                  elemento diferenciador. Juegos como The Last of Us, Disco Elysium o Journey demuestran que los videojuegos 
                  pueden transmitir emociones tan profundas como cualquier libro o película.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">🌍 Cómo los videojuegos moldearon el mundo</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Los videojuegos impulsaron avances en gráficos computacionales, IA, física simulada y hardware. 
                  Culturalmente, crearon comunidades globales, esports profesionales, y nuevas formas de narrativa. 
                  Económicamente, la industria supera al cine y la música combinadas. Socialmente, cambiaron cómo 
                  las generaciones se comunican, compiten y colaboran.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              🚀 ¡Jugá Ahora!
            </h2>
            <p className="text-2xl text-white font-semibold">
              Experimentá la creación de estudiantes del ProA
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-cyan-400/50">
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-4">
                <span className="text-5xl">🎮</span>
                BattleShips Duel
                <span className="text-5xl">🚀</span>
              </h3>
              <p className="text-xl text-cyan-200 font-semibold">
                Combate espacial 1 vs 1 con miles de combinaciones posibles
              </p>
            </div>

            {/* Descripción del juego */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-purple-500/30">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📝</span> Descripción
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                BattleShips Duel es un juego competitivo de naves espaciales 1 vs 1, pensado para 
                partidas rápidas contra un amigo. Cada jugador controla una nave con movimientos 
                simples pero con una enorme variedad de disparos y habilidades especiales: hay 
                <span className="font-bold text-cyan-300"> 6 tipos de disparos y 6 habilidades distintas</span>, 
                lo que genera miles de combinaciones únicas y permite estilos de juego completamente diferentes.
              </p>
              <p className="text-yellow-300 font-bold text-lg">
                Tu objetivo es simple: bajar la vida del rival de 200 a 0 esquivando ataques, 
                eligiendo bien tu configuración y usando tu habilidad especial en el momento justo.
              </p>
            </div>

            {/* Controles */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎮</span> Jugador 1
                </h4>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">A / D</span>
                    <span>Moverse</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">R</span>
                    <span>Disparar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">T</span>
                    <span>Habilidad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎮</span> Jugador 2
                </h4>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">← / →</span>
                    <span>Moverse</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">O</span>
                    <span>Disparar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">P</span>
                    <span>Habilidad</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Características */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl shadow-xl mb-8">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Características Clave
              </h4>
              <ul className="grid md:grid-cols-2 gap-4 text-white">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>6 tipos de disparos únicos con patrones distintos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>6 habilidades especiales (ofensivas y defensivas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Miles de combinaciones posibles de setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Partidas rápidas y dinámicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Sistema de vida (200 HP por jugador)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Recarga de habilidades cada ~10 segundos</span>
                </li>
              </ul>
            </div>

            {/* Mecánicas */}
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-cyan-500/30">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Mecánicas
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">→</span>
                  <span>Cada disparo se esquiva de manera distinta, definiendo tu estilo de juego</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">→</span>
                  <span>Las habilidades agregan profundidad estratégica (defensivas, ofensivas o de largo plazo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">→</span>
                  <span>Contador de 3 segundos antes de comenzar cada batalla</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">→</span>
                  <span>Configuración pre-partida para elegir disparo y habilidad</span>
                </li>
              </ul>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
              <button
                onClick={handlePlayOnScratch}
                className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 border-4 border-yellow-300"
              >
                <span className="flex items-center gap-3">
                  <span className="text-4xl">🎮</span>
                  <span>JUGAR EN SCRATCH</span>
                  <span className="text-4xl">🚀</span>
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleDownloadGame}
                className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 border-4 border-cyan-300"
              >
                <span className="flex items-center gap-3">
                  <span className="text-4xl">📥</span>
                  <span>DESCARGAR JUEGO</span>
                  <span className="text-4xl">💾</span>
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <p className="text-center text-gray-300 mt-6 text-sm">
              Creado por estudiantes del ProA | Programación y Diseño Original
            </p>
          </div>
        </div>

        {/* Botón volver */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => handleScrollAndNavigate('/')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
          >
            ← Volver al Inicio
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Videojuegos
