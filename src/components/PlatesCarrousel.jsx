// PlatesCarrousel.jsx - Versión optimizada
import { useState, useEffect, useMemo } from 'react';

const PlatesCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Importar imágenes con Vite - optimizado
  const platesModules = import.meta.glob('../assets/Plates/*.webp', {
    eager: true,
    query: {
      w: '256', // Ancho específico para reducir tamaño
      format: 'webp',
      quality: '80'
    }
  });

  // Memoizar el cálculo de imágenes
  const plates = useMemo(() =>
    Object.keys(platesModules)
      .sort((a, b) => {
        const numA = parseInt(a.match(/\/(\d+)\.webp$/)?.[1] || 0);
        const numB = parseInt(b.match(/\/(\d+)\.webp$/)?.[1] || 0);
        return numA - numB;
      })
      .map(path => platesModules[path].default),
    [platesModules]
  );

  const totalPlates = plates.length;

  // Precargar imágenes
  useEffect(() => {
    plates.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
    });
  }, [plates]);

  // Auto-avance optimizado
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPlates);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPlates]);

  const getPlateIndex = (offset) => {
    let index = currentIndex + offset;
    if (index < 0) index = totalPlates + index;
    if (index >= totalPlates) index = index - totalPlates;
    return index;
  };

  const visiblePlates = [-2, -1, 0, 1, 2]; // Reducir número de imágenes visibles

  return (
    <div className="w-full py-16 bg-[#3d2817] overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Nuestros <span className="text-[#d4af37]">Platillos</span>
      </h2>

      <div className="relative h-80 flex items-center justify-center">
        {visiblePlates.map((offset) => {
          const plateIndex = getPlateIndex(offset);
          const isCenter = offset === 0;
          const isLoaded = loadedImages.has(plateIndex);

          const translateX = offset * 180; // Reducir espacio entre imágenes
          const scale = isCenter ? 1.1 : 0.8;
          const opacity = isCenter ? 1 : 0.5;
          const blur = isCenter ? 0 : 2;
          const zIndex = isCenter ? 10 : 5 - Math.abs(offset);

          return (
            <div
              key={`${offset}-${currentIndex}`}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity: opacity,
                filter: `blur(${blur}px) brightness(${isCenter ? 1 : 0.7})`,
                zIndex: zIndex,
              }}
            >
              {!isLoaded && (
                <div className="w-48 h-48 bg-gray-600 rounded-2xl animate-pulse flex items-center justify-center">
                  <span className="text-white text-sm">Cargando...</span>
                </div>
              )}
              <img
                src={plates[plateIndex]}
                alt={`Platillo ${plateIndex + 1}`}
                className={`w-48 h-48 object-cover rounded-2xl shadow-2xl transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                loading={offset >= -1 && offset <= 1 ? "eager" : "lazy"}
              />

              {isCenter && isLoaded && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#d4af37] px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-[#3d2817]">
                    Platillo {plateIndex + 1}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Indicadores simplificados */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: Math.min(totalPlates, 8) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-6 bg-[#d4af37]'
                : 'w-2 bg-[#6b4423] hover:bg-[#8b5a2b]'
              }`}
            aria-label={`Ir al platillo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatesCarrousel;
