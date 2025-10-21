import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JuegosOlimpicos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll suave al entrar en la sección
    window.scrollTo({
      top: 400, // ajusta la cantidad de pixeles que quieres bajar
      behavior: "smooth",
    });
  }, []);

  const handleScrollAndNavigate = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="p-6 md:p-10 max-w-7xl mx-auto space-y-12">
      {/* Hero / Introducción */}
      <div className="relative bg-blue-100 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">🏅 Juegos Olímpicos</h1>
          <p className="text-gray-700 mb-4">
            El evento deportivo internacional más importante. Cada 4 años, atletas de todo el mundo compiten en múltiples disciplinas.
          </p>
        </div>
        <div className="md:w-1/2 h-64 bg-gray-300 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Imagen Hero</span>
        </div>
      </div>

      {/* Historia */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Historia</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>776 a.C.: Juegos antiguos en Olimpia, Grecia.</li>
            <li>Prohibidos en 393 d.C. por Teodosio I.</li>
            <li>Renacimiento en 1896 gracias a Pierre de Coubertin.</li>
            <li>Primera edición moderna: Atenas, 1896.</li>
          </ul>
        </div>
        <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Imagen Historia</span>
        </div>
      </div>

      {/* Evolución y Momentos */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Imagen Evolución</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Evolución y Momentos</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hoy participan profesionales y amateurs con delegaciones completas.</li>
            <li>Más de 30 deportes actuales.</li>
            <li>Momentos históricos: Berlín 1936, Tokio 2020, suspendidos por guerras.</li>
            <li>Argentina: Oro en Polo, medallas de boxeo y atletismo.</li>
          </ul>
        </div>
      </div>

      {/* Ciencia, Innovación y Tecnología */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Ciencia, Innovación y Tecnología</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-xl space-y-2">
            <h3 className="font-semibold">Ciencia</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Optimización de entrenamiento y rendimiento.</li>
              <li>Prevención de lesiones y control antidopaje.</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl space-y-2">
            <h3 className="font-semibold">Innovación</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Materiales de última generación.</li>
              <li>Nuevos deportes y reglas.</li>
              <li>Sostenibilidad en infraestructura.</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl space-y-2">
            <h3 className="font-semibold">Tecnología</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Entrenamiento: sensores, cámaras, simuladores.</li>
              <li>Competencia: fotofinish, VAR, análisis de video.</li>
              <li>Experiencia del espectador: realidad aumentada, apps.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nutrición Olímpica */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nutrición Olímpica</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hasta 7.000 calorías/día por atleta.</li>
            <li>Apps y sensores de nutrición.</li>
            <li>Comedores gigantes en villas olímpicas.</li>
          </ul>
        </div>
        <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Imagen Nutrición</span>
        </div>
      </div>

      {/* Datos Curiosos */}
      <div className="p-6 bg-yellow-50 rounded-xl space-y-2">
        <h2 className="text-2xl font-semibold">Datos Curiosos</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Fotofinish: 10.000 cuadros/segundo.</li>
          <li>París 2024: Villa Olímpica con energía 100% renovable.</li>
          <li>Bicicletas de pista con fibra de carbono aeroespacial.</li>
        </ul>
      </div>

      {/* Entrevista */}
      <div className="p-6 bg-gray-50 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Entrevista a Marcos</h2>
        <p className="text-gray-700 text-sm">
          Marcos comparte su experiencia en el pádel, la tecnología en el deporte y la importancia del espíritu olímpico.
        </p>
        <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Proximamente</span>
        </div>
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

export default JuegosOlimpicos;
