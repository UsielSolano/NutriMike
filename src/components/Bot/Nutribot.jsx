import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, MessageCircle, ChevronRight, Apple, Utensils, Droplets, Activity, Heart, Calendar } from 'lucide-react';

export default function NutriBot() {
  const [mensajes, setMensajes] = useState([
    {
      tipo: 'bot',
      contenido: '🤖 *Hola! Soy NutriBot*\n\nPara ayudarte mejor, selecciona una opción escribiendo el número correspondiente:\n\n' +
        '1️⃣ 🍽️ Ver recetas saludables\n' +
        '2️⃣ 💡 Tips de nutrición\n' +
        '3️⃣ 💧 Calculadora de agua\n' +
        '4️⃣ 🏃 Ejercicio recomendado\n' +
        '5️⃣ 📅 Agendar consulta\n\n' +
        'Escribe el número de la opción que deseas:',
      opciones: ['1', '2', '3', '4', '5']
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [historial, setHistorial] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensajes]);

  // Función para manejar la selección de opciones por número
  const manejarOpcion = (numero) => {
    // Agregar mensaje del usuario
    setMensajes(prev => [
      ...prev,
      { tipo: 'usuario', contenido: numero }
    ]);

    // Guardar en historial
    setHistorial(prev => [...prev, numero]);

    // Respuesta del bot según el número
    setTimeout(() => {
      let respuestaBot = {};
      
      switch(numero) {
        case '1': // Recetas
          respuestaBot = {
            tipo: 'bot',
            contenido: '🥗 *Categorías de recetas*\n\nSelecciona una opción:\n\n' +
              '1️⃣ 🥣 Desayunos energéticos\n' +
              '2️⃣ 🥗 Comidas principales\n' +
              '3️⃣ 🌙 Cenas ligeras\n' +
              '4️⃣ 🍎 Snacks saludables\n' +
              '0️⃣ 🔙 Volver al menú principal',
            opciones: ['1', '2', '3', '4', '0']
          };
          break;
          
        case '2': // Tips
          respuestaBot = {
            tipo: 'bot',
            contenido: '💡 *Tips de Nutrición*\n\nElige un tip:\n\n' +
              '1️⃣ 🥑 Alimentos ricos en triptófano\n' +
              '2️⃣ 💪 Snacks con alta densidad nutricional\n' +
              '3️⃣ ☕ Reduce cafeína y estimulantes\n' +
              '4️⃣ 🌞 Asegura Magnesio y Vitamina D\n' +
              '0️⃣ 🔙 Volver al menú principal',
            opciones: ['1', '2', '3', '4', '0']
          };
          break;
          
        case '3': // Calculadora de agua
          respuestaBot = {
            tipo: 'bot',
            contenido: '💧 *Calculadora de Agua*\n\n' +
              'Para calcular tu consumo ideal de agua, necesito tu peso.\n\n' +
              '👉 Escribe tu peso en kilogramos (ejemplo: 70)',
            input: true,
            esperando: 'peso'
          };
          break;
          
        case '4': // Ejercicio
          respuestaBot = {
            tipo: 'bot',
            contenido: '🏃 *Ejercicio Recomendado*\n\n' +
              '¿Qué tipo de ejercicio te interesa?\n\n' +
              '1️⃣ 🧘 Principiantes\n' +
              '2️⃣ 💪 Intermedio\n' +
              '3️⃣ 🔥 Avanzado\n' +
              '0️⃣ 🔙 Volver al menú principal',
            opciones: ['1', '2', '3', '0']
          };
          break;
          
        case '5': // Agendar consulta
          respuestaBot = {
            tipo: 'bot',
            contenido: '📅 *Agendar Consulta*\n\n' +
              'Para agendar una consulta, por favor proporciona:\n\n' +
              '1️⃣ Tu nombre completo\n' +
              '2️⃣ Teléfono de contacto\n' +
              '3️⃣ Correo electrónico\n\n' +
              'Escribe tus datos en el siguiente formato:\n' +
              '*Ejemplo: Juan Pérez, 3121234567, juan@email.com*',
            input: true,
            esperando: 'consulta'
          };
          break;
          
        case '0': // Volver al menú principal
          respuestaBot = {
            tipo: 'bot',
            contenido: '🤖 *Menú Principal*\n\n' +
              'Selecciona una opción:\n\n' +
              '1️⃣ 🍽️ Ver recetas saludables\n' +
              '2️⃣ 💡 Tips de nutrición\n' +
              '3️⃣ 💧 Calculadora de agua\n' +
              '4️⃣ 🏃 Ejercicio recomendado\n' +
              '5️⃣ 📅 Agendar consulta',
            opciones: ['1', '2', '3', '4', '5']
          };
          break;
          
        // Subopciones de recetas
        case '1-1': // Desayunos
          respuestaBot = {
            tipo: 'bot',
            contenido: '🥣 *Desayunos Energéticos*\n\n' +
              '1️⃣ Bowl de Desayuno Energético\n' +
              '2️⃣ Tostadas de Aguacate\n' +
              '3️⃣ Smoothie de Frutos Rojos\n' +
              '0️⃣ 🔙 Volver a recetas',
            opciones: ['1-1-1', '1-1-2', '1-1-3', '1-0']
          };
          break;
          
        case '1-1-1': // Bowl específico
          respuestaBot = {
            tipo: 'bot',
            contenido: '🥣 *Bowl de Desayuno Energético*\n\n' +
              '*Ingredientes:*\n' +
              '• 250ml de yogur natural\n' +
              '• 120g de frutos rojos\n' +
              '• 15g de semillas de girasol\n' +
              '• 30g de crema de cacahuate\n' +
              '• 15g de coco rallado\n\n' +
              '*Preparación:*\n' +
              '1. Licúa el yogur con los frutos rojos\n' +
              '2. Sirve en un bowl\n' +
              '3. Agrega los toppings\n' +
              '4. ¡Disfruta!\n\n' +
              '0️⃣ 🔙 Volver a desayunos',
            opciones: ['1-1-0']
          };
          break;
          
        // Subopciones de tips
        case '2-1': // Tip triptófano
          respuestaBot = {
            tipo: 'bot',
            contenido: '🥑 *Alimentos ricos en triptófano*\n\n' +
              'El triptófano es clave para la producción de serotonina.\n\n' +
              '*Alimentos recomendados:*\n' +
              '• Garbanzos\n' +
              '• Almendras\n' +
              '• Plátanos\n' +
              '• Huevos\n' +
              '• Pavo\n\n' +
              '0️⃣ 🔙 Volver a tips',
            opciones: ['2-0']
          };
          break;
          
        default:
          // Manejar números no válidos
          if (numero.match(/^\d+$/)) {
            respuestaBot = {
              tipo: 'bot',
              contenido: '❌ *Opción no válida*\n\n' +
                'Por favor, selecciona un número de las opciones disponibles.\n\n' +
                '0️⃣ 🔙 Volver al menú principal',
              opciones: ['0']
            };
          }
      }
      
      if (respuestaBot) {
        setMensajes(prev => [...prev, respuestaBot]);
      }
    }, 500);
  };

  // Manejar envío de texto (números o datos)
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const valor = inputValue.trim();
    
    // Verificar si es un número (opción del menú)
    if (valor.match(/^\d+$/)) {
      // Construir la ruta de navegación basada en el historial
      const ultimoMensaje = mensajes[mensajes.length - 1];
      
      if (ultimoMensaje.tipo === 'bot' && ultimoMensaje.opciones) {
        // Verificar si el número está en las opciones disponibles
        if (ultimoMensaje.opciones.includes(valor) || 
            (valor === '0' && ultimoMensaje.opciones.includes('0'))) {
          
          // Construir la clave de la opción basada en el historial
          let opcionKey = valor;
          if (historial.length > 0) {
            const ruta = [...historial, valor].join('-');
            opcionKey = ruta;
          }
          
          manejarOpcion(opcionKey);
        } else {
          // Número no válido para las opciones actuales
          setMensajes(prev => [
            ...prev,
            { tipo: 'usuario', contenido: valor },
            {
              tipo: 'bot',
              contenido: '❌ *Número no válido*\n\n' +
                'Por favor, elige una de las opciones mostradas.\n\n' +
                '0️⃣ 🔙 Volver al menú principal',
              opciones: ['0']
            }
          ]);
        }
      }
    } else {
      // Es un mensaje de texto (para calculadora o consulta)
      setMensajes(prev => [
        ...prev,
        { tipo: 'usuario', contenido: valor }
      ]);
      
      // Procesar según el contexto
      setTimeout(() => {
        if (valor.includes(',')) {
          // Datos de consulta
          setMensajes(prev => [
            ...prev,
            {
              tipo: 'bot',
              contenido: '✅ *¡Gracias por tu información!*\n\n' +
                'Un asesor se pondrá en contacto contigo a la brevedad para agendar tu consulta.\n\n' +
                '¿Necesitas algo más?\n\n' +
                '0️⃣ 🔙 Volver al menú principal',
              opciones: ['0']
            }
          ]);
        } else if (!isNaN(valor) && valor > 0) {
          // Peso para calculadora
          const agua = (valor * 35) / 1000; // 35ml por kg, convertido a litros
          setMensajes(prev => [
            ...prev,
            {
              tipo: 'bot',
              contenido: `💧 *Resultado*\n\n` +
                `Para tu peso de ${valor}kg, deberías consumir aproximadamente:\n\n` +
                `👉 *${agua.toFixed(1)} litros de agua al día*\n\n` +
                `Esto es equivalente a unos ${Math.round(agua * 4)} vasos de agua.\n\n` +
                `0️⃣ 🔙 Volver al menú principal`,
              opciones: ['0']
            }
          ]);
        } else {
          setMensajes(prev => [
            ...prev,
            {
              tipo: 'bot',
              contenido: '❌ *Formato no válido*\n\n' +
                'Por favor, sigue el formato indicado.\n\n' +
                '0️⃣ 🔙 Volver al menú principal',
              opciones: ['0']
            }
          ]);
        }
      }, 500);
    }

    setInputValue('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-100">
      {/* Header del bot */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg">NutriBot</h3>
          <p className="text-xs text-yellow-100">Selecciona una opción por número</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-xs">En línea</span>
        </div>
      </div>

      {/* Área de mensajes */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {mensajes.map((msg, index) => (
          <div key={index}>
            {/* Mensaje */}
            <div className={`flex ${msg.tipo === 'usuario' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                  msg.tipo === 'usuario'
                    ? 'bg-yellow-500 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 rounded-bl-none'
                }`}
              >
                {msg.contenido}
              </div>
            </div>

            {/* Indicador de opciones disponibles */}
            {msg.opciones && (
              <div className="mt-2 text-xs text-gray-500 text-center">
                Escribe el número de la opción (0 para volver)
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input para mensajes */}
      <form onSubmit={manejarEnvio} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe el número de tu opción..."
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          💡 Escribe solo el número de la opción que deseas
        </p>
      </form>
    </div>
  );
}
