import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          Miguel Luna<span className="text-yellow-200">(NutriMike)</span>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-yellow-400 font-medium">
          <a href="/" className="hover:text-yellow-200 transition">Inicio</a>
          <a href="/about" className="hover:text-yellow-200 transition">Nosotros</a>
          <a href="/services" className="hover:text-yellow-200 transition">Servicios</a>
          <a href="/contact" className="hover:text-yellow-200 transition">Contacto</a>
        </nav>



        {/* Mobile menu button */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black border-t border-yellow-700 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-yellow-400 font-medium">
            <li><a href="/" className="hover:text-yellow-200 transition">Inicio</a></li>
            <li><a href="/about" className="hover:text-yellow-200 transition">Nosotros</a></li>
            <li><a href="/services" className="hover:text-yellow-200 transition">Servicios</a></li>
            <li><a href="/contact" className="hover:text-yellow-200 transition">Contacto</a></li>

          </ul>
        </nav>
      )}
    </header>
  );
}
