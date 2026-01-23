import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, AlertCircle } from 'lucide-react';

// Importar el video local
import videoTestimonios from './../../../../src/assets/testimonios.mp4';

const VideoTestimonios = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Controls timeout
  useEffect(() => {
    if (isPlaying) {
      startControlsTimeout();
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  const startControlsTimeout = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (isPlaying) {
      startControlsTimeout();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        startControlsTimeout();
      }
      setIsPlaying(!isPlaying);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setShowControls(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current && duration) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const newTime = (clickPosition / progressBarWidth) * duration;

      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    setShowControls(true);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
    setIsPlaying(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto bg-[#ffffff3c]  p-4 sm:p-6"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      
    >
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2817] mb-2">
          Testimonios de Pacientes
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Descubre las experiencias reales de quienes han transformado su salud
        </p>
      </div>

      {/* Contenedor del video */}
      <div className="relative bg-gradient-to-br from-yellow-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-yellow-100">

        {/* Video */}
        <div className="relative aspect-video bg-[#3d2817]">
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#3d2817]">
              <div className="w-12 h-12 border-4 border-yellow-100 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-yellow-100 text-sm">Cargando video...</p>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#3d2817] p-4">
              <AlertCircle className="w-16 h-16 text-yellow-100 mb-4" />
              <h3 className="text-yellow-100 text-lg font-bold mb-2">Error al cargar el video</h3>
              <p className="text-yellow-100/80 text-center text-sm mb-4">
                No se pudo cargar el video de testimonios.
                <br />
                Asegúrate que el archivo esté en:
                <br />
                <code className="bg-yellow-100/20 px-2 py-1 rounded text-xs mt-1 inline-block">
                  src/assets/testimonios.mp4
                </code>
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-yellow-100 text-[#3d2817] rounded-lg font-medium hover:bg-yellow-200 transition-colors"
              >
                Recargar página
              </button>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              onEnded={() => setIsPlaying(false)}
              preload="metadata"
            >
              <source src={videoTestimonios} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          )}

          {/* Overlay de controles */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#3d2817]/80 via-transparent to-[#3d2817]/60 transition-opacity duration-300 ${showControls && !hasError ? 'opacity-100' : 'opacity-0'
              }`}
          />

          {/* Controles del video */}
          {!hasError && (
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-transform duration-300 ${showControls ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
              {/* Barra de progreso */}
              <div
                className="h-1.5 sm:h-2 bg-yellow-100/30 rounded-full mb-4 sm:mb-6 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-yellow-100 rounded-full transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                />
              </div>

              {/* Controles inferiores */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors border-2 border-yellow-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-[#3d2817]" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#3d2817] ml-1" />
                    )}
                  </button>

                  {/* Volumen */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleMute}
                      className="text-yellow-100 hover:text-yellow-200 transition-colors"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-16 sm:w-24 accent-yellow-100"
                    />
                  </div>

                  {/* Tiempo */}
                  <div className="text-yellow-100 text-xs sm:text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                {/* Pantalla completa */}
                <button
                  onClick={toggleFullscreen}
                  className="text-yellow-100 hover:text-yellow-200 transition-colors"
                >
                  {isFullscreen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Título del video */}
          {!hasError && (
            <div className="absolute top-4 left-4 right-4">
              <div className="inline-block bg-[#3d2817]/10 px-4 py-2 rounded-lg border border-yellow-100/30">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  Testimonio de Transformación
                </h3>
                <p className="text-yellow-100/80 text-xs sm:text-sm mt-1">
                  Experiencia real de pacientes que mejoraron su salud
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Información del video */}
        <div className="p-4 sm:p-6 bg-[#3d2817] bg-gradient-to-r from-[#3d2817] to-[#433225] backdrop-blur-sm border-t border-yellow-100/50">
          <div className="text-center">
            <h3 className="font-bold text-lg sm:text-xl text-[#ffffff] mb-2">
              Historia Real
            </h3>
            <p className="text-[#d5d5d5] text-sm sm:text-base mb-4">
              Este testimonio muestra el proceso de transformación de uno de nuestros pacientes
              que logró mejorar su calidad de vida a través de nuestro programa nutricional.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-[#ffffff]">
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Salud mejorada</span>
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Pérdida de peso</span>
              <span className="bg-yellow-100/50 px-3 py-1 rounded-full">Hábitos saludables</span>
            </div>
          </div>
        </div>
      </div>
          
      {/* Estilos para el range input */}
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          height: 4px;
          background: rgba(254, 243, 199, 0.3);
          border-radius: 2px;
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FEF3C7;
          cursor: pointer;
          border: 2px solid #3d2817;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FEF3C7;
          cursor: pointer;
          border: 2px solid #3d2817;
        }
        
        input[type="range"]:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        input[type="range"]:disabled::-webkit-slider-thumb {
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default VideoTestimonios;
