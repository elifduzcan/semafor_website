import { Award, GitBranch, ShoppingCart, TrendingUp, Code, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Award,
      title: "Tübitak Projeleri",
      description: "Yenilikçi ve yaratıcı projeler ortaya koyarak geleceğe ışık tutuyoruz.",
    },
    {
      icon: GitBranch,
      title: "Karar Destek Sistemleri",
      description: "Veri madenciliği ve yapay zeka ile bilişim tekniklerine dayalı, çok fonksiyonlu tahminleme projeleri üretiyoruz.",
    },
    {
      icon: ShoppingCart,
      title: "Pazarlama Çözümleri",
      description: "Projelerimizle müşteri segmentasyonu, satış ve pazarlama kampanyası yönetimi yapıyoruz.",
    },
    {
      icon: TrendingUp,
      title: "İş Analizleri",
      description: "Geçmiş verilerinizi analiz ederek geleceğe yönelik anlamlı tahminler yapabilmesini sağlıyoruz.",
    },
    {
      icon: Code,
      title: "Yazılım Danışmanlık",
      description: "Enerji, giyim, parekende, gıda gibi pek çok alanda yazılım hizmeti veriyoruz.",
    },
    {
      icon: BarChart3,
      title: "Veri Bilimi",
      description: "Verilerden değer elde etmek üzere bilimsel yöntemleri, süreçleri, algoritmaları ve sistemleri kullanıyoruz.",
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            Her türlü yenilik ve gelişmeyi sürekli takip eden firmamız %100 müşteri memnuniyetini temel ilke tutarak Karar Destek Sistemleri, Yazılım Danışmanlık ve AR-GE alanlarında faaliyet göstermektedir.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {service.title}
                </h3>
              </div>
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