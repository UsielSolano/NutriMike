import React from "react";

const specialties = [
  {
    title: "Nutrición Clínica",
    items: [
      "Anemias", "Diabetes mellitus", "Hipertensión arterial",
      "Enfermedad renal", "Obesidad / Sobrepeso", "SOPQ",
      "Hígado graso", "Cáncer de mama / prostático"
    ]
  },
  {
    title: "Nutrición Estética",
    items: [
      "Post Liposucción", "Post Bypass", "Post Manga gástrica",
      "Post Abdominoplastia", "Post Balón gástrico", "Sobrepeso / Obesidad"
    ]
  },
  {
    title: "Nutrición Deportiva",
    items: [
      "Aumento de masa muscular", "Preparación para competencias",
      "Entrenamientos de alto rendimiento", "Pesaje deportivo",
      "Planes de reactivación física"
    ]
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-16 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#412904] mb-12">
          Áreas de Especialidad
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((spec, index) => (
            <div
              key={index}
              className="bg-[#b69f7c] text-[#412904] rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{spec.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {spec.items.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
