import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: "#15274b" }}>
              Revista Proa 2025
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/juegos-olimpicos"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Juegos Olímpicos
            </Link>
            <Link
              to="/cocina"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Cocina
            </Link>
            <Link
              to="/videojuegos"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Videojuegos
            </Link>

            {/* Botón Entrevistas deshabilitado */}
            <div className="relative flex flex-col items-center cursor-not-allowed group">
              <button
                disabled
                className="text-gray-400 font-medium cursor-not-allowed bg-transparent border-none outline-none focus:outline-none focus:ring-0"
              >
                Entrevistas
              </button>
              <span className="absolute -bottom-8 text-xs text-gray-700 bg-white px-2 py-1 rounded-md shadow-md opacity-0 transform translate-y-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-50">
                Próximamente
              </span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/juegos-olimpicos"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Juegos Olímpicos
              </Link>
              <Link
                to="/cocina"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Cocina
              </Link>
              <Link
                to="/videojuegos"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Videojuegos
              </Link>

              {/* Mobile: Botón Entrevistas */}
              <div className="relative flex flex-col items-center cursor-not-allowed group">
                <button
                  disabled
                  className="text-gray-400 font-medium cursor-not-allowed bg-transparent border-none outline-none focus:outline-none focus:ring-0"
                >
                  Entrevistas
                </button>
                <span className="absolute -bottom-8 text-xs text-gray-700 bg-white px-2 py-1 rounded-md shadow-md opacity-0 transform translate-y-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-50">
                  Próximamente
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
