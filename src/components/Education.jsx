import NutriOutside from "../assets/NutriOutside.jpg";

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

        {/* Right Side - Content Box */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end order-1 md:order-2 px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-0">
          <div className="bg-gradient-to-r from-[#b8956a] to-[#c4a574] backdrop-blur-md rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
            <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-relaxed tracking-wide">
                Licenciado en Nutrición - Universidad de Colima (2018)
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-relaxed tracking-wide">
                Técnico Analista Clínico - Universidad de Colima (2015)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
