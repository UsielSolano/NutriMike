import NutriOutside from "../../assets/NutriOutside.jpg";

export default function Education() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Container Principal */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">

        {/* Left Side - Person (takes space on mobile, less on desktop) */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1 md:min-h-screen">
          {/* La imagen de fondo muestra la persona */}
        </div>

        {/* Right Side - Content Boxes */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:justify-start justify-center order-1 md:order-2 px-2 sm:px-4 md:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-8 lg:pt-12 md:pb-auto md:h-screen">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-4 lg:gap-6 w-full">
            {/* Licenciado Container */}
            <div className="bg-gradient-to-r from-[#b8956a]/60 to-[#c4a574]/60 backdrop-blur-lg rounded-2xl px-3 sm:px-4 md:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 md:py-6 lg:py-8 shadow-2xl w-full md:w-1/2 border border-white/20">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-semibold leading-relaxed tracking-wide text-center">
                Licenciado en Nutrición - Universidad de Colima (2018)
              </p>
            </div>

            {/* Técnico Container */}
            <div className="bg-gradient-to-r from-[#b8956a]/60 to-[#c4a574]/60 backdrop-blur-lg rounded-2xl px-3 sm:px-4 md:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 md:py-6 lg:py-8 shadow-2xl w-full md:w-1/2 border border-white/20">
              <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-semibold leading-relaxed tracking-wide text-center">
                Técnico Analista Clínico - Universidad de Colima (2015)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
