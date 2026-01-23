import AboutmeImage from "../../assets/Aboutme.webp";
import { useState } from "react";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="conoceme" className="bg-white text-[#2e2e2e]">
      <div className="w-full flex flex-col lg:flex-row gap-0 overflow-hidden bg-[#EACB9E] mx-auto px-0">
        {/* Imagen izquierda con lazy loading */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[500px] relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-600 animate-pulse flex items-center justify-center">
              <span className="text-white text-sm sm:text-base">Cargando...</span>
            </div>
          )}
          <img
            src={AboutmeImage}
            alt="About me"
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Texto derecha */}
        <div className="w-full lg:w-1/2 bg-[#bg-[#f5d5ae]] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex items-center justify-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg w-full lg:w-11/12 xl:w-4/5 2xl:w-3/4 leading-relaxed text-justify font-light text[-#f5d5ae]">
            Hola, Soy <span className="font-bold text-[#5d260a]">Nutrimikee</span> y dedico mis días a transformar la vida de las personas, por medio de hábitos de alimentación y ejercicio, ayudándote desde la empatía a comprender tu cuerpo y a ofrecerle las mejores opciones para alcanzar tus proyectos y objetivos físicos o clínicos.
          </p>
        </div>
      </div>
    </section>
  );
}
