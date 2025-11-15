import { useState, useEffect } from "react"

const OlympicRing = ({ color, position, onClick, found }) => {
  if (found) return null
  
  return (
    <button
      onClick={onClick}
      className="fixed z-50 cursor-pointer hover:scale-110 transition-transform opacity-30 hover:opacity-100"
      style={{ top: position.top, left: position.left }}
      aria-label={`Aro olímpico ${color}`}
    >
      <svg width="35" height="35" viewBox="0 0 35 35">
        <circle
          cx="17.5"
          cy="17.5"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      </svg>
    </button>
  )
}

const JuegosOlimpicos = () => {
  const [foundRings, setFoundRings] = useState([])
  const [showTrivia, setShowTrivia] = useState(false)
  const [triviaAnswers, setTriviaAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const rings = [
    { id: 1, color: "#0085C7", position: { top: "20%", left: "5%" } },
    { id: 2, color: "#000000", position: { top: "35%", left: "92%" } },
    { id: 3, color: "#EE334E", position: { top: "55%", left: "3%" } },
    { id: 4, color: "#FCB131", position: { top: "70%", left: "95%" } },
    { id: 5, color: "#00A651", position: { top: "88%", left: "8%" } },
  ]

  const triviaQuestions = [
    {
      block: "Juegos Olímpicos",
      tip: "Los Juegos Olímpicos no solo promueven la competencia, sino también la unión, el respeto y la excelencia. Participar importa tanto como ganar.",
      questions: [
        {
          q: "¿Cada cuántos años se celebran los Juegos Olímpicos modernos?",
          options: ["Cada 2 años", "Cada 4 años", "Cada 5 años"],
          correct: 1
        },
        {
          q: "¿Qué país organizó los primeros Juegos Olímpicos modernos en 1896?",
          options: ["Francia", "Grecia", "Inglaterra"],
          correct: 1
        },
        {
          q: "¿Qué simboliza el color blanco del fondo en la bandera olímpica?",
          options: ["La paz y la unión entre las naciones", "La pureza del deporte", "El continente europeo"],
          correct: 0
        }
      ]
    },
    {
      block: "Alimentación",
      tip: "Una buena alimentación es tan importante como el entrenamiento. Comer bien antes, durante y después del ejercicio mejora el rendimiento, la concentración y la recuperación.",
      questions: [
        {
          q: "¿Por qué los atletas suelen consumir carbohidratos antes de una competencia importante?",
          options: ["Porque ayudan a mantener la energía durante el esfuerzo físico", "Porque aumentan la masa muscular rápidamente", "Porque hacen que el cuerpo sude menos"],
          correct: 0
        },
        {
          q: "¿Qué sucede si un deportista no se alimenta correctamente durante su preparación?",
          options: ["Puede sufrir fatiga y bajo rendimiento físico", "Su cuerpo se acostumbra y no le afecta", "Puede ganar más fuerza por comer menos"],
          correct: 0
        },
        {
          q: "¿Por qué es importante la hidratación incluso antes de sentir sed?",
          options: ["Porque la sed aparece cuando ya hay un leve grado de deshidratación", "Porque el agua mejora el aspecto físico", "Porque evita tener hambre"],
          correct: 0
        },
        {
          q: "Durante una competencia larga, como una maratón, ¿qué tipo de nutrientes necesita reponer principalmente el atleta?",
          options: ["Grasas y sodio", "Carbohidratos y electrolitos", "Proteínas y calcio"],
          correct: 1
        }
      ]
    },
    {
      block: "Prejuicios",
      tip: "El deporte enseña valores como el respeto, la igualdad y el trabajo en equipo. Romper prejuicios ayuda a que todos puedan participar sin importar su género, edad o apariencia.",
      questions: [
        {
          q: "¿Cuál de estas frases refleja un prejuicio común en el deporte?",
          options: ["Todos los deportes requieren esfuerzo", "Las mujeres no pueden practicar boxeo", "El entrenamiento constante mejora el rendimiento"],
          correct: 1,
          extra: "¿Sabías que una de las boxeadoras más reconocidas del mundo es Claressa Shields (EE. UU.)? Ganó dos medallas de oro olímpicas (Londres 2012 y Río 2016) y es campeona mundial profesional. Su historia demuestra que el talento y la dedicación no tienen género."
        },
        {
          q: "¿Por qué los prejuicios afectan negativamente el ambiente deportivo?",
          options: ["Porque limitan la participación y generan discriminación", "Porque ayudan a elegir mejores deportistas", "Porque hacen las competencias más justas"],
          correct: 0
        },
        {
          q: "¿Qué se puede hacer para reducir los prejuicios en el deporte y fomentar la inclusión?",
          options: ["Promover la diversidad y el respeto entre todos", "Separar a las personas por su nivel económico", "Evitar que los principiantes participen"],
          correct: 0
        }
      ]
    }
  ]

  useEffect(() => {
    window.scrollTo({ top: 400, behavior: "smooth" })
  }, [])

  const handleRingClick = (ringId) => {
    if (!foundRings.includes(ringId)) {
      setFoundRings([...foundRings, ringId])
    }
  }

  const allRingsFound = foundRings.length === 5
  const isLocked = !allRingsFound

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setTriviaAnswers({ ...triviaAnswers, [questionIndex]: answerIndex.toString() })
  }

  const checkTrivia = () => {
    setShowResults(true)
  }

  let questionCounter = 0

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 w-full space-y-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Aros Olímpicos dispersados */}
      {rings.map((ring) => (
        <OlympicRing
          key={ring.id}
          color={ring.color}
          position={ring.position}
          onClick={() => handleRingClick(ring.id)}
          found={foundRings.includes(ring.id)}
        />
      ))}

      {!allRingsFound && (
        <div className="fixed top-6 right-6 z-50 bg-white rounded-2xl shadow-2xl p-5 border-2 border-blue-500 backdrop-blur-sm bg-opacity-95 transform transition-all hover:scale-105">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔍</span>
            <p className="font-bold text-base text-gray-800">Busca los 5 aros</p>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-3">
            Encontrados: <span className="text-blue-600 font-bold">{foundRings.length}/5</span>
          </p>
          <div className="flex gap-2">
            {rings.map((ring) => (
              <div
                key={ring.id}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  foundRings.includes(ring.id) ? 'scale-110 shadow-lg' : 'opacity-50'
                }`}
                style={{
                  backgroundColor: foundRings.includes(ring.id) ? ring.color : "transparent",
                  borderColor: ring.color
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
          <div className="md:w-1/2 z-10 space-y-6">
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
              Edición Especial
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Juegos Olímpicos
            </h1>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
              El evento deportivo internacional más importante del mundo. Cada 4 años, atletas de todo el planeta compiten en múltiples disciplinas, representando la excelencia deportiva y la unión global.
            </p>
            <div className="flex gap-3 pt-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <p className="text-white text-sm font-semibold">200+ países</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <p className="text-white text-sm font-semibold">30+ deportes</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="public\juegosOlimpicoslogo.webp" 
                alt="Juegos Olímpicos" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
              Origen e Historia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Un legado milenario</h2>
            <div className="space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <p className="font-semibold text-gray-800">776 a.C.</p>
                  <p className="text-gray-600 text-sm">Inicio de los Juegos antiguos en Olimpia, Grecia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⛔</span>
                <div>
                  <p className="font-semibold text-gray-800">393 d.C.</p>
                  <p className="text-gray-600 text-sm">Prohibidos por el emperador Teodosio I</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-gray-800">1896</p>
                  <p className="text-gray-600 text-sm">Renacimiento moderno en Atenas por Pierre de Coubertin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/public/juegosantiguos.webp" 
                alt="Juegos Olímpicos antiguos" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Sección Bloqueada */}
        {isLocked ? (
          <div className="relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md z-10 rounded-3xl flex flex-col items-center justify-center p-10 shadow-2xl border-2 border-gray-700">
              <div className="text-center space-y-6 max-w-md">
                <div className="relative">
                  <div className="text-8xl animate-pulse">🔒</div>
                  <div className="absolute inset-0 blur-2xl bg-blue-500/20 animate-pulse"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Contenido Bloqueado
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Descubre los <span className="text-yellow-400 font-bold">5 aros olímpicos</span> escondidos en esta página para desbloquear contenido exclusivo sobre evolución, ciencia, tecnología y más.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-white font-bold text-2xl">
                    {foundRings.length} <span className="text-gray-400 font-normal text-base">de</span> 5
                  </p>
                  <p className="text-gray-400 text-sm mt-1">Aros encontrados</p>
                </div>
                <div className="flex gap-2 justify-center pt-2">
                  {rings.map((ring) => (
                    <div
                      key={ring.id}
                      className={`w-6 h-6 rounded-full border-3 transition-all duration-300 ${
                        foundRings.includes(ring.id) ? 'scale-125 shadow-lg' : 'opacity-30'
                      }`}
                      style={{
                        backgroundColor: foundRings.includes(ring.id) ? ring.color : "transparent",
                        borderColor: ring.color,
                        borderWidth: '3px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contenido bloqueado (difuminado) */}
            <div className="blur-lg pointer-events-none select-none opacity-30">
              <div className="grid md:grid-cols-2 gap-8 mb-12 p-8">
                <div className="h-64 bg-gray-300 rounded-xl" />
                <div className="space-y-4">
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-3 animate-bounce">🎉</div>
              <h3 className="text-3xl font-black text-white mb-2">¡Felicitaciones!</h3>
              <p className="text-green-50 text-lg">
                Has encontrado todos los aros olímpicos. Ahora puedes acceder al contenido completo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="public/EVOLUCION.webp" 
                    alt="Evolución Olímpica" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">
                  Evolución Histórica
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Momentos inolvidables</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
                    <p className="text-gray-700 font-medium">Profesionales y amateurs compiten con delegaciones completas</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <p className="text-gray-700 font-medium">Más de 30 deportes en competencia actual</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                    <p className="text-gray-700 font-medium">Momentos históricos: Berlín 1936, Tokio 2020</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
                    <p className="text-gray-700 font-medium">Argentina: medallas en Polo, boxeo y atletismo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                  El Futuro del Deporte
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ciencia, Innovación y Tecnología</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Los avances científicos y tecnológicos transforman el rendimiento deportivo y la experiencia olímpica
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl mb-4">🔬</div>
                  <h3 className="text-2xl font-bold mb-4">Ciencia</h3>
                  <ul className="space-y-3 text-blue-50">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Optimización de entrenamiento y rendimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Prevención de lesiones y control antidopaje</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold mb-4">Innovación</h3>
                  <ul className="space-y-3 text-green-50">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Materiales de última generación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Nuevos deportes y reglas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Sostenibilidad en infraestructura</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">Tecnología</h3>
                  <ul className="space-y-3 text-purple-50">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Sensores, cámaras y simuladores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Fotofinish y VAR en competencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300 font-bold">•</span>
                      <span>Realidad aumentada para espectadores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                  Alimentación de Alto Rendimiento
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nutrición Olímpica</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🍽️</span>
                      <p className="text-gray-700 font-medium">Hasta 7.000 calorías diarias por atleta</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 shadow-md border-l-4 border-amber-500">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📱</span>
                      <p className="text-gray-700 font-medium">Apps y sensores de nutrición avanzados</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🏢</span>
                      <p className="text-gray-700 font-medium">Comedores gigantes en villas olímpicas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/public/nutricion.webp" 
                    alt="Nutrición Olímpica" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">💎</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Datos Curiosos</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">📸</div>
                  <p className="text-gray-800 font-semibold">Fotofinish: 10.000 cuadros por segundo</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">🌱</div>
                  <p className="text-gray-800 font-semibold">París 2024: Villa 100% energía renovable</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">🚴</div>
                  <p className="text-gray-800 font-semibold">Bicicletas con fibra de carbono aeroespacial</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Trivia Interactiva - Mantienen estilos originales */}
      {allRingsFound && (
        <div className="space-y-4">
          <div className="flex justify-center">
            <button
              onClick={() => setShowTrivia(!showTrivia)}
              className="text-white font-semibold px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              {showTrivia ? "Ocultar Trivia 📚" : "🎯 ¡Pon a prueba tus conocimientos! 🎯"}
            </button>
          </div>

          {showTrivia && (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-300 space-y-8">
              <h2 className="text-3xl font-bold text-center text-purple-800">Trivia Interactiva</h2>
              
              {triviaQuestions.map((block, blockIndex) => (
                <div key={blockIndex} className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-semibold text-purple-700 mb-2">Bloque {blockIndex + 1} - {block.block}</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-sm italic text-gray-700">💡 <strong>Tip:</strong> {block.tip}</p>
                    </div>
                  </div>

                  {block.questions.map((question, qIndex) => {
                    const globalIndex = questionCounter++
                    const userAnswer = triviaAnswers[globalIndex]
                    const isCorrect = userAnswer === question.correct.toString()
                    
                    return (
                      <div key={qIndex} className="bg-white rounded-lg p-6 shadow-md space-y-4">
                        <h4 className="font-semibold text-lg text-gray-800">{question.q}</h4>
                        <div className="space-y-2">
                          {question.options.map((option, optIndex) => {
                            const isSelected = userAnswer === optIndex.toString()
                            const isCorrectAnswer = optIndex === question.correct
                            
                            let bgColor = "bg-gray-50 hover:bg-gray-100"
                            if (showResults) {
                              if (isCorrectAnswer) {
                                bgColor = "bg-green-100 border-green-500"
                              } else if (isSelected && !isCorrect) {
                                bgColor = "bg-red-100 border-red-500"
                              }
                            } else if (isSelected) {
                              bgColor = "bg-blue-100 border-blue-500"
                            }
                            
                            return (
                              <button
                                key={optIndex}
                                onClick={() => !showResults && handleAnswerSelect(globalIndex, optIndex)}
                                disabled={showResults}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${
                                  showResults ? "cursor-default" : "cursor-pointer"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  {showResults && isCorrectAnswer && "✅"}
                                  {showResults && isSelected && !isCorrect && "❌"}
                                  {String.fromCharCode(97 + optIndex)}) {option}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                        {showResults && question.extra && (
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                            <p className="text-sm text-gray-700">{question.extra}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}

              {!showResults ? (
                <div className="flex justify-center">
                  <button
                    onClick={checkTrivia}
                    className="text-white font-semibold px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg text-lg"
                  >
                    Ver Resultados 📊
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Resultados</h3>
                  <p className="text-lg">
                    Has respondido correctamente{" "}
                    <span className="font-bold text-green-600">
                      {Object.keys(triviaAnswers).filter((key) => {
                        let counter = 0
                        for (const block of triviaQuestions) {
                          for (const q of block.questions) {
                            if (counter.toString() === key) {
                              return triviaAnswers[key] === q.correct.toString()
                            }
                            counter++
                          }
                        }
                        return false
                      }).length}
                    </span>{" "}
                    de <span className="font-bold">{triviaQuestions.reduce((acc, block) => acc + block.questions.length, 0)}</span> preguntas.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">¡Sigue aprendiendo sobre los Juegos Olímpicos! 🏅</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default JuegosOlimpicos
