import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/1.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Contenido", href: "/contenido" },
    { name: "Consulta", href: "/consulta" },
    { name: "Contacto", href: "/contacto" },
  ];

  const whatsappLink = "https://wa.me/523121051883?text=Hola%2C%20estoy%20interesado%20en%20cambiar%20mis%20h%C3%A1bitos%20alimenticios";

  return (
    <header className="fixed top-0 w-full bg-[#3d2817] text-white shadow-lg z-50">
      <div className="max-w-full mx-auto px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain brightness-0 invert" />
        </a>

        <nav className="hidden md:flex gap-16 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#c4a96a] hover:text-white transition font-bold text-2xl"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block bg-white text-[#3d2817] px-6 py-2 rounded-full font-semibold hover:bg-[#f5f5f5] transition text-base"
          >
            Agenda tu cita
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#3d2817] px-6 py-4 space-y-4 border-t border-[#5a3f27]">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="block text-[#c4a96a] hover:text-white transition font-bold text-xl"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full bg-white text-[#3d2817] px-6 py-2 rounded-full font-semibold hover:bg-[#f5f5f5] transition text-center text-base"
          >
            Agenda tu cita
          </a>
        </nav>
      )}
    </header>
  );
}
