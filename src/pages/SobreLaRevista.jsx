"use client"

// src/pages/SobreLaRevista.jsx
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function SobreLaRevista() {
  useEffect(() => {
    // Scroll suave al montar el componente
    window.scrollTo({ top: 400, behavior: "smooth" })
  }, [])

  return (
    <div className="w-full mx-auto px-6 md:px-10 py-12">
      {/* Título */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Revista Proa: Ciencia, Innovación y Tecnología
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-700 mb-8 text-center">
        Descubrí cómo la ciencia y la tecnología transforman nuestra vida cotidiana, la educación y la cultura.
      </p>

      {/* Sección de contenido */}
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          La <strong>Revista Proa</strong> es un medio digital y educativo que acerca a su audiencia a los últimos
          avances en ciencia, innovación y tecnología. Su objetivo es inspirar curiosidad, pensamiento crítico y
          participación activa en temas científicos.
        </p>

        <p>
          La revista ofrece <strong>artículos, entrevistas, reportajes y guías prácticas</strong> sobre innovación
          tecnológica, ciencia aplicada, educación y cultura, así como sostenibilidad y proyectos de futuro.
        </p>

        <p>
          Además, integra <strong>elementos interactivos y multimedia</strong> como videos, gráficos animados y
          encuestas para que la experiencia del lector sea más inmersiva y educativa.
        </p>

        <p>
          Su misión es <strong>difundir información clara, confiable y actualizada</strong>, fomentando el interés por
          la ciencia y la tecnología en jóvenes, estudiantes, educadores y entusiastas.
        </p>

        <p>
          La visión de la revista es convertirse en un <strong>referente educativo y cultural</strong>, inspirando a
          futuras generaciones a involucrarse en proyectos científicos y tecnológicos.
        </p>
      </section>

      {/* Espacio para imágenes con hover animado */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow-md transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer">
          Imagen 1
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow-md transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer">
          Imagen 2
        </div>
      </div>

      {/* Botón para volver al Home */}
      <div className="flex justify-center mt-10">
        <Link
          to="/"
          className="text-white font-semibold px-6 py-3 rounded-lg bg-[#7b91fe] hover:bg-[#6b81ee] transition-colors"
        >
          Volver
        </Link>
      </div>
    </div>
  )
}
