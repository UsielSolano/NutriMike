import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import NutriBot from './Nutribot'

export default function NutriBotFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full shadow-2xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Abrir NutriBot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isOpen ? 'Cerrar chat' : 'Habla con NutriBot'}
        </span>
      </button>

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-full animate-slide-up">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <NutriBot />
          </div>
        </div>
      )}
    </>
  );
}
