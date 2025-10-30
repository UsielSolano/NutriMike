import headerImage from "../assets/header1.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen mt-20" id="home">
      <img src={headerImage} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#ffd700] italic drop-shadow-lg" style={{ textShadow: "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)" }}>
            "Only Healthy Vibes"
          </h1>
        </div>
      </div>
    </section>
  );
}
