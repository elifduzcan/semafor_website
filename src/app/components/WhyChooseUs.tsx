import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      title: "Teknopark Köklü Yapı",
      description: "2014 yılında KOSGEB Ar-Ge İnovasyon desteği ile Dokuz Eylül Üniversitesi Sağlık Teknoparkı bünyesinde kurulduk.",
    },
    {
      title: "Müşteri Memnuniyeti Odaklı",
      description: "Yapılan tüm çalışmalarda %100 müşteri memnuniyeti ilke edinilmiş olup, beraber çalışılan bütün kurumların güveni kazanılmıştır.",
    },
    {
      title: "Yapay Zeka ve Karar Destek Sistemleri",
      description: "Mevcut problemleri çözmek ve kritik kararlar almak için yapay zeka, makine öğrenmesi ve karar destek sistemi projeleri geliştiriyoruz.",
    },
    {
      title: "AR-GE Uzmanlığı",
      description: "TÜBİTAK ve KOSGEB destekli katma değeri yüksek AR-GE projeleri ile Yapay Zeka ve Sağlık alanında yenilikçi çözümler üretiyoruz.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Semafor Teknoloji, 2014 yılında KOSGEB Ar-Ge İnovasyon desteği ile Dokuz Eylül Üniversitesi Sağlık Teknoparkı bünyesinde kurulmuştur. Yapılan tüm çalışmalarda müşteri memnuniyeti ilke edinilmiş olup, beraber çalışılan bütün kurumların güveni kazanılmıştır.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3Njg5MjkxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}