import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.contact'), href: "#contact" },
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
              <span className="text-lg font-semibold">{t('footer.company')}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.about')}
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
            <h4 className="font-semibold text-lg mb-6">{t('footer.quickLinks')}</h4>
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
            <h4 className="font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s1.title')}</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s2.title')}</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s3.title')}</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s4.title')}</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s5.title')}</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">{t('services.s6.title')}</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:bilgi@semaforteknoloji.com" className="text-gray-400 hover:text-white transition-colors">
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
                  {t('footer.address')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}