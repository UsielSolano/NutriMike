import headerImage from "../assets/header1.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Imagen de fondo */}
      <img
        src={headerImage}
        alt="Header"
        className="w-full h-full object-cover"
      />

      {/* Overlay con texto */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#FECD5F] drop-shadow-lg">
          Bienvenido a MiApp
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#FFFFFF] max-w-2xl">
          Tu espacio para conectar con un estilo de vida <b>saludable</b>.
        </p>
        <button className="mt-6 bg-[#FECD5F] text-[#412904] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#B69F7C] transition">
          Conócenos
        </button>
      </div>
    </section>
  );
}



