import { Award, GitBranch, ShoppingCart, TrendingUp, Code, BarChart3 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();
  const services = [
    { icon: Award },
    { icon: GitBranch },
    { icon: ShoppingCart },
    { icon: TrendingUp },
    { icon: Code },
    { icon: BarChart3 },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            {t('services.intro')}
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
                  {t(`services.s${index + 1}.title`)}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t(`services.s${index + 1}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}