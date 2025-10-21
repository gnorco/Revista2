import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const tecnicas = [
  { nombre: "Cocina a bajas temperaturas", descripcion: "Cocinar lentamente para preservar sabor, textura y nutrientes." },
  { nombre: "Técnicas de construcción", descripcion: "Descomponer y reorganizar platos para nuevas presentaciones." },
  { nombre: "Esferificación", descripcion: "Crear esferas líquidas comestibles con gelificación." },
  { nombre: "Cocina molecular", descripcion: "Uso de ciencia y química para transformar alimentos." },
  { nombre: "Fermentación avanzada", descripcion: "Fermentación controlada para sabores complejos y únicos." },
  { nombre: "Impresión 3D", descripcion: "Imprimir alimentos capa por capa, logrando formas y texturas imposibles." }
];

const chefs = [
  { nombre: "Fernando Rivarola", especialidad: "Cocina de territorio / producto local" },
  { nombre: "René Redzepi", especialidad: "Fermentación / foraging (recolección silvestre)" },
  { nombre: "Ferran Adrià", especialidad: "Cocina molecular / deconstrucción" },
  { nombre: "Paco Pérez", especialidad: "Impresión 3D" },
];

const curiosidades = [
  "La gastronomía evolucionó desde la recolección y caza prehistórica hasta convertirse en arte culinario.",
  "En el Siglo XX se popularizó, con escuelas de cocina y restaurantes de alta categoría.",
  "La impresión 3D de alimentos permite crear texturas imposibles de replicar manualmente.",
  "Apps de cocina y sensores permiten medir proteínas, carbohidratos y grasas en tiempo real.",
];

export default function CocinaSection() {
  const navigate = useNavigate();

  // Scroll automático al cargar la sección
  useEffect(() => {
    window.scrollTo({
      top: 400, // más abajo
      behavior: "smooth", // efecto suave
    });
  }, []);

  const handleScrollAndNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Historia y tecnología */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-700">🍳 La Ciencia e Innovación en la Cocina</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            La gastronomía ha evolucionado desde la recolección y caza prehistórica hasta convertirse en un arte culinario reconocido.  
            La tecnología se integró para mejorar técnicas y crear experiencias únicas, como la impresión 3D de alimentos y la cocina molecular.
          </p>
        </div>

        {/* Técnicas innovadoras */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-gray-700">✨ Técnicas Innovadoras</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tecnicas.map((t, i) => (
              <div 
                key={i} 
                className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer group"
              >
                <h4 className="font-bold text-gray-800">{t.nombre}</h4>
                <p className="mt-2 text-gray-600 text-sm opacity-0 group-hover:opacity-100 absolute bottom-4 left-4 right-4 transition-opacity bg-gray-50 p-2 rounded">
                  {t.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chefs destacados */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-gray-700">👨‍🍳 Chefs Innovadores</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {chefs.map((c, i) => (
              <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition transform">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-gray-700">
                  {c.nombre.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="mt-3 font-semibold text-gray-800">{c.nombre}</h4>
                <p className="text-gray-600 text-center">{c.especialidad}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curiosidades / aplicaciones */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-gray-700">💡 Curiosidades y Aplicaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curiosidades.map((c, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
                <p className="text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre */}
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-semibold">
            La cocina no solo es sabor, sino también ciencia, tecnología e innovación. Cada técnica y cada chef muestran cómo los alimentos pueden convertirse en experiencias únicas.
          </p>
        </div>

        {/* Botón de volver al home con scroll suave */}
        <div className="mt-10">
          <button
            onClick={() => handleScrollAndNavigate("/")}
            className="text-white font-semibold px-6 py-3 rounded-lg bg-[#7b91fe] hover:bg-[#6b81ee] transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  );
}
