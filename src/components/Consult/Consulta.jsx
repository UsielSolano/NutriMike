import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
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
  const whatsappLink = "https://wa.me/523121051883?text=Hola%2C%20estoy%20interesado%20en%20cambiar%20mis%20h%C3%A1bitos%20alimenticios";
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

  if (enviado) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Solicitud enviada!</h2>
          <p className="text-lg text-gray-600">Nos pondremos en contacto contigo pronto</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Agendar Consulta
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y agenda tu consulta personalizada con nuestro equipo de nutricionistas
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Flexible</h3>
            <p className="text-sm text-gray-600">Elige el horario que mejor te convenga</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Personalizada</h3>
            <p className="text-sm text-gray-600">Plan nutricional adaptado a ti</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Rápida</h3>
            <p className="text-sm text-gray-600">Respuesta en menos de 24 horas</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <User className="w-5 h-5 mr-2 text-yellow-600" />
                Nombre completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="tu nombre"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Email y Teléfono */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Mail className="w-5 h-5 mr-2 text-yellow-600" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Phone className="w-5 h-5 mr-2 text-yellow-600" />
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  maxLength={10}
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+52 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Fecha y Hora */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
                  Fecha preferida *
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                  Hora preferida *
                </label>
                <select
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
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
            </div>

            {/* Tipo de consulta */}
            <div>
              <label className="text-gray-700 font-semibold mb-3 block">
                Tipo de consulta *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition ${formData.tipoConsulta === 'online'
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-300 hover:border-yellow-300'
                  }`}>
                  <input
                    type="radio"
                    name="tipoConsulta"
                    value="online"
                    checked={formData.tipoConsulta === 'online'}
                    onChange={handleChange}
                    className="mr-3"
                    required
                  />
                  <span className="font-semibold">Consulta Online</span>
                </label>
                <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition ${formData.tipoConsulta === 'presencial'
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-300 hover:border-yellow-300'
                  }`}>
                  <input
                    type="radio"
                    name="tipoConsulta"
                    value="presencial"
                    checked={formData.tipoConsulta === 'presencial'}
                    onChange={handleChange}
                    className="mr-3"
                    required
                  />
                  <span className="font-semibold">Consulta Presencial</span>
                </label>
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-yellow-600" />
                Motivo de consulta / Comentarios. (*opcional)
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                placeholder="Cuéntanos brevemente sobre tus objetivos o necesidades..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Botón de envío */}
            <a
              href={whatsappLink + 
  "¡Hola! Solicito una cita. Mis datos son:%0A%0A" +
  "*Nombre:* " + formData.nombre + "%0A" +
  "*Teléfono:* " + formData.telefono + "%0A" +
  "*Email:* " + formData.email + "%0A" +
  "*Fecha preferente:* " + formData.fecha + "%0A" +
  "*Hora prederete :* " + formData.hora+ "%0A" +
  "*Tipo de consulta:* " + formData.tipoConsulta + "%0A" +
  "*Motivo:* " + formData.mensaje + "%0A%0A" +
  "Quedo atento/a a su confirmación. ¡Gracias!"}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-yellow-100 text-[#3d2817] px-6 py-2 rounded-full font-semibold hover:bg-[#f5f5f5] transition text-center text-base"
            >
              Agenda tu cita
            </a>


            <p className="text-sm text-gray-500 text-center">
              * Campos obligatorios. Nos pondremos en contacto contigo para confirmar tu cita.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
