import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-purple-50 border-b-2 border-blue-200 sticky top-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo con animación */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#15274b] via-[#41599f] to-[#7b91fe] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Revista ProA 2025
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation con efectos mejorados */}
          <nav className="hidden md:flex space-x-2 items-center">
            <Link
              to="/"
              className="relative px-5 py-2.5 text-gray-700 hover:text-[#15274b] font-semibold transition-all duration-300 rounded-lg hover:bg-white/60 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7b91fe] to-[#41599f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/juegos-olimpicos"
              className="relative px-5 py-2.5 text-gray-700 hover:text-[#15274b] font-semibold transition-all duration-300 rounded-lg hover:bg-white/60 group"
            >
              Juegos Olímpicos
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7b91fe] to-[#41599f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/cocina"
              className="relative px-5 py-2.5 text-gray-700 hover:text-[#15274b] font-semibold transition-all duration-300 rounded-lg hover:bg-white/60 group"
            >
              Cocina
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7b91fe] to-[#41599f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/videojuegos"
              className="relative px-5 py-2.5 text-gray-700 hover:text-[#15274b] font-semibold transition-all duration-300 rounded-lg hover:bg-white/60 group"
            >
              Videojuegos
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7b91fe] to-[#41599f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/entrevistas"
              className="relative px-5 py-2.5 text-gray-700 hover:text-[#15274b] font-semibold transition-all duration-300 rounded-lg hover:bg-white/60 group"
            >
              Entrevistas
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7b91fe] to-[#41599f] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile menu button con mejor diseño */}
          <div className="md:hidden">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-[#7b91fe] to-[#41599f] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation con animación mejorada */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t-2 border-blue-200 bg-white/50 backdrop-blur-sm rounded-b-2xl">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#7b91fe] hover:to-[#41599f] font-semibold transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/juegos-olimpicos"
                className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#7b91fe] hover:to-[#41599f] font-semibold transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Juegos Olímpicos
              </Link>
              <Link
                to="/cocina"
                className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#7b91fe] hover:to-[#41599f] font-semibold transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Cocina
              </Link>
              <Link
                to="/videojuegos"
                className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#7b91fe] hover:to-[#41599f] font-semibold transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Videojuegos
              </Link>
              <Link
                to="/entrevistas"
                className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#7b91fe] hover:to-[#41599f] font-semibold transition-all duration-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrevistas
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
