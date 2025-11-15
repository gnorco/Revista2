import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleGoToGaleria = () => {
    navigate("/galeria");
  };

  return (
    <aside className="space-y-6">
      {/* Caja de Galería mejorada */}
      <div
        onClick={handleGoToGaleria}
        className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#7b91fe] hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7b91fe] to-[#41599f] flex items-center justify-center shadow-md">
            <span className="text-2xl">📸</span>
          </div>
          <h3 className="text-2xl font-bold" style={{ color: "#15274b" }}>
            Galería
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
            <img
              src="/img1.jpg"
              alt="Recuerdo 1"
              className="h-28 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
            <img
              src="/img2.jpg"
              alt="Recuerdo 2"
              className="h-28 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
            <img
              src="/img3.jpg"
              alt="Recuerdo 3"
              className="h-28 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
            <img
              src="/img4.jpg"
              alt="Recuerdo 4"
              className="h-28 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm font-medium">
            Ver más momentos
          </p>
          <svg 
            className="w-5 h-5 text-[#7b91fe] group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Espacio Publicitario mejorado */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
        <img 
          src="/EspacioPublicitario.jpg" 
          alt="Espacio Publicitario" 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
            Publicidad
          </span>
        </div>
      </div>
    </aside>
  );
}
