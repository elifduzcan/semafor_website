import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Yapay Zeka Destekli Analitik Platformu",
      category: "Yapay Zeka",
      description: "Kurumsal müşteriler için günlük 10 milyonun üzerinde veri noktasını işleyen gerçek zamanlı tahmine dayalı analitik gösterge paneli.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4OTAwNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Makine Öğrenimi", "Bulut", "Python"],
    },
    {
      title: "Akıllı Fabrika IoT Sistemi",
      category: "Nesnelerin İnterneti",
      description: "Gerçek zamanlı izleme için üretim tesislerindeki 500'den fazla sensörü birbirine bağlayan entegre IoT çözümü.",
      image: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2ODk2MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["IoT", "Edge Computing", "React"],
    },
    {
      title: "Mobil Bankacılık Uygulaması",
      category: "Mobil Geliştirme",
      description: "2 milyondan fazla aktif kullanıcıya hizmet veren biyometrik kimlik doğrulamalı güvenli, zengin özellikli bankacılık uygulaması.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Güvenlik", "UX"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Öne Çıkan Projeler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sektörler genelinde dönüştürücü çözümler sunuyoruz
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0F172A] px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium group/link">
                  <span>Projeyi Görüntüle</span>
                  <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}