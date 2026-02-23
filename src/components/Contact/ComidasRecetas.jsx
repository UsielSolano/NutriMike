import React, { useState } from 'react';
import { Clock, Users, Flame, ChefHat, Heart, ShoppingBag, BookOpen, Utensils, Youtube, FileText, X } from 'lucide-react';
import RecetasCarousel from './RecetasCarousel';
import backAgenda from "../../assets/backAgenda.jpg";
import tostadaAgua from "../../assets/tostadaAgua.jpeg";

export default function ComidasRecetas() {
  const [selectedReceta, setSelectedReceta] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const recetas = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Ensalada Mediterránea con Quinoa",
      descripcion: "Una ensalada fresca y nutritiva cargada de vegetales, quinoa y aderezo de limón.",
      tiempo: "20 min",
      porciones: 2,
      calorias: "280 cal",
      dificultad: "Fácil",
      items: ["Lechuga romana", "Zanahoria", "Quinoa", "Aceitunas", "Queso panela"],
      ingredientes: [
        "2 tazas de lechuga romana",
        "1 taza de zanahoria rallada",
        "½ taza de quinoa cocida",
        "½ taza de aceitunas verdes y negras rebanadas",
        "¼ taza de cebolla morada",
        "250g de queso panela",
        "20ml de aceite de oliva",
        "1 pizca de hierbas finas",
        "1 diente de ajo",
        "Jugo de 1 limón amarillo"
      ],
      preparacion: [
        "Mezcla el aceite de oliva, las hierbas finas, el ajo picado y una pizca de sal. Puedes agregar el jugo de 1 limón amarillo.",
        "Incorpora todos los ingredientes vegetales en un bowl grande.",
        "Agrega el marinaje y mezcla suavemente para integrar todos los sabores.",
        "Sirve inmediatamente y disfruta."
      ],
      imagen: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Ensaladas",
      vegano: false,
      vegetariano: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Salmón al Horno con Espárragos",
      descripcion: "Salmón salvaje horneado con espárragos frescos, zanahorias y hierbas aromáticas.",
      tiempo: "25 min",
      porciones: 4,
      calorias: "380 cal",
      dificultad: "Media",
      items: ["Filetes de salmón", "Espárragos", "Zanahorias", "Ajo", "Limón"],
      ingredientes: [
        "4 filetes de salmón (150-180g cada uno)",
        "1 manojo de espárragos",
        "2-3 zanahorias grandes",
        "Aceite de oliva virgen extra",
        "Sal y pimienta negra al gusto",
        "2 dientes de ajo picados",
        "Rodajas de limón",
        "Eneldo fresco o seco (opcional)"
      ],
      preparacion: [
        "Precalienta el horno a 200°C (400°F). Forra una bandeja con papel para hornear.",
        "Coloca los espárragos y las zanahorias en bastones en la bandeja. Rocía con aceite, sal y pimienta.",
        "TIP: Si las zanahorias son gruesas, hornéalas solas por 10 minutos antes.",
        "Seca los filetes de salmón y colócalos en el centro de la bandeja.",
        "Úntalos con ajo picado, sal, pimienta y coloca una rodaja de limón sobre cada uno.",
        "Hornea durante 15-18 minutos hasta que el salmón esté cocido pero jugoso.",
        "El salmón estará listo cuando la carne se separe fácilmente con un tenedor."
      ],
      imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Pescados",
      vegano: false,
      vegetariano: false
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Bowl de Desayuno Energético",
      descripcion: "Comienza el día con energía con este bowl de yogur, frutos rojos y semillas.",
      tiempo: "10 min",
      porciones: 1,
      calorias: "320 cal",
      dificultad: "Fácil",
      items: ["Yogur natural", "Frutos rojos", "Miel", "Crema de cacahuate", "Semillas"],
      ingredientes: [
        "250ml de yogur natural",
        "120g de frutos rojos congelados",
        "15 ml de miel de abeja natural",
        "30g de crema de cacahuate líquida",
        "15g de coco rallado",
        "15g de avena molida",
        "15g de chía hidratada en agua",
        "15g de semillas de girasol"
      ],
      preparacion: [
        "Licúa el yogur con los frutos rojos congelados hasta obtener una mezcla homogénea.",
        "Sirve la mezcla en un bowl.",
        "Agrega como topping: crema de cacahuate, coco rallado, avena molida, chía hidratada y semillas de girasol.",
        "Disfruta inmediatamente con una cuchara."
      ],
      imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Desayunos",
      vegano: false,
      vegetariano: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Curry de Lentejas y Vegetales",
      descripcion: "Un curry cremoso y especiado perfecto para días fríos, rico en proteínas vegetales.",
      tiempo: "25 min",
      porciones: 4,
      calorias: "260 cal",
      dificultad: "Media",
      items: ["Lentejas cocidas", "Salsa de tomate", "Chipotle", "Zanahoria", "Papa"],
      ingredientes: [
        "2 tazas de lentejas cocidas",
        "1 taza de salsa de tomate casera o puré de tomate",
        "1 chile chipotle enlatado",
        "1 taza de zanahoria y chícharos",
        "1 taza de papa pelada y picada",
        "1 cucharadita de aceite de oliva",
        "½ taza de agua",
        "Especias al gusto"
      ],
      preparacion: [
        "En un sartén calienta el aceite y agrega la salsa de tomate, el chipotle picado y las especias al gusto.",
        "Agrega ½ taza de agua y lleva a punto de ebullición.",
        "Cuando esté hirviendo, agrega las lentejas cocidas y los vegetales.",
        "Cocina por 5 minutos hasta que la verdura esté al dente.",
        "Sirve con trocitos de pan pita tostado o croutones."
      ],
      imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Vegetariano",
      vegano: true,
      vegetariano: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Wrap de Aguacate y Pollo",
      descripcion: "Wrap fresco y nutritivo con pollo marinado, vegetales y aguacate.",
      tiempo: "20 min",
      porciones: 2,
      calorias: "350 cal",
      dificultad: "Fácil",
      items: ["Pechuga de pollo", "Tortillas de harina", "Lechuga", "Tomate", "Aguacate"],
      ingredientes: [
        "250-300g de pechuga de pollo en tiras",
        "2 tortillas grandes de harina (tipo burrito)",
        "1 taza de lechuga o espinacas frescas",
        "1 tomate mediano picado",
        "¼ de cebolla morada en tiras finas",
        "Sal, pimienta, ajo y páprika al gusto",
        "Aceite de oliva"
      ],
      preparacion: [
        "Marina las tiras de pollo con sal, pimienta, ajo, páprika y un poco de aceite. Deja reposar 15 minutos.",
        "Calienta un sartén con una gota de aceite y saltea el pollo a fuego medio-alto por 6-8 minutos hasta dorar.",
        "Calienta las tortillas en un sartén caliente por unos segundos de cada lado.",
        "Extiende la tortilla y coloca una base de lechuga.",
        "Añade el tomate, la cebolla y las tiras de pollo caliente.",
        "Dobla los laterales hacia el centro y enrolla desde la base apretando firmemente."
      ],
      imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      categoria: "Principales",
      vegano: false,
      vegetariano: false
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      titulo: "Tostadas de Aguacate",
      descripcion: "Tostadas crujientes con aguacate fresco y requesón especiado.",
      tiempo: "15 min",
      porciones: 3,
      calorias: "220 cal",
      dificultad: "Fácil",
      items: ["Aguacate hass", "Pan tostado", "Requesón", "Jitomate cherry", "Chile árbol"],
      ingredientes: [
        "1 aguacate hass",
        "½ taza de jitomate cherry",
        "¼ taza de cebolla y cilantro picados",
        "1 limón",
        "3 rebanadas de pan tostado",
        "100g de requesón",
        "1 cucharadita de chile árbol"
      ],
      preparacion: [
        "Mezcla 1: Mezcla el requesón con el chile de árbol, la cebolla y el cilantro hasta obtener una pasta.",
        "Mezcla 2: Mezcla el aguacate con el jugo de limón, sal y especies. Agrega el jitomate cherry picado.",
        "Sobre el pan tostado, unta la mezcla de aguacate.",
        "En la parte superior, agrega un poco de la mezcla de requesón.",
        "Decora con más jitomate cherry y sirve."
      ],
      imagen: tostadaAgua,  // ✅ Corregido: sin llaves
      categoria: "Desayunos",
      vegano: false,
      vegetariano: true
    }
  ];

  const tipsNutricion = [
    {
      titulo: "Horarios fijos para comidas",
      descripcion: "Mantener una rutina de alimentación ayuda a estabilizar los niveles de azúcar en la sangre. Comer cada 3-4 horas reduce la urgencia de comer por impulso."
    },
    {
      titulo: "Alimentos ricos en triptófano",
      descripcion: "Este aminoácido es clave para la producción de serotonina. Incluye garbanzos, almendras o plátanos para regular el estado de ánimo naturalmente."
    },
    {
      titulo: "Snacks con alta densidad nutricional",
      descripcion: "Frutas y verduras son tus mejores aliadas por su bajo contenido calórico y alta capacidad de saciedad gracias a la fibra."
    },
    {
      titulo: "Reduce cafeína y estimulantes",
      descripcion: "El exceso puede elevar nerviosismo y ansiedad. Sustituye por infusiones relajantes como manzanilla, tila o valeriana."
    },
    {
      titulo: "Asegura Magnesio y Vitamina D",
      descripcion: "Niveles bajos se asocian con mayor estrés. Incluye aguacate y frutos secos en tu dieta diaria."
    }
  ];

  const openReceta = (receta) => {
    setSelectedReceta(receta);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReceta(null);
  };

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
            Comidas y Recetas NutriMikke
          </h1>
          <p className="text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto drop-shadow">
            Descubre recetas deliciosas y nutritivas para cada ocasión. Cocina saludable con los tips de NutriMikke
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-all">
            Todas
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Desayunos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Vegetariano
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Principales
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Rápido
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 transition-all">
            Ensaladas
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

                <p className="text-gray-700 mb-4">
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
                  <button
                    onClick={() => openReceta(receta)}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
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

        {/* Canal de YouTube y Guías */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="https://www.youtube.com/channel/UCYr2nyRX_oxFnNF0oROuuHA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Youtube className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Canal de YouTube</h3>
                <p className="text-red-100">@NutriMikke</p>
              </div>
            </div>
            <p className="text-lg mb-4">
              Suscríbete para más recetas y tips de nutrición en video
            </p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="text-sm">Visitar canal</span>
              <span>→</span>
            </div>
          </a>

          <a
            href="https://drive.google.com/drive/folders/1wg2e_y3nwvvoXjrJs3mNcAp_drNdVFaR?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 text-white hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Guías y Artículos</h3>
                <p className="text-yellow-100">Recursos gratuitos</p>
              </div>
            </div>
            <p className="text-lg mb-4">
              Descarga guías de nutrición y lee artículos exclusivos
            </p>
            <div className="flex items-center gap-2 text-yellow-100">
              <span className="text-sm">Ver recursos</span>
              <span>→</span>
            </div>
          </a>
        </div>

        {/* Tips de Nutrición */}
        <div className="bg-[#ffffffe5] rounded-2xl shadow-2xl p-8 mb-16 border border-yellow-100/30">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips de Nutrición NutriMikke
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipsNutricion.map((tip, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.titulo}</h3>
                <p className="text-gray-700">{tip.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel de recetas rápidas */}
        <div className="bg-[#ffffff21] rounded-2xl shadow-2xl p-6 border border-yellow-100/30 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recetas rápidas (menos de 20 minutos)
          </h3>
          <RecetasCarousel />
        </div>
      </div>

      {/* Modal de receta completa */}
      {/* Modal de receta completa */}
      {showModal && selectedReceta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-gray-100 transition z-20 shadow"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Imagen */}
            <div className="h-56 sm:h-72 overflow-hidden relative">
              <img
                src={selectedReceta.imagen}
                alt={selectedReceta.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
                  {selectedReceta.categoria}
                </span>
              </div>
            </div>

            {/* Contenido scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh]">

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedReceta.titulo}
                </h2>

                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                    {selectedReceta.tiempo}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1 text-yellow-500" />
                    {selectedReceta.porciones} porciones
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Flame className="w-4 h-4 mr-1 text-yellow-500" />
                    {selectedReceta.calorias}
                  </div>

                  {selectedReceta.vegano && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      VEGANO
                    </span>
                  )}
                  {selectedReceta.vegetariano && !selectedReceta.vegano && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      VEGETARIANO
                    </span>
                  )}
                </div>
              </div>

              {/* Ingredientes */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-yellow-500" />
                  Ingredientes
                </h3>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedReceta.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                      {ingrediente}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparación */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <ChefHat className="w-5 h-5 mr-2 text-yellow-500" />
                  Preparación
                </h3>

                <ol className="space-y-4">
                  {selectedReceta.preparacion.map((paso, index) => (
                    <li key={index} className="flex text-gray-700 text-sm">
                      <span className="font-bold text-yellow-500 mr-3">
                        {index + 1}.
                      </span>
                      {paso}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
