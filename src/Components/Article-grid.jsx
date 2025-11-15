import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleGrid() {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      category: "Juegos Olimpicos",
      title: "Los juegos olimpicos: Historia, Ciencia y Futuro",
      excerpt: "Un recorrido por el origen, la evolución y el presente de los Juegos Olímpicos, su relación con la ciencia y la tecnología, la participación argentina y una entrevista exclusiva a un referente del pádel.",
      image: "/banner_olimpicos.webp",
      link: "/juegos-olimpicos",
      color: "from-orange-500 to-red-500",
      icon: "🏅",
    },
    {
      id: 2,
      category: "Entrevistas",
      title: "Entrevistas",
      excerpt: "Exploramos entrevistas exclusivas con expertos, innovadores y referentes de distintos campos, donde comparten sus experiencias, conocimientos y consejos.",
      image: "/banner_entrevistas.jpg",
      link: "/Entrevista",
      color: "from-purple-500 to-pink-500",
      icon: "🎤",
    },
    {
      id: 3,
      category: "Cocina",
      title: "Innovación en la cocina",
      excerpt: "Descubrí cómo la gastronomía se transformó con la ciencia y la tecnología, desde utensilios tradicionales hasta técnicas avanzadas como cocina molecular.",
      image: "/cocina-banner.webp",
      link: "/cocina",
      color: "from-amber-500 to-orange-500",
      icon: "👨‍🍳",
    },
    {
      id: 4,
      category: "Videojuegos",
      title: "Videojuegos: Sentimientos, Cultura e Innovación",
      excerpt: "Los videojuegos no son solo entretenimiento: son un lenguaje único que combina imágenes, música e interacción para transmitir emociones y conectar personas.",
      image: "/Juegos.jpg",
      link: "/videojuegos",
      color: "from-blue-500 to-cyan-500",
      icon: "🎮",
    },
  ];

  const handleClick = (link) => {
    navigate(link);
    setTimeout(() => {
      window.scrollTo({ top: 150, behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="w-full">
      {/* Header mejorado */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7b91fe] to-[#41599f] flex items-center justify-center shadow-lg">
            <span className="text-2xl">📰</span>
          </div>
          <h2 className="text-4xl font-bold" style={{ color: "#15274b" }}>
            Artículos Destacados
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7b91fe] to-[#41599f]" />
          <p className="text-gray-600 text-sm">Explora nuestro contenido más reciente</p>
        </div>
      </div>

      {/* Grid de artículos mejorado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#7b91fe] transform hover:-translate-y-2"
            onClick={() => handleClick(article.link)}
          >
            {/* Imagen con overlay */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Icono flotante */}
              <div className="absolute top-4 right-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <span className="text-2xl">{article.icon}</span>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6">
              {/* Badge de categoría */}
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${article.color} text-white shadow-md`}
                >
                  {article.category}
                </span>
              </div>

              {/* Título */}
              <h3
                className="text-2xl font-bold mb-3 group-hover:text-[#7b91fe] transition-colors duration-300 leading-tight"
                style={{ color: "#15274b" }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              {/* Footer con CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-[#7b91fe] group-hover:text-[#41599f] transition-colors">
                  Leer más
                </span>
                <svg 
                  className="w-5 h-5 text-[#7b91fe] group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
