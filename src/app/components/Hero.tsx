import { ArrowRight, Cpu, Cloud, LineChart, Brain } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="relative bg-[#F8FAFC] text-[#1E2F41] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#1E2F41]">
                İşinizi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]">
                  Yapay Zeka
                </span>{" "}
                ile Dönüştürün
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Bulut bilişim, veri analitiği ve yapay zeka çözümlerimizle işletmenizi dijital çağa taşıyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = "/danismanlik"}
                  className="group bg-[#1E2F41] text-white px-8 py-4 rounded-lg hover:bg-[#2C3E50] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                >
                  <span>Bize Ulaşın</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-[#0ea5e9]">10+</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Yıl Deneyim</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0ea5e9]">%100</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Memnuniyet</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0ea5e9]">AR-GE</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Odaklı Projeler</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual / Illustration */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Abstract Tech Visual using CSS/Divs aiming for 'Circuit' look */}
              <div className="relative w-[450px] h-[450px]">
                {/* Central Circle */}
                <div className="absolute inset-0 m-auto w-64 h-64 bg-gradient-to-tr from-[#1E2F41] to-[#0ea5e9] rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-0 m-auto w-56 h-56 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 border border-slate-100">
                  <Cpu className="w-24 h-24 text-[#1E2F41]" strokeWidth={1.5} />
                </div>

                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div className="absolute bottom-10 right-10 w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-purple-500" />
                  </div>
                  <div className="absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-green-500" />
                  </div>
                </motion.div>

                {/* Connecting Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full -z-1 text-slate-300" viewBox="0 0 450 450">
                  <circle cx="225" cy="225" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                  <circle cx="225" cy="225" r="210" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}