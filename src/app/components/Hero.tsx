import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            İşinizi Dönüştürün
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Yapay Zeka Destekli Çözümlerle
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Dünya çapında kurumsal müşteriler için yenilik ve büyüme sağlayan son teknoloji yapay zeka, yazılım geliştirme ve Ar-Ge çözümleri sunuyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-[#0F172A] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
              <span>Ücretsiz Danışmanlık</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
              Demo Talep Et
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">200+</div>
              <div className="text-gray-400 mt-2">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">50+</div>
              <div className="text-gray-400 mt-2">Kurumsal Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">98%</div>
              <div className="text-gray-400 mt-2">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-400 mt-2">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}