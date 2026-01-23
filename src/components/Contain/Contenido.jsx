import React from 'react';
import { BookOpen, Video, FileText, Award } from 'lucide-react';
import VideoCarousel from './videos/Videos'
import backAgenda from "../../assets/backAgenda.jpg";

export default function Contenido() {
  const contenidos = [
    {
      icon: <Video className="w-8 h-8" />,
      titulo: "Videos Educativos",
      descripcion: "Aprende sobre nutrición con nuestros videos explicativos",
      items: ["Recetas saludables", "Tips nutricionales", "Ejercicios"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      titulo: "Artículos",
      descripcion: "Lee nuestros artículos sobre nutrición y bienestar",
      items: ["Nutrición deportiva", "Alimentación infantil", "Dietas especiales"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      titulo: "Guías Descargables",
      descripcion: "Descarga guías prácticas para tu día a día",
      items: ["Plan de comidas", "Lista de compras", "Recetarios"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      titulo: "Cursos Online",
      descripcion: "Aprende a tu ritmo con nuestros cursos certificados",
      items: ["Básicos de nutrición", "Cocina saludable", "Lectura de etiquetas"]
    }
  ];

  return (
    <div
      className="min-h-screen pt-24 pb-12 px-4"
      style={{
        backgroundImage: `url(${backAgenda})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 drop-shadow-lg">
            Contenido Educativo
          </h1>
          <p className="text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto drop-shadow">
            Descubre nuestros recursos educativos diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar
          </p>
        </div>

        {/* Grid de contenidos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contenidos.map((contenido, index) => (
            <div
              key={index}
              className="relative bg-[#ffffffe5] rounded-2xl shadow-2xl p-8 hover:shadow-2xl hover:bg-[#ffffffe5] transition-all duration-300 hover:-translate-y-1 border border-yellow-100/30"
            >
              {/* Contenido */}
              <div className="relative bg-[#fcfcfc63] z-10">
                <div className=" bg-[#ffffffe5]  bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                  {contenido.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {contenido.titulo}
                </h3>
                <p className="text-gray-700 mb-6">
                  {contenido.descripcion}
                </p>
                <ul className="space-y-2">
                  {contenido.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección destacada */}
        <div
          className="relative rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden mb-16 shadow-2xl bg-[#3d2817e7] border border-yellow-500/20"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-yellow-100">
              Accede a todo nuestro contenido exclusivo y comienza tu viaje hacia una vida más saludable
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Explorar todo el contenido
            </button>
          </div>
        </div>

        <div className="bg-[#ffffff21] rounded-2xl shadow-2xl p-6 border border-yellow-100/30">
          <VideoCarousel />
        </div>
      </div>
    </div>
  );
}
