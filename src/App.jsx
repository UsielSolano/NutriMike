import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/home/Header";
import HeroSection from "./components/home/HeroSection";
import Contact from "./components/home/Contact";
import About from "./components/home/About";
import PlatesCarrousel from "./components/home/PlatesCarrousel";
import NutrimikeeHero from "./components/home/NutrimikeeHero";
import Education from "./components/home/Education";

// Importa las páginas desde sus carpetas
import Contenido from "./components/Contain/Contenido";
import Consulta from "./components/Consult/Consulta";
import ComidasRecetas from "./components/Contact/ComidasRecetas";

// Componente Home que contiene toda tu página principal
function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <PlatesCarrousel />
      <NutrimikeeHero />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans bg-[#ffffff]">
        {/* Header permanece visible en todas las páginas */}
        <Header />

        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Página de contenido */}
          <Route path="/contenido" element={<Contenido />} />

          {/* Página de consulta */}
          <Route path="/consulta" element={<Consulta />} />

          {/* Página de contacto */}
          <Route path="/ComidasRecetas" element={<ComidasRecetas />} />

          {/* Página 404 - No encontrada */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
                <a
                  href="/"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Volver al inicio
                </a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
