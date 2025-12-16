import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', formData);
    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
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

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      titulo: 'Email',
      info: 'contacto@nutrimikee.com',
      descripcion: 'Respuesta en 24 horas',
      link: 'mailto:contacto@nutrimikee.com'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      titulo: 'Teléfono',
      info: '+52 312 123 4567',
      descripcion: 'Lun - Vie: 9:00 AM - 6:00 PM',
      link: 'tel:+523121234567'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      titulo: 'Ubicación',
      info: 'Colima, Colima',
      descripcion: 'México',
      link: '#'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      titulo: 'Horario',
      info: 'Lunes - Viernes',
      descripcion: '9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  const socialMedia = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: 'Facebook',
      link: '#'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      link: '#'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'WhatsApp',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.titulo}
              </h3>
              <p className="text-gray-800 font-semibold mb-1">
                {item.info}
              </p>
              <p className="text-sm text-gray-600">
                {item.descripcion}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>

            {enviado ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600">
                  Te responderemos pronto
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
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
                  <label className="block text-gray-700 font-semibold mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          {/* Mapa y Redes Sociales */}
          <div className="space-y-6">

            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120819.14172471558!2d-103.78033445!3d19.2452342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255aab7e7891c7%3A0x754b1083b7b2c146!2sColima%2C%20Col.!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Ubicación Nutrimikee"
              />
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Síguenos en redes
              </h3>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-100 hover:bg-yellow-200 w-14 h-14 rounded-full flex items-center justify-center text-yellow-600 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Mantente al día con tips de nutrición, recetas saludables y más contenido exclusivo
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Preguntas frecuentes?
              </h3>
              <p className="mb-6 opacity-90">
                Antes de contactarnos, revisa nuestra sección de preguntas frecuentes
              </p>
              <button className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Ver FAQ
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
