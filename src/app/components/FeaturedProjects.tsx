import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Yoğun Bakım Otomasyonu ve Karar Destek Sistemi",
      description: "Hazırlanan Karar Destek Sistemi sayesinde önceden oluşabilecek durumların tespiti yapılıp ona göre tedavi şekli ve sürecinin değişiminde hekime yol gösterici bir sistem gerçekleştirilmiştir.",
      image: "/yoğun bakım.jpg",
    },
    {
      title: "Reflü Karar Destek Sistemi",
      description: "Ege Üniversitesi Reflü Kliniği için otomasyon sistemi geliştirilerek hasta durumları ayrıntılı olarak raporlanmıştır. Ege Üniversitesi Reflü Kliniği verileri analiz edilerek doktorlara yol gösterici sistem geliştirilmiştir.",
      image: "/reflü.jpg",
    },
    {
      title: "KLEPI",
      description: "Şark çıbanı hastalığına ait formlar digital ortama taşınarak veri kaybının önüne geçilmiştir. Aynı zamanda hazırlanan web sitesi üzerinden hastalıkla ilgili dokumanlar kullanıcılara sunulmuştur.",
      image: "/klepi.jpg",
    },
    {
      title: "Bulut Bilişim Tabanlı Tahminleme Aracı",
      description: "KOBİ ölçekli firmalar için bulut bilişim tekniklerine dayalı, çok fonksiyonlu tahminleme aracı ile firma çalışanlarının veri madenciliği hakkında bilgiye sahip olmadan bilgi keşfi yapabilmeleri sağlanmıştır.",
      image: "/bulut bilişim.jpg",
    },
    {
      title: "OT/VT Destekli Müşteri Ürün Yönetimi ve Öneri Sistemi",
      description: "RFID teknolojisi kullanılarak geliştirilen Karar Destek Mekanizması ile hem geleceğe yönelik satış ve siparişlerin planlanması hem de müşteriler için öneriler geliştirilmiştir.",
      image: "/ot-vt.jpg",
    },
    {
      title: "DEMETER Karar Destek Sistemi",
      description: "Firmanın gıda üretim analizleri gerçekleştirilmiştir. Firmanın hammadde tedarikçilerinin puanlanması, üretim verimlilik, ürün iade, hammadde zayiat, ürün zayiat analizleri gerçekleştirilerek firmaya sonuçlar aktarılmıştır.",
      image: "/demeter.jpg",
    },
    {
      title: "Sixt Rent A Car Hasar Takip Sistemi",
      description: "Hasar ve kazaya ait görüntülerin mobil cihazlar yardımıyla depolanması ve sigorta bilgilerinin sisteme aktarılması ile süreçlerinin takip edilmesi sağlanmıştır. Süreçler ayrıntılı olarak raporlanmıştır.",
      image: "/sixt rent.jpg",
    },
    {
      title: "Asansör Denetim Sistemi",
      description: "Asansör denetimlerinden çıkan sonuçlar veri madenciliği yöntemleri ile analiz edilerek, hangi firma daha iyi, hangi marka asansör alınmalı gibi sorulara cevap üretilmiş ve analiz sonuçları firmaya servis ile açılmıştır.",
      image: "/asansör denetim.jpg",
    },
    {
      title: "Sixt Rent A Car CRM",
      description: "Veri madenciliği destekli yönetim sistemi ile müşterilerin puan kazanması, puan harcaması ve harcamadıkları puanların silinmesi sağlanmıştır. Müşterilerin çeşitli özelliklere göre önem sıraları ve profilleri belirlenmiştir.",
      image: "/sixt rent a car crm.jpg",
    },
    {
      title: "Adapa Marina İzleme Sistemi",
      description: "Marina içerisindeki teknelerin limana giriş çıkış hareketleri, kara ve denizdeki konumları bluetooth, kablosuz algılayıcı ağları gibi teknolojiler ile izlenmiştir. Teknelerin bakım ve onarım süreçleri takip edilmiştir.",
      image: "/adapa marina.jpg",
    },
    {
      title: "Doküman Yönetim Sistemi",
      description: "Kurumsal içerik yönetimi platformu, kağıda dayalı iş süreçlerinin kesintisiz, her yönden otomasyonla tam entegre bir ortama dönüştürülmesini sağlar. Belge, form ve süreç yönetim sistemi, belge takibi, kayıt yönetimi, arşiv yönetimi, belge yönetimi, iş akışı yönetimi ve form yönetimi için eksiksiz bir web tabanlı sistem sunar. ",
      image: "/doküman1.png",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Projelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Farklı sektörlerde gerçekleştirdiğimiz başarılı projeler
          </p>
        </div>

        {/* Projects Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}