import React from "react";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Contact() {
  return (    <section id="contacto" className="py-16 bg-[#412904] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto & Ubicación</h2>
        <p className="mb-6">
          TORRE MEDICA SENDERA, PISO 6 CONSULTORIO 608 "ACCESO POR ELEVADOR"
          <br />
          Paseo Miguel de la Madrid Hurtado 271, Real Hacienda Sendera,
          Colima, México
        </p>

        {/* Mapa embebido corregido */}
        <div className="mb-8">
          <iframe
            title="Ubicación Nutrimikee"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.4592960493632!2d-103.71702945517266!3d19.275590651664896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ada7cd0132b%3A0xfddd1d938535fa61!2sP.%C2%BA%20Miguel%20de%20la%20Madrid%20Hurtado%20271-interior%20601%2C%20Real%20Hacienda%2C%2028978%20Cdad.%20de%20Villa%20de%20%C3%81lvarez%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1758389075732!5m2!1ses-419!2smx&maptype=roadmap&zoom=17&language=es&region=MX"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/nutrimikee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fecd5f] transition"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100028139515526"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fecd5f] transition"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://wa.me/5213121051883"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fecd5f] transition flex items-center gap-2"
          >
            <Phone size={28} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}


