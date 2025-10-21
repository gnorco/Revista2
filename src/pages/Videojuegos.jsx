import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // <- Importamos useNavigate

const data = {
  intro: {
    title: "🎮 Videojuegos: Más que entretenimiento",
    text: "Los videojuegos son un lenguaje único: transmiten emociones, cuentan historias y nos ponen en el centro de la acción. No solo vemos, vivimos. Desde Argentina hasta el mundo, su impacto crece cada día.",
  },
  historia: [
    {
      title: "📜 Historia del Gaming",
      text: "Desde los primeros arcades hasta el cloud gaming, los videojuegos han evolucionado constantemente. Doom revolucionó la acción rápida y los juegos retro vuelven gracias a la nostalgia.",
      img: "https://via.placeholder.com/400x200?text=Historia+Gaming"
    },
    {
      title: "🇦🇷 Argentina Gamer",
      text: "La escena gamer en Argentina crece cada año con eventos como EVA 2025. Los desarrolladores locales destacan en programación, diseño y narrativa, dejando huella internacional.",
      img: "https://via.placeholder.com/400x200?text=Argentina+Gamer"
    }
  ],
  novedades: [
    "PlayStation 6 genera expectativa.",
    "Nuevas consolas cambian la forma de jugar.",
    "La IA promete revolucionar la industria.",
    "Cloud Gaming: jugar sin límites desde cualquier dispositivo.",
    "Joyas ocultas: juegos que todos deberían probar."
  ],
  masAllá: [
    "Educación: videojuegos que enseñan idiomas, matemáticas y estrategia.",
    "Salud Mental: terapia y relajación a través de experiencias interactivas.",
    "Arte y Cultura: narrativa, música y diseño en cada proyecto.",
  ],
  entrevistas: [
    {
      title: "👨‍💻 Entrevista a Programador",
      questions: [
        "¿Qué te gusta más de programar videojuegos?",
        "¿Qué motores usás para desarrollar (Unity, Unreal, Godot)?",
        "¿Preferís trabajar solo o en equipo?",
        "¿Probaste hacer juegos con IA o mecánicas innovadoras?",
        "Consejos para quien quiera crear su primer juego."
      ]
    },
    {
      title: "🕹️ Experiencia Gamer",
      questions: [
        "¿Qué juegos te marcaron?",
        "¿Creés que los videojuegos son arte?",
        "¿Cómo ha cambiado tu forma de jugar?",
        "¿Qué opinás de la gamificación en educación o trabajo?"
      ]
    }
  ]
};

const SeccionVideojuegos = () => {
  const navigate = useNavigate(); // <- Inicializamos navigate

  useEffect(() => {
    // Scroll suave al cargar la sección
    window.scrollTo({
      top: 400, // Ajusta la altura deseada
      behavior: "smooth",
    });
  }, []);

  const handleScrollAndNavigate = (path) => {
    navigate(path); // Navegamos al Home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll suave al inicio
    }, 100);
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-gray-50">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{data.intro.title}</h1>
        <p className="text-gray-800 max-w-3xl mx-auto">{data.intro.text}</p>
      </motion.div>

      {/* Historia y Argentina Gamer */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {data.historia.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-400 to-indigo-200"
          >
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-800">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Novedades */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">💡 Novedades</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {data.novedades.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Más allá del entretenimiento */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 p-6 bg-yellow-100 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">🌟 Más allá del entretenimiento</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {data.masAllá.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Entrevistas */}
      <div className="grid md:grid-cols-2 gap-8">
        {data.entrevistas.map((block, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-pink-400 to-pink-200"
          >
            <h2 className="text-2xl font-bold mb-4">{block.title}</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              {block.questions.map((q, qidx) => (
                <li key={qidx}>{q}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Botón de volver al home */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => handleScrollAndNavigate("/")}
          className="text-white font-semibold px-6 py-3 rounded-lg bg-[#7b91fe] hover:bg-[#6b81ee] transition-colors"
        >
          Volver
        </button>
      </div>
    </section>
  );
};

export default SeccionVideojuegos;
