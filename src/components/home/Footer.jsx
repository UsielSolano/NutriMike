import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#412904] text-white mt-4 rounded-2xl ">
      {/* Sección principal del footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#fecd5f]">NutriMikke</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nutrición personalizada para ayudarte a alcanzar tus metas de salud y bienestar. 
              Descubre recetas saludables y tips de nutrición en nuestro sitio.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Heart className="w-4 h-4 text-[#fecd5f]" />
              <span>Hecho con amor para tu salud</span>
            </div>
          </div>

          {/* Columna 2: Contacto rápido */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#fecd5f]">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5213121051883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#fecd5f] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+52 312 105 1883</span>
              </a>
              <a
                href="mailto:info@nutrimikke.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#fecd5f] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@nutrimikke.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Torre Médica Sendera, Piso 6 Consultorio 608
                  <br />
                  Paseo Miguel de la Madrid Hurtado 271
                  <br />
                  Real Hacienda Sendera, Colima, México
                </span>
              </div>
            </div>
          </div>

          {/* Columna 3: Redes sociales y horarios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#fecd5f]">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nutrimikee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#fecd5f] hover:text-[#412904] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100028139515526"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#fecd5f] hover:text-[#412904] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://wa.me/5213121051883"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#fecd5f] hover:text-[#412904] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={24} />
              </a>
            </div>
            
            {/* Horarios de atención */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <h5 className="font-semibold text-[#fecd5f] mb-2">Horario de atención</h5>
              <p className="text-sm text-gray-300">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
              <p className="text-sm text-gray-300">Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior con copyright */}
      <div className="bg-black/30 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} NutriMikke. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#fecd5f] transition-colors">Aviso de privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-[#fecd5f] transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
