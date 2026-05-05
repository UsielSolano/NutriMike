import React, { useState } from 'react';
import { BookOpen, Video, FileText, Award, X, File, Eye, Youtube } from 'lucide-react';
import TestimoniosCarrusel from './videos/TestimoniosCarrusel'
import backAgenda from "../../assets/backAgenda.jpg";
import Footer from '../home/Footer';

// Importa los PDFs directamente
import pdf1 from "../../assets/1.pdf";
import pdf2 from "../../assets/2.pdf";
import pdf3 from "../../assets/3.pdf";
import pdf4 from "../../assets/4.pdf";
import pdf5 from "../../assets/5.pdf";
import pdf6 from "../../assets/6.pdf";
import pdf7 from "../../assets/7.pdf";
import pdf8 from "../../assets/8.pdf";
import pdf9 from "../../assets/9.pdf";
import pdf10 from "../../assets/10.pdf";
import pdf11 from "../../assets/11.pdf";
import pdf12 from "../../assets/12.pdf";
import pdf13 from "../../assets/13.pdf";

export default function Contenido() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [visorAbierto, setVisorAbierto] = useState(false);
  const [pdfsActuales, setPdfsActuales] = useState([]);
  const [tituloSeccion, setTituloSeccion] = useState('');
  const [pdfSeleccionado, setPdfSeleccionado] = useState(null);
  const [nombrePdfSeleccionado, setNombrePdfSeleccionado] = useState('');

  // Mapeo de PDFs por sección
  const pdfsPorSeccion = {
    "Artículos": [
      { nombre: "No es gula es el síndrome del comedor nocturno", archivo: pdf1 },
      { nombre: "El sedentarismo de la vida moderna", archivo: pdf2 },
      { nombre: "La diabetes mellitus como enfermedad del siglo", archivo: pdf3 },
      { nombre: "Cortisol la hormona del mal comer", archivo: pdf4 }
    ],
    "Guías Descargables": [
      { nombre: "ADEREZOS Y VINAGRETAS", archivo: pdf5 },
      { nombre: "BEBIDAS ALCOHOLICAS", archivo: pdf6 },
      { nombre: "STARBUCKS COFFEE", archivo: pdf7 },
      { nombre: "EQUIVALENCIAS NUTRICIONALES", archivo: pdf8 },
      { nombre: "ESPECIERO MARINAJES", archivo: pdf9 }
    ],
    "Cursos Online": [
      { nombre: "Conceptos básicos", archivo: pdf10 },
      { nombre: "ENSALADAS CREATIVAS", archivo: pdf11 },
      { nombre: "Etiquetado nutricional", archivo: pdf12 },
      { nombre: "GUIAS ALIMENTARIAS Y NORMATIVAS", archivo: pdf13 }
    ]
  };

  const abrirModal = (titulo) => {
    if (titulo === "Videos Educativos") {
      window.open("https://www.youtube.com/channel/UCYr2nyRX_oxFnNF0oROuuHA", "_blank");
      return;
    }
    setTituloSeccion(titulo);
    setPdfsActuales(pdfsPorSeccion[titulo] || []);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setPdfsActuales([]);
    setTituloSeccion('');
  };

  const abrirVisorPDF = (pdf, nombre) => {
    setPdfSeleccionado(pdf);
    setNombrePdfSeleccionado(nombre);
    setVisorAbierto(true);
    setModalAbierto(false);
  };

  const cerrarVisorPDF = () => {
    setVisorAbierto(false);
    setPdfSeleccionado(null);
    setNombrePdfSeleccionado('');
    setModalAbierto(true);
  };

  const volverALista = () => {
    setVisorAbierto(false);
    setPdfSeleccionado(null);
    setNombrePdfSeleccionado('');
  };

  const contenidos = [
    {
      icon: <Video className="w-8 h-8" />,
      titulo: "Videos Educativos",
      descripcion: "Aprende sobre nutrición con nuestros videos explicativos en YouTube",
      items: ["Recetas saludables", "Tips nutricionales", "Ejercicios"],
      esYoutube: true
    },
    {
      icon: <FileText className="w-8 h-8" />,
      titulo: "Artículos",
      descripcion: "Lee nuestros artículos sobre nutrición y bienestar",
      items: ["Nutrición deportiva", "Alimentación infantil", "Dietas especiales"],
      esYoutube: false
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      titulo: "Guías Descargables",
      descripcion: "Descarga guías prácticas para tu día a día",
      items: ["Plan de comidas", "Lista de compras", "Recetarios"],
      esYoutube: false
    },
    {
      icon: <Award className="w-8 h-8" />,
      titulo: "Cursos Online",
      descripcion: "Aprende a tu ritmo con nuestros cursos certificados",
      items: ["Básicos de nutrición", "Cocina saludable", "Lectura de etiquetas"],
      esYoutube: false
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 drop-shadow-lg">
            Contenido Educativo
          </h1>
          <p className="text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto drop-shadow">
            Descubre nuestros recursos educativos diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar
          </p>
        </div>

        {/* Grid de contenidos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contenidos.map((contenido, index) => (
            <div
              key={index}
              className="relative bg-[#ffffffe5] rounded-2xl shadow-2xl p-8 hover:shadow-2xl hover:bg-[#ffffffe5] transition-all duration-300 hover:-translate-y-1 border border-yellow-100/30"
            >
              <div className="relative bg-[#fcfcfc63] z-10">
                {/* Ícono — rojo si es YouTube, amarillo para el resto */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-r ${
                  contenido.esYoutube
                    ? "from-red-500 to-red-600"
                    : "from-yellow-500 to-yellow-600"
                }`}>
                  {contenido.esYoutube ? <Youtube className="w-8 h-8" /> : contenido.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {contenido.titulo}
                </h3>
                <p className="text-gray-700 mb-6">
                  {contenido.descripcion}
                </p>

                <ul className="space-y-2">
                  {contenido.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className={`w-2 h-2 rounded-full mr-3 ${
                        contenido.esYoutube ? "bg-red-500" : "bg-yellow-500"
                      }`}></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Botón — rojo con ícono de YouTube si aplica */}
                <button
                  onClick={() => abrirModal(contenido.titulo)}
                  className={`mt-6 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 bg-gradient-to-r ${
                    contenido.esYoutube
                      ? "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                      : "from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                  }`}
                >
                  {contenido.esYoutube && <Youtube className="w-5 h-5" />}
                  {contenido.esYoutube ? "Ver en YouTube" : "Ver más"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de lista de PDFs */}
        {modalAbierto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {tituloSeccion} - Documentos Disponibles
                </h2>
                <button
                  onClick={cerrarModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid gap-4">
                  {pdfsActuales.map((pdf, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <File className="w-8 h-8 text-yellow-600" />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {pdf.nombre}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Documento PDF - Listo para leer
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => abrirVisorPDF(pdf.archivo, pdf.nombre)}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Leer PDF</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <button
                  onClick={cerrarModal}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Visor de PDF integrado */}
        {visorAbierto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {nombrePdfSeleccionado}
                  </h2>
                  <p className="text-yellow-100 text-sm">Visor de documentos</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={volverALista}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <span>Volver a lista</span>
                  </button>
                  <button
                    onClick={cerrarVisorPDF}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-gray-100">
                <iframe
                  src={pdfSeleccionado}
                  className="w-full h-full"
                  title={`Visor PDF - ${nombrePdfSeleccionado}`}
                  style={{ border: 'none' }}
                />
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Puedes leer el documento directamente en esta ventana
                </p>
                <a
                  href={pdfSeleccionado}
                  download
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <span>Descargar PDF</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Sección destacada */}
        <div
          className="relative rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden mb-16 shadow-2xl bg-[#3d2817e7] border border-yellow-500/20"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-yellow-100">
              Accede a todo nuestro contenido exclusivo y comienza tu viaje hacia una vida más saludable
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Explorar todo el contenido
            </button>
          </div>
        </div>

        <div className="bg-[#ffffff21] rounded-2xl shadow-2xl p-6 border border-yellow-100/30">
          <TestimoniosCarrusel />
        </div>
      </div>
      <Footer />
    </div>
  );
}
