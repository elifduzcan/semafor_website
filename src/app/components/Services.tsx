import { Brain, Cpu, FlaskConical, Smartphone } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Yapay Zeka Çözümleri",
      description: "İş süreçlerinizi optimize etmek ve akıllı karar vermeyi sağlamak için gelişmiş makine öğrenimi modelleri ve yapay zeka destekli otomasyon.",
    },
    {
      icon: Cpu,
      title: "IoT Çözümleri",
      description: "Donanım entegrasyonu, bulut bağlantısı ve gerçek zamanlı veri analitiği dahil uçtan uca IoT geliştirme hizmetleri.",
    },
    {
      icon: FlaskConical,
      title: "Ar-Ge Hizmetleri",
      description: "Kanıtlanmış metodolojilerle son teknoloji fikirlerinizi hayata geçirmek için yenilikçi araştırma ve geliştirme çözümleri.",
    },
    {
      icon: Smartphone,
      title: "Web ve Mobil Geliştirme",
      description: "iOS ve Android için duyarlı web uygulamaları ve native mobil uygulamalar oluşturan full-stack geliştirme hizmetleri.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İş ihtiyaçlarınıza özel kapsamlı teknoloji çözümleri
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}