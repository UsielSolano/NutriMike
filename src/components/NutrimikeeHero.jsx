import Imagen from './../assets/Logohorizontal.png'
import { User, Clock, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function NutrimikeeHero() {
  const [patientCount, setPatientCount] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatientCount((prevCount) => {
        if (prevCount >= 5300) {
          return 5000; // Reinicia desde 5000
        }
        return prevCount + 1;
      });
    }, 1400); // Aumenta cada 100ms (ajusta este valor según quieras más o menos velocidad)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          filter: 'blur(3px)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo image */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <img
            src={Imagen}
            alt="Nutrimikee"
            className="h-16 sm:h-20 md:h-32 lg:h-48 xl:h-64 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(253, 224, 71, 0.6)) brightness(1.1)',
            }}
          />
        </div>

        {/* Stats cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-yellow-900/70 backdrop-blur-sm rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-2xl w-full sm:w-auto max-w-sm">
            <div className="bg-yellow-100 rounded-full p-2.5 sm:p-3 lg:p-4 flex-shrink-0">
              <User className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-900" />
            </div>
            <span className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap">
              + {patientCount.toLocaleString()} pacientes
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-yellow-900/70 backdrop-blur-sm rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-2xl w-full sm:w-auto max-w-sm">
            <div className="bg-yellow-100 rounded-full p-2.5 sm:p-3 lg:p-4 flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-900" />
            </div>
            <span className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap">
              +7 años experiencias
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-yellow-900/70 backdrop-blur-sm rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-2xl w-full sm:w-auto max-w-sm">
            <div className="bg-yellow-100 rounded-full p-2.5 sm:p-3 lg:p-4 flex-shrink-0">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-900" />
            </div>
            <div className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold">
              <div className="whitespace-nowrap">+ 6 países</div>
              <div className="text-sm sm:text-base lg:text-lg whitespace-nowrap">atendidos online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
