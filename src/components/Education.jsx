import NutriOutside from "../assets/NutriOutside.jpg";

export default function Education() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-end overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${NutriOutside})`,
          backgroundPosition: 'center center',
        }}
      />
      
      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content Box */}
      <div className="relative z-10 mr-8 sm:mr-12 md:mr-16 lg:mr-24 xl:mr-32 my-12">
        <div className="bg-[#c4a574]/90 backdrop-blur-sm rounded-full px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 shadow-2xl max-w-2xl">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Licenciado en Nutrición - Universidad de Colima (2018)
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Técnico Analista Clínico - Universidad de Colima (2015)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
