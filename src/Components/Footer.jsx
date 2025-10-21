import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        {/* Redes sociales */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.instagram.com/promoproa26/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://www.tiktok.com/@programacion.26?_t=ZM-8v447qgfHbq&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaTiktok size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center">
          © 2025 Revista ProA. Todos los derechos reservados. 💻 Compilando conocimiento
        </p>
      </div>
    </footer>
  );
}
