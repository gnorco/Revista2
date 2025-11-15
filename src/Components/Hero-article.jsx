import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroArticle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/public/imgHeroArticle.jpg"
          alt="Artículo principal"
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(21, 39, 75, 0.9) 0%, rgba(65, 89, 159, 0.7) 50%, rgba(123, 145, 254, 0.5) 100%)`,
          }}
        />
        {/* Animated overlay dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full h-full px-6 md:px-12 lg:px-20">
        <div className={`max-w-4xl px-4 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm tracking-wide">✨ Edición 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Revista <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">ProA</span> 2025
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl font-light">
            Explorá, leé y disfrutá del contenido que preparamos especialmente para tu visita.
            Esto no es solo una revista, es un espacio para soñar, experimentar y compartir. <br className="hidden md:block" />
            <span className="text-blue-200 font-medium">Aquí los jóvenes dan vida a sus descubrimientos y contagian su pasión por la ciencia y la tecnología.</span>
          </p>

          {/* Stats or features */}
          <div className="mt-10 flex flex-wrap gap-6 justify-start md:justify-start px-2">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Innovación</p>
                <p className="text-gray-200 text-sm">Estudiantil</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Proyectos</p>
                <p className="text-gray-200 text-sm">Creativos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Ciencia</p>
                <p className="text-gray-200 text-sm">y Tecnología</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-4 px-2">
            <Link
              to="/sobre-la-revista"
              className="group relative inline-flex items-center justify-center text-white font-semibold px-10 py-4 rounded-xl bg-gradient-to-r from-[#7b91fe] to-[#6b81ee] hover:from-[#6b81ee] hover:to-[#5a70dd] transition-all duration-300 text-center shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Leer Artículo
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
}
