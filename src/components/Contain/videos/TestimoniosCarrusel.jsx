import React, { useState, useEffect, useRef } from 'react';
import { Pause, Play, Maximize2, AlertCircle } from 'lucide-react';

// Importar todas las imágenes manualmente
import img1 from './../../../assets/Testimonios/1.jpg';
import img2 from './../../../assets/Testimonios/2.jpg';
import img3 from './../../../assets/Testimonios/3.jpg';
import img4 from './../../../assets/Testimonios/4.jpg';
import img5 from './../../../assets/Testimonios/5.jpg';
import img6 from './../../../assets/Testimonios/6.jpg';
import img7 from './../../../assets/Testimonios/7.jpg';
import img8 from './../../../assets/Testimonios/8.jpg';
import img9 from './../../../assets/Testimonios/9.jpg';
import img10 from './../../../assets/Testimonios/10.jpg';
import img11 from './../../../assets/Testimonios/11.jpg';
import img12 from './../../../assets/Testimonios/12.jpg';
import img13 from './../../../assets/Testimonios/13.jpg';
import img14 from './../../../assets/Testimonios/14.jpg';
import img15 from './../../../assets/Testimonios/15.jpg';
import img16 from './../../../assets/Testimonios/16.jpg';

const TestimoniosCarrusel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 0.5; // Velocidad del scroll (píxeles por frame)

  const totalImages = 16;
  const imagesPerRow = 4;
  
  // Duplicar imágenes para efecto de scroll infinito
  const testimonialImages = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ];
  
  // Crear un array con las imágenes duplicadas para scroll infinito
  const infiniteImages = [...testimonialImages, ...testimonialImages];

  // Precargar imágenes
  useEffect(() => {
    let mounted = true;
    let loadedImages = 0;

    const loadImage = (src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (mounted) {
          loadedImages++;
          setLoadedCount(loadedImages);
          console.log(`Imagen ${index + 1} cargada correctamente`);
        }
      };
      img.onerror = () => {
        if (mounted) {
          console.error(`Error cargando imagen ${index + 1}`);
          setHasError(true);
        }
      };
    };

    // Verificar que todas las imágenes existen
    const validImages = testimonialImages.every(img => img);
    if (!validImages) {
      console.error('Algunas imágenes no se importaron correctamente');
      setHasError(true);
      setIsLoading(false);
      return;
    }

    testimonialImages.forEach((src, index) => {
      if (src) {
        loadImage(src, index);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  // Verificar si todas las imágenes están cargadas
  useEffect(() => {
    if (loadedCount === totalImages) {
      setIsLoading(false);
      console.log('Todas las imágenes cargadas');
    }
  }, [loadedCount]);

  // Animación de scroll infinito
  useEffect(() => {
    if (isPlaying && !isLoading && scrollRef.current) {
      const scroll = () => {
        if (scrollRef.current) {
          // Incrementar scroll
          scrollRef.current.scrollTop += speed;
          
          // Reset cuando llegamos al final para efecto infinito
          if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight / 2) {
            scrollRef.current.scrollTop = 0;
          }
        }
        animationRef.current = requestAnimationFrame(scroll);
      };
      
      animationRef.current = requestAnimationFrame(scroll);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, isLoading]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Verificar si hay error en todas las imágenes
  if (hasError && loadedCount === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-[#ffffff3c] p-4 sm:p-6">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2817] mb-2">
            Testimonios de Pacientes
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Descubre las experiencias reales de quienes han transformado su salud
          </p>
        </div>
        
        <div className="relative bg-gradient-to-br from-yellow-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-yellow-100">
          <div className="relative aspect-video bg-[#3d2817] flex flex-col items-center justify-center p-4">
            <AlertCircle className="w-16 h-16 text-yellow-100 mb-4" />
            <h3 className="text-yellow-100 text-lg font-bold mb-2">Error al cargar las imágenes</h3>
            <p className="text-yellow-100/80 text-center text-sm mb-4">
              No se pudieron cargar las imágenes de testimonios.
              <br />
              Asegúrate que las imágenes estén en:
              <br />
              <code className="bg-yellow-100/20 px-2 py-1 rounded text-xs mt-1 inline-block">
                src/assets/Testimonios/1.jpg al 16.jpg
              </code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#ffffff3c] p-4 sm:p-6">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2817] mb-2">
          Testimonios de Pacientes
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Descubre las experiencias reales de quienes han transformado su salud
        </p>
      </div>

      {/* Contenedor del carrusel */}
      <div className="relative bg-gradient-to-br from-yellow-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-yellow-100">
        
        {/* Carrusel de imágenes con scroll infinito */}
        <div className="relative aspect-video bg-[#3d2817] overflow-hidden">
          
          {/* Indicador de carga */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#3d2817] z-20">
              <div className="w-12 h-12 border-4 border-yellow-100 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-yellow-100 text-sm">Cargando imágenes...</p>
              <p className="text-yellow-100/70 text-xs mt-2">
                {loadedCount} de {totalImages} imágenes
              </p>
            </div>
          )}

          {/* Contenedor con scroll */}
          <div
            ref={scrollRef}
            className="absolute inset-0 overflow-y-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {/* Grid de imágenes */}
            <div className="grid grid-cols-2 gap-1 p-1">
              {infiniteImages.map((img, index) => {
                const originalIndex = (index % totalImages) + 1;
                return (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg group"
                  >
                    <img
                      src={img}
                      alt={`Testimonio ${originalIndex}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay con número de testimonio (aparece al hover) */}
                    <div className="absolute inset-0 bg-[#3d2817]/0 group-hover:bg-[#3d2817]/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controles superiores */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-[#3d2817]/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#3d2817] transition-colors border-2 border-yellow-100/50 text-yellow-100"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-[#3d2817]/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#3d2817] transition-colors border-2 border-yellow-100/50 text-yellow-100"
              aria-label="Pantalla completa"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Información del testimonio */}
        <div className="p-4 sm:p-6 bg-[#3d2817] bg-gradient-to-r from-[#3d2817] to-[#433225] backdrop-blur-sm border-t border-yellow-100/50">
          <div className="text-center">
            <h3 className="font-bold text-lg sm:text-xl text-[#ffffff] mb-2">
              Transformaciones Reales
            </h3>
            <p className="text-[#d5d5d5] text-sm sm:text-base mb-4">
              Cada imagen representa una historia real de transformación. Nuestros pacientes
              han logrado mejorar su calidad de vida a través de nuestro programa nutricional personalizado.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-[#ffffff]">
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Salud mejorada</span>
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Pérdida de peso</span>
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Hábitos saludables</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniosCarrusel;
