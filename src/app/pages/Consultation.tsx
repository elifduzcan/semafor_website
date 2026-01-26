import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function Consultation() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen pt-32 pb-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-12">
                        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#1E2F41] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Ana Sayfaya Dön
                        </Link>
                        <h1 className="text-4xl font-extrabold text-[#1E2F41] mb-4">
                            Projenizi Birlikte Planlayalım
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Adınız Soyadınız" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Firma Adı</label>
                                        <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Firma Adı" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-posta</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="ornek@sirket.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="0555 555 55 55" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Proje Detayları / Notlarınız</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Projenizden kısaca bahsedin..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#1E2F41] text-white font-semibold py-4 rounded-lg hover:bg-[#2C3E50] transition-colors flex items-center justify-center gap-2">
                                    <span>Gönder ve Randevu Oluştur</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div className="space-y-8">
                           

                            <div className="bg-white rounded-2xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-[#1E2F41] mb-6">İletişim Bilgileri</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">E-posta</p>
                                            <p className="font-medium text-[#1E2F41]">info@semaforteknoloji.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Telefon</p>
                                            <p className="font-medium text-[#1E2F41]">+90 (232) 123 45 67</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Adres</p>
                                            <p className="font-medium text-[#1E2F41]">Mithatpaşa Caddesi Dokuz Eylül Üniversitesi İnciraltı Yerleşkesi No:56/20 Depark Sağlık Zeytin Binası Ofis:205 Balçova / İZMİR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
