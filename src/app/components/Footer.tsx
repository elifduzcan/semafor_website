import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Hizmetler", href: "#services" },
    { label: "Projeler", href: "#projects" },
    { label: "Hakkımızda", href: "#about" },
    { label: "İletişim", href: "#contact" },
  ];

  const services = [
    { label: "Tübitak Projeleri", href: "#services" },
    { label: "Karar Destek Sistemleri", href: "#services" },
    { label: "Pazarlama Çözümleri", href: "#services" },
    { label: "İş Analizleri", href: "#services" },
    { label: "Yazılım Danışmanlık", href: "#services" },
    { label: "Veri Bilimi", href: "#services" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/semafor-teknoloji/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/semafor.teknoloji/", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-lg font-semibold">Semafor Teknoloji</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              2014'ten beri işletmeleri son teknoloji yapay zeka ve yazılım çözümleriyle güçlendiriyoruz.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@semaforteknoloji.com" className="text-gray-400 hover:text-white transition-colors">
                  bilgi@semaforteknoloji.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+902121234567" className="text-gray-400 hover:text-white transition-colors">
                  +90 232 412 80 48
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Mithatpaşa Caddesi Dokuz Eylül Üniversitesi İnciraltı Yerleşkesi No:56/20 Depark Sağlık Zeytin Binası Ofis:205 Balçova / İZMİR
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}