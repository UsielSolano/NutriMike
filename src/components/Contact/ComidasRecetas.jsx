import React from 'react';
import { Clock, Users, Flame, ChefHat, Heart, ShoppingBag, BookOpen, Utensils } from 'lucide-react';
import RecetasCarousel from './RecetasCarousel';
import backAgenda from "../../assets/backAgenda.jpg";

export default function ComidasRecetas() {
  const recetas = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Ensalada Mediterránea con Quinoa",
      descripcion: "Una ensalada fresca y nutritiva cargada de vegetales, quinoa y aderezo de limón.",
      tiempo: "25 min",
      porciones: 4,
      calorias: "320 cal",
      dificultad: "Fácil",
      items: ["Quinoa cocida", "Tomates cherry", "Pepino", "Aceitunas", "Queso feta"],
      imagen: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Ensaladas",
      vegano: false,
      vegetariano: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Salmón al Horno con Espárragos",
      descripcion: "Salmón salvaje horneado con esparragos frescos y hierbas aromáticas.",
      tiempo: "30 min",
      porciones: 2,
      calorias: "450 cal",
      dificultad: "Media",
      items: ["Salmón fresco", "Espárragos", "Limón", "Eneldo", "Aceite de oliva"],
      imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Pescados",
      vegano: false,
      vegetariano: false
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Bowl de Desayuno Energético",
      descripcion: "Comienza el día con energía con este bowl de avena, frutas y semillas.",
      tiempo: "15 min",
      porciones: 1,
      calorias: "380 cal",
      dificultad: "Fácil",
      items: ["Avena integral", "Plátano", "Frutos rojos", "Chía", "Miel natural"],
      imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Desayunos",
      vegano: true,
      vegetariano: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Curry de Lentejas y Vegetales",
      descripcion: "Un curry cremoso y especiado perfecto para días fríos, rico en proteínas vegetales.",
      tiempo: "40 min",
      porciones: 6,
      calorias: "280 cal",
      dificultad: "Media",
      items: ["Lentejas", "Leche de coco", "Curry", "Espinacas", "Cebolla"],
      imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Vegetariano",
      vegano: true,
      vegetariano: true
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-6">
            <Utensils className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 drop-shadow-lg">
            Comidas y Recetas Saludables
          </h1>
          <p className="text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto drop-shadow">
            Descubre recetas deliciosas y nutritivas para cada ocasión. Cocina saludable nunca fue tan fácil y sabrosa
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-all">
            Todas
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Vegetariano
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Vegano
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Bajas Calorías
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Rápido
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Postres
          </button>
        </div>

        {/* Grid de recetas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {recetas.map((receta, index) => (
            <div
              key={index}
              className="relative bg-[#ffffffe5] rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl hover:bg-[#ffffffe5] transition-all duration-300 hover:-translate-y-1 border border-yellow-100/30"
            >
              {/* Imagen de la receta */}
              <div className="h-48 overflow-hidden">
                <img
                  src={receta.imagen}
                  alt={receta.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {receta.categoria}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {receta.titulo}
                  </h3>
                  <div className="flex items-center gap-2">
                    {receta.vegano && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VEGANO</span>
                    )}
                    {receta.vegetariano && !receta.vegano && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">VEGETARIANO</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {receta.descripcion}
                </p>

                {/* Información nutricional */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-900">{receta.tiempo}</span>
                    </div>
                    <span className="text-xs text-gray-600">Tiempo</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-900">{receta.porciones}</span>
                    </div>
                    <span className="text-xs text-gray-600">Porciones</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Flame className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-900">{receta.calorias}</span>
                    </div>
                    <span className="text-xs text-gray-600">Calorías</span>
                  </div>
                </div>

                {/* Ingredientes principales */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Ingredientes principales:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {receta.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ver receta completa
                  </button>
                  <button className="px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección destacada */}
        <div
          className="relative rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden mb-16 shadow-2xl bg-[#3d2817e7] border border-yellow-500/20"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-6">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar tu cocina?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-yellow-100">
              Descubre nuestro plan de menús semanales con lista de compras incluidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan de menús semanal
              </button>
              <button className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl border border-yellow-500">
                Ver todas las recetas
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel de recetas rápidas */}
        <div className="bg-[#ffffff21] rounded-2xl shadow-2xl p-6 border border-yellow-100/30 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recetas rápidas (menos de 20 minutos)
          </h3>
          <RecetasCarousel />
        </div>

        {/* Consejos de cocina */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#ffffffe5] rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Compra inteligente</h4>
            <p className="text-gray-700">Aprende a seleccionar los mejores ingredientes y a organizar tu despensa.</p>
          </div>
          <div className="bg-[#ffffffe5] rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Batch Cooking</h4>
            <p className="text-gray-700">Prepara varias comidas a la vez y ahorra tiempo durante la semana.</p>
          </div>
          <div className="bg-[#ffffffe5] rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Cocción saludable</h4>
            <p className="text-gray-700">Técnicas de cocción que preservan nutrientes y reducen calorías.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
