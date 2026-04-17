import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageCircle, Volume2, VolumeX, Minimize2, Maximize2, Phone } from 'lucide-react';

export default function NutriBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  const [userData, setUserData] = useState({});
  const [waitingForInput, setWaitingForInput] = useState(null);
  const messagesEndRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chatContainerRef = useRef(null);

  // Datos del CSV
  const tipsData = {
    1: "Identifica si tienes hambre real o emocional; si es emocional, intenta distraerte con una actividad que te guste por 15 minutos, si es alimenticia busca gelatina o nueces.",
    2: "Evita saltarte comidas para no llegar con hambre voraz a la siguiente; el equilibrio es clave, podrías hacer de 3 a 4 colaciones por día.",
    3: "Lleva siempre contigo una botella reutilizable para beber pequeños sorbos durante todo el día, trata de agregar hielo, menta, chía o cítricos para el sabor.",
    4: "Nunca vayas al supermercado con hambre y lleva una lista cerrada para evitar compras impulsivas.",
    5: "Guarda la comida en recipientes herméticos y transparentes para ver lo que tienes y evitar desperdicios, no satures tu refrigerador y no agregues alimentos calientes.",
    6: "Usa platos más pequeños para engañar visualmente al cerebro y sentir que estás comiendo lo suficiente, come despacio y usa tazas medidoras al servirte.",
    7: "Deja las proteínas marinando desde la noche anterior para que absorban mejor el sabor y queden más jugosas.",
    8: "Empieza con algo sencillo, como caminar 20 minutos al día, y aumenta la intensidad gradualmente, igualmente busca actividades que realmente te gusten.",
    9: "Establece un horario fijo para dormir y evita las pantallas (celular, TV) al menos 30 minutos antes de acostarte.",
    10: "No esperes a 'tener ganas'; simplemente empieza con una tarea pequeña y el impulso llegará solo, trabaja mejor tu disciplina."
  };

  const ejercicioData = {
    '40-50': 45,
    '50-60': 60,
    '60-70': 70,
    '70-80': 80,
    '80-90': 70,
    '90-100': 60,
    '100+': 45
  };

  const proteinasData = {
    'Bajar de peso': { multiplier: 0.8, ranges: { '40-50': 36, '50-60': 44, '60-70': 52, '70-80': 60, '80-90': 68, '90-100': 76, '100+': 84 } },
    'Bajar % de grasa': { multiplier: 1.5, ranges: { '40-50': 67.5, '50-60': 82.5, '60-70': 97.5, '70-80': 112.5, '80-90': 127.5, '90-100': 142.5, '100+': 157.5 } },
    'Mantener mi peso': { multiplier: 1, ranges: { '40-50': 45, '50-60': 55, '60-70': 65, '70-80': 75, '80-90': 85, '90-100': 95, '100+': 105 } },
    'Aumentar % músculo': { multiplier: 2, ranges: { '40-50': 90, '50-60': 110, '60-70': 130, '70-80': 150, '80-90': 170, '90-100': 190, '100+': 210 } }
  };

  const getRangoPeso = (peso) => {
    if (peso < 50) return '40-50';
    if (peso < 60) return '50-60';
    if (peso < 70) return '60-70';
    if (peso < 80) return '70-80';
    if (peso < 90) return '80-90';
    if (peso < 100) return '90-100';
    return '100+';
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
    ));
  };

  const addMessage = (text, type = 'bot') => {
    setMessages(prev => [...prev, { text, type, timestamp: new Date() }]);
  };

  const addBotMessage = (text, options = null) => {
    setMessages(prev => [...prev, { text, type: 'bot', options, timestamp: new Date() }]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          '🤖 *¡Hola! Soy NutriBot*\n\nTu asistente virtual de nutrición. ¿En qué puedo ayudarte hoy?\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━\n\n' +
          '*1.* 📅 Agendar consulta\n' +
          '*2.* 💡 Tips de nutrición\n' +
          '*3.* 💧 Calculadora de agua\n' +
          '*4.* 🏃 Calculadora de ejercicio\n' +
          '*5.* 🥩 Calculadora de proteínas\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━\n\n' +
          '👉 *Escribe el número de la opción que deseas*'
        );
        setCurrentMenu('main');
      }, 500);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue.trim();
    addMessage(userInput, 'user');
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      processUserInput(userInput);
      setIsTyping(false);
    }, 800);
  };

  const processUserInput = (input) => {
    if (waitingForInput) {
      processWaitingInput(input);
      return;
    }

    if (currentMenu === 'main') {
      handleMainMenu(input);
    } else if (currentMenu === 'consulta') {
      handleConsultaMenu(input);
    } else if (currentMenu === 'consultaClinica') {
      handleConsultaClinica(input);
    } else if (currentMenu === 'consultaEstetica') {
      handleConsultaEstetica(input);
    } else if (currentMenu === 'consultaDeportiva') {
      handleConsultaDeportiva(input);
    } else if (currentMenu === 'tips') {
      handleTipsMenu(input);
    } else if (currentMenu === 'agua') {
      handleAguaMenu(input);
    } else if (currentMenu === 'ejercicio') {
      handleEjercicioMenu(input);
    } else if (currentMenu === 'proteinas') {
      handleProteinasMenu(input);
    } else if (currentMenu === 'proteinasObjetivo') {
      handleProteinasObjetivo(input);
    }
  };

  const handleMainMenu = (input) => {
    switch (input) {
      case '1':
        addBotMessage(
          '📅 *Agendar consulta*\n\n' +
          '¿Qué tipo de consulta te interesa?\n\n' +
          '1.👨‍⚕️ Consulta Clínica\n' +
          '2. 💅 Consulta Estética\n' +
          '3. 🏋️ Consulta Deportiva\n\n' +
          '0. 🔙 Volver al menú principal'
        );
        setCurrentMenu('consulta');
        break;
      case '2':
        var tipsText = '💡 *Tips de Nutrición*\n\n';
        for (let i = 1; i <= 10; i++) {
          tipsText += `*${i}.* ${tipsData[i].substring(0, 50)}...\n`;
        }
        tipsText += '\n*0.* 🔙 Volver al menú principal\n\n👉 *Escribe el número del tip que deseas ver completo*';
        addBotMessage(tipsText);
        setCurrentMenu('tips');
        break;
      case '3':
        addBotMessage(
          '💧 Calculadora de agua\n\n' +
          'Para calcular cuánta agua necesitas al día, por favor ingresa tu peso en kilogramos.\n\n' +
          '*Ejemplo:* 70\n\n' +
          '0.🔙 Volver al menú principal'
        );
        setCurrentMenu('agua');
        setWaitingForInput('peso');
        break;
      case '4':
        addBotMessage(
          '🏃 *Calculadora de ejercicio*\n\n' +
          '¿Cuál es tu peso en kilogramos?\n\n' +
          '*Ejemplo:* 70\n\n' +
          '*0.* 🔙 Volver al menú principal'
        );
        setCurrentMenu('ejercicio');
        setWaitingForInput('pesoEjercicio');
        break;
      case '5':
        addBotMessage(
          '🥩 *Calculadora de proteínas*\n\n' +
          '¿Cuál es tu objetivo?\n\n' +
          '*1.* Bajar de peso (0.8g/kg/día)\n' +
          '*2.* Bajar % de grasa (1.5g/kg/día)\n' +
          '*3.* Mantener mi peso (1g/kg/día)\n' +
          '*4.* Aumentar % músculo (2g/kg/día)\n\n' +
          '*0.* 🔙 Volver al menú principal'
        );
        setCurrentMenu('proteinas');
        break;
      case '0':
        addBotMessage(
          '🤖 *Menú Principal*\n\n' +
          '*1.* 📅 Agendar consulta\n' +
          '*2.* 💡 Tips de nutrición\n' +
          '*3.* 💧 Calculadora de agua\n' +
          '*4.* 🏃 Calculadora de ejercicio\n' +
          '*5.* 🥩 Calculadora de proteínas\n\n' +
          '👉 *Escribe el número de la opción que deseas*'
        );
        setCurrentMenu('main');
        break;
      default:
        addBotMessage(
          '❌ *Opción no válida*\n\n' +
          'Por favor, selecciona una opción del 1 al 5.\n\n' +
          '*0.* 🔙 Volver al menú principal'
        );
    }
  };

  const handleConsultaMenu = (input) => {
    switch (input) {
      case '1':
        addBotMessage(
          '👨‍⚕️ *Consulta Clínica*\n\n' +
          '¿Qué tipo de atención necesitas?\n\n' +
          '*1.* Prevención de enfermedades\n' +
          '*2.* Revisión de estudios laboratorio\n' +
          '*3.* Tratamiento nutricional para alguna enfermedad\n' +
          '*4.* Acompañamiento nutricional a tus medicamentos\n\n' +
          '*0.* 🔙 Volver'
        );
        setCurrentMenu('consultaClinica');
        break;
      case '2':
        addBotMessage(
          '💅 *Consulta Estética*\n\n' +
          '¿Cuál es tu objetivo?\n\n' +
          '*1.* Quiero Bajar de peso\n' +
          '*2.* Quiero Subir de peso\n' +
          '*3.* Quiero Cambiar la forma de mi cuerpo\n' +
          '*4.* Busco simetría en mis medidas\n\n' +
          '*0.* 🔙 Volver'
        );
        setCurrentMenu('consultaEstetica');
        break;
      case '3':
        addBotMessage(
          '🏋️ *Consulta Deportiva*\n\n' +
          '¿Cuál es tu objetivo?\n\n' +
          '*1.* Busco mejor rendimiento deportivo\n' +
          '*2.* Quiero aumentar mi masa muscular\n' +
          '*3.* Busco prepararme para una competencia\n' +
          '*4.* Deseo un físico atlético\n\n' +
          '*0.* 🔙 Volver'
        );
        setCurrentMenu('consultaDeportiva');
        break;
      case '0':
        addBotMessage(
          '🤖 *Menú Principal*\n\n' +
          '*1.* 📅 Agendar consulta\n' +
          '*2.* 💡 Tips de nutrición\n' +
          '*3.* 💧 Calculadora de agua\n' +
          '*4.* 🏃 Calculadora de ejercicio\n' +
          '*5.* 🥩 Calculadora de proteínas\n\n' +
          '👉 *Escribe el número de la opción que deseas*'
        );
        setCurrentMenu('main');
        break;
      default:
        addBotMessage('❌ Opción no válida. Por favor selecciona 1, 2, 3 o 0.');
    }
  };

  const handleConsultaClinica = (input) => {
    const opciones = {
      '1': 'Prevención de enfermedades',
      '2': 'Revisión de estudios laboratorio',
      '3': 'Tratamiento nutricional para alguna enfermedad',
      '4': 'Acompañamiento nutricional a tus medicamentos'
    };

    if (opciones[input]) {
      addBotMessage(
        `📅 *Agendar Consulta Clínica*\n\n` +
        `Has seleccionado: *${opciones[input]}*\n\n` +
        `Para agendar tu consulta, contáctanos por WhatsApp:\n\n` +
        `📱 *WhatsApp:* wa.me/5213121051883\n\n` +
        `Menciona que vienes de NutriBot y el tipo de consulta que deseas.\n\n` +
        `*0.* 🔙 Volver al menú principal`
      );
      setCurrentMenu('main');
    } else if (input === '0') {
      addBotMessage(
        '📅 *Agendar consulta*\n\n' +
        '¿Qué tipo de consulta te interesa?\n\n' +
        '*1.* 👨‍⚕️ Consulta Clínica\n' +
        '*2.* 💅 Consulta Estética\n' +
        '*3.* 🏋️ Consulta Deportiva\n\n' +
        '*0.* 🔙 Volver al menú principal'
      );
      setCurrentMenu('consulta');
    } else {
      addBotMessage('❌ Opción no válida. Por favor selecciona 1, 2, 3, 4 o 0.');
    }
  };

  const handleConsultaEstetica = (input) => {
    const opciones = {
      '1': 'Quiero Bajar de peso',
      '2': 'Quiero Subir de peso',
      '3': 'Quiero Cambiar la forma de mi cuerpo',
      '4': 'Busco simetría en mis medidas'
    };

    if (opciones[input]) {
      addBotMessage(
        `📅 *Agendar Consulta Estética*\n\n` +
        `Has seleccionado: *${opciones[input]}*\n\n` +
        `Para agendar tu consulta, contáctanos por WhatsApp:\n\n` +
        `📱 *WhatsApp:* wa.me/5213121051883\n\n` +
        `Menciona que vienes de NutriBot y tu objetivo específico.\n\n` +
        `*0.* 🔙 Volver al menú principal`
      );
      setCurrentMenu('main');
    } else if (input === '0') {
      addBotMessage(
        '📅 *Agendar consulta*\n\n' +
        '¿Qué tipo de consulta te interesa?\n\n' +
        '*1.* 👨‍⚕️ Consulta Clínica\n' +
        '*2.* 💅 Consulta Estética\n' +
        '*3.* 🏋️ Consulta Deportiva\n\n' +
        '*0.* 🔙 Volver al menú principal'
      );
      setCurrentMenu('consulta');
    } else {
      addBotMessage('❌ Opción no válida. Por favor selecciona 1, 2, 3, 4 o 0.');
    }
  };

  const handleConsultaDeportiva = (input) => {
    const opciones = {
      '1': 'Busco mejor rendimiento deportivo',
      '2': 'Quiero aumentar mi masa muscular',
      '3': 'Busco prepararme para una competencia',
      '4': 'Deseo un físico atlético'
    };

    if (opciones[input]) {
      addBotMessage(
        `📅 *Agendar Consulta Deportiva*\n\n` +
        `Has seleccionado: *${opciones[input]}*\n\n` +
        `Para agendar tu consulta, contáctanos por WhatsApp:\n\n` +
        `📱 *WhatsApp:* wa.me/5213121051883\n\n` +
        `Menciona que vienes de NutriBot y tu objetivo deportivo.\n\n` +
        `*0.* 🔙 Volver al menú principal`
      );
      setCurrentMenu('main');
    } else if (input === '0') {
      addBotMessage(
        '📅 *Agendar consulta*\n\n' +
        '¿Qué tipo de consulta te interesa?\n\n' +
        '*1.* 👨‍⚕️ Consulta Clínica\n' +
        '*2.* 💅 Consulta Estética\n' +
        '*3.* 🏋️ Consulta Deportiva\n\n' +
        '*0.* 🔙 Volver al menú principal'
      );
      setCurrentMenu('consulta');
    } else {
      addBotMessage('❌ Opción no válida. Por favor selecciona 1, 2, 3, 4 o 0.');
    }
  };

  const handleTipsMenu = (input) => {
    if (input === '0') {
      addBotMessage(
        '🤖 *Menú Principal*\n\n' +
        '*1.* 📅 Agendar consulta\n' +
        '*2.* 💡 Tips de nutrición\n' +
        '*3.* 💧 Calculadora de agua\n' +
        '*4.* 🏃 Calculadora de ejercicio\n' +
        '*5.* 🥩 Calculadora de proteínas\n\n' +
        '👉 *Escribe el número de la opción que deseas*'
      );
      setCurrentMenu('main');
    } else if (tipsData[input]) {
      addBotMessage(
        `💡 *Tip #${input}*\n\n${tipsData[input]}\n\n` +
        `*0.* 🔙 Volver a tips\n` +
        `*00.* 🔙 Volver al menú principal`
      );
      setCurrentMenu('tips');
    } else {
      addBotMessage('❌ Opción no válida. Por favor selecciona un número del 1 al 10.');
    }
  };

  const handleAguaMenu = (input) => {
    if (input === '0') {
      addBotMessage(
        '🤖 *Menú Principal*\n\n' +
        '*1.* 📅 Agendar consulta\n' +
        '*2.* 💡 Tips de nutrición\n' +
        '*3.* 💧 Calculadora de agua\n' +
        '*4.* 🏃 Calculadora de ejercicio\n' +
        '*5.* 🥩 Calculadora de proteínas\n\n' +
        '👉 *Escribe el número de la opción que deseas*'
      );
      setCurrentMenu('main');
      setWaitingForInput(null);
    } else {
      const peso = parseFloat(input);
      if (!isNaN(peso) && peso > 0 && peso < 300) {
        const litrosAgua = (peso * 0.04).toFixed(1);
        addBotMessage(
          `💧 *Resultado*\n\n` +
          `Para tu peso de *${peso} kg*, necesitas consumir aproximadamente:\n\n` +
          `🚰 *${litrosAgua} litros de agua al día*\n\n` +
          `📌 *Tips:*\n` +
          `• ${Math.round(litrosAgua * 4)} vasos de 250ml\n` +
          `• Lleva una botella reutilizable\n` +
          `• Agrega limón, menta o chía para dar sabor\n\n` +
          `*0.* 🔙 Volver al menú principal`
        );
        setCurrentMenu('main');
        setWaitingForInput(null);
      } else {
        addBotMessage('❌ Peso no válido. Por favor ingresa un peso válido (ejemplo: 70)');
      }
    }
  };

  const handleEjercicioMenu = (input) => {
    if (input === '0') {
      addBotMessage(
        '🤖 *Menú Principal*\n\n' +
        '*1.* 📅 Agendar consulta\n' +
        '*2.* 💡 Tips de nutrición\n' +
        '*3.* 💧 Calculadora de agua\n' +
        '*4.* 🏃 Calculadora de ejercicio\n' +
        '*5.* 🥩 Calculadora de proteínas\n\n' +
        '👉 *Escribe el número de la opción que deseas*'
      );
      setCurrentMenu('main');
      setWaitingForInput(null);
    } else {
      const peso = parseFloat(input);
      if (!isNaN(peso) && peso > 0 && peso < 300) {
        const rango = getRangoPeso(peso);
        const minutos = ejercicioData[rango];
        addBotMessage(
          `🏃 *Resultado*\n\n` +
          `Para tu peso de *${peso} kg*, se recomienda:\n\n` +
          `⏱️ *${minutos} minutos de ejercicio diario*\n\n` +
          `📌 *Tips:*\n` +
          `• Empieza con caminatas de ${Math.floor(minutos / 2)} minutos\n` +
          `• Combina cardio y fuerza\n` +
          `• Aumenta intensidad gradualmente\n\n` +
          `*0.* 🔙 Volver al menú principal`
        );
        setCurrentMenu('main');
        setWaitingForInput(null);
      } else {
        addBotMessage('❌ Peso no válido. Por favor ingresa un peso válido (ejemplo: 70)');
      }
    }
  };

  const handleProteinasMenu = (input) => {
    const objetivos = {
      '1': 'Bajar de peso',
      '2': 'Bajar % de grasa',
      '3': 'Mantener mi peso',
      '4': 'Aumentar % músculo'
    };

    if (input === '0') {
      addBotMessage(
        '🤖 *Menú Principal*\n\n' +
        '*1.* 📅 Agendar consulta\n' +
        '*2.* 💡 Tips de nutrición\n' +
        '*3.* 💧 Calculadora de agua\n' +
        '*4.* 🏃 Calculadora de ejercicio\n' +
        '*5.* 🥩 Calculadora de proteínas\n\n' +
        '👉 *Escribe el número de la opción que deseas*'
      );
      setCurrentMenu('main');
    } else if (objetivos[input]) {
      setUserData({ ...userData, objetivo: objetivos[input] });
      addBotMessage(
        `🥩 *Calcular proteínas*\n\n` +
        `Objetivo seleccionado: *${objetivos[input]}*\n\n` +
        `Ahora, ¿cuál es tu peso en kilogramos?\n\n` +
        `*Ejemplo:* 70\n\n` +
        `*0.* 🔙 Volver al menú principal`
      );
      setCurrentMenu('proteinasObjetivo');
      setWaitingForInput('pesoProteinas');
    } else {
      addBotMessage('❌ Opción no válida. Por favor selecciona 1, 2, 3 o 4.');
    }
  };

  const handleProteinasObjetivo = (input) => {
    if (input === '0') {
      addBotMessage(
        '🤖 *Menú Principal*\n\n' +
        '*1.* 📅 Agendar consulta\n' +
        '*2.* 💡 Tips de nutrición\n' +
        '*3.* 💧 Calculadora de agua\n' +
        '*4.* 🏃 Calculadora de ejercicio\n' +
        '*5.* 🥩 Calculadora de proteínas\n\n' +
        '👉 *Escribe el número de la opción que deseas*'
      );
      setCurrentMenu('main');
      setWaitingForInput(null);
      setUserData({});
    } else {
      const peso = parseFloat(input);
      if (!isNaN(peso) && peso > 0 && peso < 300) {
        const rango = getRangoPeso(peso);
        const objetivo = userData.objetivo;
        const proteinasDataObjetivo = proteinasData[objetivo];
        const gramos = proteinasDataObjetivo.ranges[rango];

        addBotMessage(
          `🥩 *Resultado*\n\n` +
          `Para tu objetivo de *${objetivo}* con un peso de *${peso} kg*:\n\n` +
          `🍗 Necesitas consumir *${gramos} gramos de proteína al día*\n\n` +
          `📌 *Ejemplos de alimentos:*\n` +
          `• Pechuga de pollo: 30g proteína/100g\n` +
          `• Huevos: 6g proteína/unidad\n` +
          `• Lentejas: 9g proteína/100g\n` +
          `• Salmón: 20g proteína/100g\n\n` +
          `*0.* 🔙 Volver al menú principal`
        );
        setCurrentMenu('main');
        setWaitingForInput(null);
        setUserData({});
      } else {
        addBotMessage('❌ Peso no válido. Por favor ingresa un peso válido (ejemplo: 70)');
      }
    }
  };

  const processWaitingInput = (input) => {
    if (waitingForInput === 'peso') {
      handleAguaMenu(input);
    } else if (waitingForInput === 'pesoEjercicio') {
      handleEjercicioMenu(input);
    } else if (waitingForInput === 'pesoProteinas') {
      handleProteinasObjetivo(input);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      chatContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full shadow-2xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-110 z-50 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isOpen ? 'Cerrar NutriBot' : 'Habla con NutriBot'}
        </span>
      </button>

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] animate-slide-up">
          <div
            ref={chatContainerRef}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-100 flex flex-col"
            style={{ height: isFullscreen ? '100vh' : '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">NutriBot</h3>
                  <p className="text-xs text-yellow-100">Asistente virtual • En línea</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:bg-white/20 p-1.5 rounded-full transition"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="hover:bg-white/20 p-1.5 rounded-full transition"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`p-3 rounded-2xl whitespace-pre-line ${msg.type === 'user'
                        ? 'bg-yellow-500 text-white rounded-br-none'
                        : 'bg-white border border-gray-200 rounded-bl-none'
                        }`}
                    >
                      {formatMessage(msg.text)}
                    </div>
                    <p className={`text-xs text-gray-400 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe el número de tu opción..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                💡 Escribe solo el número de la opción que deseas (0 para volver)
              </p>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
