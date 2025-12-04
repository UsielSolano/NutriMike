import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Specialties from "./components/Specialtie";
import Consulting from "./components/Consulting";
import Contact from "./components/Contact";
import About from "./components/About";
import PlatesCarrousel from "./components/PlatesCarrousel";
import NutrimikeeHero from "./components/NutrimikeeHero";
import Education from "./components/Education";


function App() {
  return (
    <div className="font-sans bg-[#ffffff]">

      <Header />

      <HeroSection />

      <About />

      <PlatesCarrousel />

      <NutrimikeeHero />

      <Specialties />

      <Education />

      <Contact />
    </div>
  );
}

export default App;
