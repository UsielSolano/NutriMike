import NutriOutside from "../../assets/NutriOutside.jpg";

export default function Education() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${NutriOutside})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* CUADROS - ARRIBA EN MÓVIL, EN FILA EN ESCRITORIO */}
      <div className="relative z-10 pt-2 md:pt-0 md:absolute md:right-0 md:w-1/2 md:h-full md:flex md:items-center md:justify-end md:pr-8 lg:pr-12 xl:pr-20">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto px-4 md:px-0">
          
          {/* Licenciado Container */}
          <div className="bg-gradient-to-r from-[#b8956a]/60 to-[#c4a574]/60 backdrop-blur-lg rounded-2xl px-4 py-4 md:px-6 md:py-6 shadow-2xl w-full md:w-auto border border-white/20">
            <p className="text-white text-sm md:text-base font-semibold text-center">
              Licenciado en Nutrición<br />
              Universidad de Colima<br />
              <span className="text-white/90">(2018)</span>
            </p>
          </div>

          {/* Técnico Container */}
          <div className="bg-gradient-to-r from-[#b8956a]/60 to-[#c4a574]/60 backdrop-blur-lg rounded-2xl px-4 py-4 md:px-6 md:py-6 shadow-2xl w-full md:w-auto border border-white/20">
            <p className="text-white text-sm md:text-base font-semibold text-center">
              Técnico Analista Clínico<br />
              Universidad de Colima<br />
              <span className="text-white/90">(2015)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
