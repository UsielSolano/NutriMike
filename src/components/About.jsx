import AboutmeImage from "../assets/Aboutme.jpg";

export default function About() {
  return (
    <section id="conoceme" className="bg-white text-white">
      <div className="w-full flex gap-0 overflow-hidden bg-[#3d2817] mx-auto px-0">
        {/* Imagen izquierda */}
        <div className="w-1/2 h-96">
          <img src={AboutmeImage} alt="About me" className="w-full h-full object-cover" />
        </div>

        {/* Texto derecha */}
        <div className="w-1/2 bg-[#3d2817] p-12 flex items-center justify-center">
          <p className="text-base w-1/2 leading-relaxed text-justify font-light text-white">
            Hola, Soy <span className="font-bold text-[#d4af37]">Nutrimikee</span> y dedico mis días a transformar la vida de las personas, por medio de hábitos de alimentación y ejercicio, ayudandote desde la empatia a comprender tu cuerpo y a ofrecerle las mejores opciones para alcanzar tus proyectos y objetivos físicos ó clinicos.
          </p>
        </div>
      </div>
    </section>
  );
}
