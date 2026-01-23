import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ChevronRight, Sparkles, Shield, Zap } from 'lucide-react';
import AboutmeImage from "../../assets/consult.jpg";
import backAgenda from "../../assets/backAgenda.jpg";

export default function Consulta() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    tipoConsulta: 'online',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario: no enviado ', formData);
    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        tipoConsulta: 'online',
        mensaje: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp message template
  const whatsappMessage = `¡Hola! Solicito una cita. Mis datos son:%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Email:* ${formData.email}%0A*Fecha preferente:* ${formData.fecha}%0A*Hora preferente:* ${formData.hora}%0A*Tipo de consulta:* ${formData.tipoConsulta}%0A*Motivo:* ${formData.mensaje}%0A%0AQuedo atento/a a su confirmación. ¡Gracias!`;

  const whatsappLink = `https://wa.me/523121051883?text=${whatsappMessage}`;

  if (enviado) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 flex items-center justify-center relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="text-center relative z-10 max-w-sm sm:max-w-md mx-auto p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-yellow-100 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full mb-4 sm:mb-6 animate-scale-in">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 animate-pulse" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#3d2817] mb-2 sm:mb-3">¡Solicitud enviada!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Nos pondremos en contacto contigo pronto para confirmar tu cita.</p>
          <div className="inline-flex items-center text-xs sm:text-sm text-yellow-600">
            <span>Redirigiendo...</span>
            <div className="ml-2 flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 mt-5 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header con imagen de fondo - Responsive mejorado */}
        <div className="relative mb-8 sm:mb-12 mt-4 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${AboutmeImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d2817]/95 via-[#3d2817]/90 to-[#3d2817]/95"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Texto principal - Mobile First */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100/20 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 border border-yellow-200/30 mx-auto lg:mx-0">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-100" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  Agenda Tu Consulta <br className="hidden sm:block" />
                  <span className="text-yellow-100 block sm:inline">Personalizada</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-yellow-100/90 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Da el primer paso hacia una vida más saludable con nuestro equipo de expertos en nutrición
                </p>
                
                {/* Llamado a la acción móvil */}
                <div className="lg:hidden mb-6">
                  <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-yellow-100/80 text-xs sm:text-sm">Asistencia inmediata</p>
                      <p className="text-white text-sm sm:text-base font-bold">+52 312 105 1883</p>
                    </div>
                  </div>
                </div>

                {/* Llamado a la acción desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-yellow-100/80 text-sm">Asistencia inmediata</p>
                    <p className="text-white text-lg font-bold">+52 312 105 1883</p>
                  </div>
                </div>
              </div>

              {/* Beneficios en el background - Responsive Grid */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/20">
                    Beneficios de tu consulta
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">100% Personalizada</h4>
                        <p className="text-yellow-100/70 text-xs">Plan único para ti</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">Horarios Flexibles</h4>
                        <p className="text-yellow-100/70 text-xs">Adaptado a tu rutina</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">Seguimiento</h4>
                        <p className="text-yellow-100/70 text-xs">Acompañamiento total</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">Confirmación Rápida</h4>
                        <p className="text-yellow-100/70 text-xs">En menos de 24h</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                    <p className="text-yellow-100/80 text-xs sm:text-sm text-center italic">
                      "Primera consulta informativa sin compromiso"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de progreso para móvil */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-8 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-2">Completa el formulario para agendar</p>
        </div>

        {/* Formulario con background backAgenda - MÁS VISIBLE */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          {/* Background image con overlay MÁS TRANSPARENTE */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
              style={{ backgroundImage: `url(${backAgenda})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70"></div>
            </div>
          </div>
          
          {/* Contenido del formulario */}
          <div className="relative z-10 p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8 text-center">
              <div className="hidden lg:flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3d2817]">
                  Completa tus datos para agendar
                </h2>
              </div>
              <div className="lg:hidden">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#3d2817] mb-2">Completa tus datos</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Todos los campos marcados con * son obligatorios
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Nombre y Email - Grid Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                    <User className="w-4 h-4 mr-2 text-yellow-600" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. María González"
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                    <Mail className="w-4 h-4 mr-2 text-yellow-600" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@email.com"
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Teléfono y Fecha - Grid Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                    <Phone className="w-4 h-4 mr-2 text-yellow-600" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    maxLength={10}
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 123 456 7890"
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-600" />
                    Fecha preferida *
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-[#3d2817] text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Hora y Tipo de Consulta - Grid Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                    <Clock className="w-4 h-4 mr-2 text-yellow-600" />
                    Hora preferida *
                  </label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-[#3d2817] text-sm sm:text-base"
                    required
                  >
                    <option value="" className="text-gray-400">Selecciona una hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[#3d2817] font-semibold text-sm sm:text-base block">
                    Tipo de consulta *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <label className={`flex-1 flex items-center justify-center p-3 sm:p-4 border rounded-lg cursor-pointer transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === 'online'
                        ? 'border-yellow-500 bg-yellow-100/90 text-yellow-700 shadow-sm'
                        : 'border-gray-200 bg-white/90 hover:bg-white text-gray-700'
                    }`}>
                      <input
                        type="radio"
                        name="tipoConsulta"
                        value="online"
                        checked={formData.tipoConsulta === 'online'}
                        onChange={handleChange}
                        className="mr-2 sm:mr-3"
                        required
                      />
                      <span className="whitespace-nowrap">Consulta Online</span>
                    </label>
                    <label className={`flex-1 flex items-center justify-center p-3 sm:p-4 border rounded-lg cursor-pointer transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === 'presencial'
                        ? 'border-yellow-500 bg-yellow-100/90 text-yellow-700 shadow-sm'
                        : 'border-gray-200 bg-white/90 hover:bg-white text-gray-700'
                    }`}>
                      <input
                        type="radio"
                        name="tipoConsulta"
                        value="presencial"
                        checked={formData.tipoConsulta === 'presencial'}
                        onChange={handleChange}
                        className="mr-2 sm:mr-3"
                        required
                      />
                      <span className="whitespace-nowrap">Consulta Presencial</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Mensaje - Responsive */}
              <div className="space-y-2">
                <label className="flex items-center text-[#3d2817] font-semibold text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 mr-2 text-yellow-600" />
                  Motivo de consulta / Comentarios (opcional)
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/90 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                  placeholder="Cuéntanos sobre tus objetivos, necesidades específicas, alergias o condiciones especiales..."
                ></textarea>
              </div>

              {/* Botón de envío - Responsive */}
              <div className="pt-4 sm:pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-yellow-100 hover:bg-yellow-200 text-[#3d2817] px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-center text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg border-2 border-yellow-200 hover:border-yellow-300 flex items-center justify-center active:scale-95 hover:scale-[1.02]"
                >
                  <span className="truncate">Enviar solicitud por WhatsApp</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Nota informativa - Responsive */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-100/90 rounded-lg border border-yellow-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-50 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Al hacer clic serás redirigido a WhatsApp para confirmar tu cita. Recibirás respuesta en menos de 24 horas.
                    </p>
                  </div>
                </div>

                {/* Indicadores de seguridad para móvil */}
                <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="text-xs text-gray-600">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Shield className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Datos protegidos</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Zap className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Confirmación rápida</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer informativo para móvil */}
        <div className="lg:hidden mt-6 text-center">
          <p className="text-xs text-gray-600">¿Necesitas ayuda? Llama al +52 312 105 1883</p>
          <p className="text-xs text-gray-500 mt-1">Horario de atención: Lunes a Viernes 9:00 - 18:00</p>
        </div>
      </div>

      {/* Añadir animaciones al CSS global */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
