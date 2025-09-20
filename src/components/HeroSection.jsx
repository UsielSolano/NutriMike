import headerImage from "../assets/header1.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh]" id="home">
      <img
        src={headerImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#FECD5F]">
          Nutrimikee
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-white italic">
          Only healthy vibes
        </p>
      </div>
    </section>
  );
}
