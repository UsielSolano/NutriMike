import headerImage from "../assets/header1.jpg"; // Importamos la imagen

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Imagen de fondo */}
      <img
        src={headerImage}
        alt="Header"
        className="w-full h-full object-cover"
      />

      {/* Overlay dorado con texto */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          Bienvenido a Página
        </h2>
        <p className="mt-4 text-lg md:text-xl text-yellow-100 max-w-2xl">
          Tu espacio para conectar con un estilo de vida nuevo y con salud.
        </p>
        <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition">
          Conócenos
        </button>
      </div>
    </section>
  );
}
