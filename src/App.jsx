import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Components/Header";
import HeroArticle from "./Components/Hero-article";
import ArticleGrid from "./Components/Article-grid";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";


// Páginas
import JuegosOlimpicos from "./pages/JuegosOlimpicos";
import Cocina from "./pages/Cocina";
import Videojuegos from "./pages/Videojuegos";
import SobreLaRevista from "./pages/SobreLaRevista";
import Galeria from "./pages/Galeria";
import Entrevista from "./pages/Entrevista";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />

      {/* Hero solo en el home */}
      <AnimatePresence mode="wait">
        {isHome && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <HeroArticle />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        {isHome ? (
          // 🏠 HOME: contenido + sidebar animado
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Routes>
                <Route path="/" element={<ArticleGrid />} />
              </Routes>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key="sidebar"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-1"
              >
                <Sidebar />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          // 📄 OTRAS PÁGINAS: contenido centrado con fade-in
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center flex-col text-center min-h-[80vh]"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/sobre-la-revista" element={<SobreLaRevista />} />
                <Route path="/juegos-olimpicos" element={<JuegosOlimpicos />} />
                <Route path="/cocina" element={<Cocina />} />
                <Route path="/videojuegos" element={<Videojuegos />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/entrevistas" element={<Entrevista/>}/>
              </Routes>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
