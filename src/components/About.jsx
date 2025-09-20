export default function About() {
  return (
    <section id="about" className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FECD5F] mb-6">Conóceme</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Hola, Soy <span className="font-semibold text-[#FECD5F]">Nutrimikee</span> y dedico mis días a transformar la vida de las personas...
        </p>
        <h3 className="text-2xl font-bold text-[#B69F7C] mt-8 mb-4">Formación Académica</h3>
        <ul className="space-y-3">
          <li>🎓 Licenciado en Nutrición - Universidad de Colima (2018)</li>
          <li>🔬 Técnico Analista Clínico - Universidad de Colima (2015)</li>
          <li>📚 Diplomados en composición corporal, dieta cetogénica, nutrición en alto rendimiento, etc.</li>
        </ul>
      </div>
    </section>
  );
}
