import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#412904] shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-[#FECD5F] tracking-wide">
          Mi<span className="text-[#B69F7C]">App</span>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-[#FECD5F] font-medium">
          <a href="/" className="hover:text-[#FFFFFF] transition">Inicio</a>
          <a href="/about" className="hover:text-[#FFFFFF] transition">Nosotros</a>
          <a href="/services" className="hover:text-[#FFFFFF] transition">Servicios</a>
          <a href="/contact" className="hover:text-[#FFFFFF] transition">Contacto</a>
        </nav>

        {/* Botón extra */}
        <button className="hidden md:block bg-[#FECD5F] text-[#412904] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#B69F7C] transition">
          Ingresar
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#FECD5F] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#412904] border-t border-[#806236] shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-[#FECD5F] font-medium">
            <li><a href="/" className="hover:text-[#FFFFFF] transition">Inicio</a></li>
            <li><a href="/about" className="hover:text-[#FFFFFF] transition">Nosotros</a></li>
            <li><a href="/services" className="hover:text-[#FFFFFF] transition">Servicios</a></li>
            <li><a href="/contact" className="hover:text-[#FFFFFF] transition">Contacto</a></li>
            <li>
              <button className="w-full bg-[#FECD5F] text-[#412904] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#B69F7C] transition">
                Ingresar
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
