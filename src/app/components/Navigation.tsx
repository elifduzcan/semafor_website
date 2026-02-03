import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { t } = useTranslation();

  const menuItems = [
    { label: t('nav.home'), href: "#hero" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center" aria-label="Semafor Teknoloji">
              <img src="/logo.png" alt="Semafor Teknoloji" className="h-24 w-auto rounded-md" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const href = location.pathname === "/" ? item.href : `/${item.href}`;
              return (
                <a
                  key={item.label}
                  href={href}
                  className="text-lg font-bold text-gray-700 hover:text-[#0F172A] transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#0F172A] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
              {menuItems.map((item) => {
              const href = location.pathname === "/" ? item.href : `/${item.href}`;
              return (
                <a
                  key={item.label}
                  href={href}
                  className="block px-4 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#0F172A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="px-4 pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}