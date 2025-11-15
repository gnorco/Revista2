import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#15274b] via-[#1e3557] to-[#41599f] text-white mt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo/Titulo */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-transparent bg-clip-text mb-2">
            Revista ProA 2025
          </h3>
          <p className="text-gray-300 text-sm max-w-md mx-auto">
            Compilando conocimiento, innovación y pasión por la ciencia y tecnología
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/promoproa26/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-pink-500 hover:border-pink-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram size={24} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-sm font-medium">Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@programacion.26?_t=ZM-8v447qgfHbq&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-blue-400 hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaTiktok size={24} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-sm font-medium">TikTok</span>
          </a>
        </div>

        {/* Divider */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 Revista ProA</span>
            <span className="hidden sm:inline">•</span>
            <span>Todos los derechos reservados</span>
            <span className="text-lg">💻</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
