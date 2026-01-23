export function ClientLogos() {
  // Mock client/partner company names
  const clients = [
    "TechCorp",
    "InnovateLab",
    "DataSystems",
    "CloudVentures",
    "AI Dynamics",
    "FutureTech",
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Sektör Liderleri Tarafından Güvenilir
          </h3>
          <p className="text-2xl font-semibold text-[#0F172A]">
            İş Ortakları ve Müşteriler
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-[#0F172A] tracking-tight">
                  {client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}