  import React, { useState } from 'react';
  import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ChevronRight } from 'lucide-react';
  import AboutmeImage from "../../assets/consult.jpg";

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
        <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="text-center relative z-10 max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-yellow-100">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#3d2817] mb-3">¡Solicitud enviada!</h2>
            <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo pronto para confirmar tu cita.</p>
            <div className="inline-flex items-center text-sm text-yellow-600">
              <span>Redirigiendo...</span>
              <div className="ml-2 flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-yellow-50/30 via-white to-yellow-50/20">
        <div className="max-w-6xl mx-auto">
          {/* Header con imagen de fondo y beneficios superpuestos */}
          <div className="relative mb-12 mt-8 overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${AboutmeImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3d2817]/95 via-[#3d2817]/90 to-[#3d2817]/95"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Texto principal */}
                <div className="text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100/20 backdrop-blur-sm rounded-2xl mb-6 border border-yellow-200/30">
                    <Calendar className="w-8 h-8 text-yellow-100" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Agenda Tu Consulta <br />
                    <span className="text-yellow-100">Personalizada</span>
                  </h1>
                  <p className="text-lg text-yellow-100/90 mb-8 leading-relaxed">
                    Da el primer paso hacia una vida más saludable con nuestro equipo de expertos en nutrición
                  </p>
                  
                  {/* Llamado a la acción */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-yellow-100/80 text-sm">Asistencia inmediata</p>
                      <p className="text-white text-lg font-bold">+52 312 105 1883</p>
                    </div>
                  </div>
                </div>

                {/* Beneficios en el background */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/20">Beneficios de tu consulta</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Personalizada</h4>
                        <p className="text-yellow-100/70 text-xs">Plan único para ti</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <Clock className="w-5 h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Flexible</h4>
                        <p className="text-yellow-100/70 text-xs">Horarios adaptables</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <MessageSquare className="w-5 h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Seguimiento</h4>
                        <p className="text-yellow-100/70 text-xs">Acompañamiento total</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-100/20 rounded-lg flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-yellow-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Rápido</h4>
                        <p className="text-yellow-100/70 text-xs">Confirmación en 24h</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="text-yellow-100/80 text-sm text-center italic">
                      "Primera consulta informativa sin compromiso"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-[#5b3f29a4] rounded-2xl shadow-xl p-8 md:p-10 border ">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#ffffff] mb-2">Completa tus datos para agendar</h2>
              <p className="text-gray-300">(Todos los campos marcados con * son obligatorios)</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                    <User className="w-4 h-4 mr-2 text-yellow-200" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. María González"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                    <Mail className="w-4 h-4 mr-2 text-yellow-200" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@email.com"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Teléfono */}
                <div>
                  <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                    <Phone className="w-4 h-4 mr-2 text-yellow-200" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    maxLength={10}
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 123 456 7890"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                {/* Fecha */}
                <div>
                  <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-200" />
                    Fecha preferida *
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-[#3d2817]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Hora */}
                <div>
                  <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                    <Clock className="w-4 h-4 mr-2 text-yellow-200" />
                    Hora preferida *
                  </label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all text-[#3d2817]"
                    required
                  >
                    <option value="">Selecciona una hora</option>
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

                {/* Tipo de consulta */}
                <div>
                  <label className="text-[#ffffff] font-semibold mb-3 block">
                    Tipo de consulta *
                  </label>
                  <div className="flex space-x-4">
                    <label className={`flex-1 flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.tipoConsulta === 'online'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}>
                      <input
                        type="radio"
                        name="tipoConsulta"
                        value="online"
                        checked={formData.tipoConsulta === 'online'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <span>Consulta Online</span>
                    </label>
                    <label className={`flex-1 flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.tipoConsulta === 'presencial'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}>
                      <input
                        type="radio"
                        name="tipoConsulta"
                        value="presencial"
                        checked={formData.tipoConsulta === 'presencial'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <span>Consulta Presencial</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="flex items-center text-[#ffffff] font-semibold mb-3">
                  <MessageSquare className="w-4 h-4 mr-2 text-yellow-200" />
                  Motivo de consulta / Comentarios (opcional)
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Cuéntanos sobre tus objetivos, necesidades específicas, alergias o condiciones especiales..."
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Botón de envío */}
              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full bg-yellow-100 hover:bg-yellow-200 text-[#3d2817] px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center text-lg shadow-md hover:shadow-lg border-2 border-yellow-200 hover:border-yellow-300 flex items-center justify-center"
                >
                  <span>Enviar solicitud de cita por WhatsApp</span>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-gray-600">
                      Al hacer clic en "Enviar solicitud de cita", serás redirigido a WhatsApp para confirmar tu cita. 
                      Recibirás una respuesta en menos de 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
