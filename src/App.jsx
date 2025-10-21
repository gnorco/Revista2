import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HeroArticle from "./Components/Hero-article";
import ArticleGrid from "./Components/Article-grid";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";

// Páginas para las categorías
import JuegosOlimpicos from "./pages/JuegosOlimpicos";
import Cocina from "./pages/Cocina";
import Videojuegos from "./pages/Videojuegos";
import SobreLaRevista from "./pages/SobreLaRevista"; 
import Galeria from "./pages/Galeria";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Header />

        {/* Hero Article arriba */}
        <HeroArticle />

        {/* Contenedor principal: contenido + sidebar */}
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contenido principal que cambia según la ruta */}
            <div className="lg:col-span-2">
              <Routes>
                {/* Página principal */}
                <Route path="/" element={<ArticleGrid />} />

                {/* Página del artículo de la revista */}
                <Route path="/sobre-la-revista" element={<SobreLaRevista />} />

                {/* Categorías */}
                <Route path="/juegos-olimpicos" element={<JuegosOlimpicos />} />
                <Route path="/cocina" element={<Cocina />} />
                <Route path="/videojuegos" element={<Videojuegos />} />

                {/* Nueva ruta: Galería */}
                <Route path="/galeria" element={<Galeria />} />
              </Routes>
            </div>

            {/* Sidebar siempre visible */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>

        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}
