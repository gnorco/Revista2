import { Link } from "react-router-dom";

export default function HeroArticle() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/public/imgHeroArticle.jpg"
          alt="Artículo principal"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(21, 39, 75, 0.8) 0%, rgba(65, 89, 159, 0.6) 50%, rgba(123, 145, 254, 0.4) 100%)`,
          }}
        />
      </div>

      <div className="relative w-full h-full flex items-center px-4 md:px-8">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revista ProA 2025
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Explorá, leé y disfrutá del contenido que preparamos especialmente para tu visita.
            Esto no es solo una revista, es un espacio para soñar, experimentar y compartir. <br />
            Aquí los jóvenes dan vida a sus descubrimientos y contagian su pasión por la ciencia y la tecnología.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/sobre-la-revista"
              className="text-white font-semibold px-6 py-3 rounded-lg bg-[#7b91fe] hover:bg-[#6b81ee] transition-colors text-center"
            >
              Leer Artículo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
