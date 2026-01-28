import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Flame } from 'lucide-react';

export default function RecetasCarousel() {
  const recetasRapidas = [
    {
      nombre: "Wrap de Aguacate y Pollo",
      tiempo: "15 min",
      calorias: "350 cal",
      imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      dificultad: "Fácil"
    },
    {
      nombre: "Sopa de Tomate Express",
      tiempo: "18 min",
      calorias: "220 cal",
      imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      dificultad: "Fácil"
    },
    {
      nombre: "Tostadas de Aguacate",
      tiempo: "10 min",
      calorias: "280 cal",
      imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      dificultad: "Fácil"
    }
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {recetasRapidas.map((receta, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white rounded-xl overflow-hidden shadow-lg border border-yellow-100"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={receta.imagen}
                alt={receta.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2">{receta.nombre}</h4>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{receta.tiempo}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Flame className="w-4 h-4 mr-1" />
                  <span className="text-sm">{receta.calorias}</span>
                </div>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  {receta.dificultad}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                Ver receta
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
