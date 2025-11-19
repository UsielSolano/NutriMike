import { useState, useEffect } from 'react';

const PlatesCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPlates = 23;

  // Cambiar automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPlates);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Función para obtener el índice circular
  const getPlateIndex = (offset) => {
    let index = currentIndex + offset;
    if (index < 0) index = totalPlates + index;
    if (index >= totalPlates) index = index - totalPlates;
    return index + 1; // +1 porque tus archivos empiezan en 1.webp
  };

  // Calcular qué platillos mostrar (4 a cada lado del centro)
  const visiblePlates = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  return (
    <div className="w-full py-16 bg-[#3d2817] overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Nuestros <span className="text-[#d4af37]">Platillos</span>
      </h2>

      <div className="relative h-96 flex items-center justify-center">
        {visiblePlates.map((offset) => {
          const plateNumber = getPlateIndex(offset);
          const isCenter = offset === 0;

          // Calcular posición y escala
          const translateX = offset * 220; // Separación horizontal
          const scale = isCenter ? 1.2 : 0.7;
          const opacity = isCenter ? 1 : 0.4;
          const blur = isCenter ? 0 : 3;
          const zIndex = isCenter ? 10 : 5 - Math.abs(offset);

          return (
            <div
              key={`${offset}-${currentIndex}`}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity: opacity,
                filter: `blur(${blur}px) brightness(${isCenter ? 1 : 0.6})`,
                zIndex: zIndex,
              }}
            >
              <img
                src={`/src/assets/Plates/${plateNumber}.webp`}
                alt={`Platillo ${plateNumber}`}
                className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="256"%3E%3Crect fill="%23333" width="256" height="256"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23666" font-size="20"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                }}
              />

              {isCenter && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#d4af37] px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-[#3d2817]">
                    Platillo {plateNumber}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-16">
        {Array.from({ length: totalPlates }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-[#d4af37]'
                : 'w-2 bg-[#6b4423] hover:bg-[#8b5a2b]'
              }`}
            aria-label={`Ir al platillo ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPlates) % totalPlates)}
          className="bg-[#d4af37] hover:bg-[#c9a030] text-[#3d2817] px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
        >
          ← Anterior
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPlates)}
          className="bg-[#d4af37] hover:bg-[#c9a030] text-[#3d2817] px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default PlatesCarrousel;
