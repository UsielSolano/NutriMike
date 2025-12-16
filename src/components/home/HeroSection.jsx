// En HeroSection.jsx - Reemplaza con esta versión optimizada
import headerImage from "../../assets/header1.webp";
import { useState } from "react";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen mt-20" id="home">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Cargando...</div>
        </div>
      )}
      <img
        src={headerImage}
        alt="Hero"
        className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setImageLoaded(true)}
        loading="eager" // Prioridad alta para imagen hero
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col items-center justify-end pb-32 md:pb-40 px-10">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#ffd700] italic drop-shadow-lg"
            style={{ textShadow: "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)" }}>
            "Only Healthy Vibes"
          </h1>
        </div>
      </div>
    </section>
  );
}
