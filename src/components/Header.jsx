import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/1.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Conoceme", href: "#conoceme" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Consultoría", href: "#consultoria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed w-full bg-[#412904] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Marca */}
        <h1 className=" flex items-center  text-2xl font-bold text-[#fecd5f]">
          <div className="flex items-center justify-center rounded-3xl bg-[#412904]">
            <img
              src={logo}
              alt="Logo"
              className="w-50 h-20 object-contain filter invert brightness-0"
            />
          </div>
        </h1>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#fecd5f] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón menú mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden bg-[#412904] px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#fecd5f] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
