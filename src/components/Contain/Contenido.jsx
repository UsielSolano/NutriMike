import React from 'react';
import { BookOpen, Video, FileText, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contenido Educativo
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros recursos educativos diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar
          </p>
        </div>

        {/* Grid de contenidos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contenidos.map((contenido, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                {contenido.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {contenido.titulo}
              </h3>
              <p className="text-gray-600 mb-6">
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
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full">
                Ver más
              </button>
            </div>
          ))}
        </div>

        {/* Sección destacada */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Accede a todo nuestro contenido exclusivo y comienza tu viaje hacia una vida más saludable
          </p>
          <button className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
            Explorar todo el contenido
          </button>
        </div>
      </div>
    </div>
  );
}
