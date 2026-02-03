import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function Consultation() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert(t('consultation.validation'));
      return;
    }

    setLoading(true);
    try {
      // Local development: backend runs on 3001
      const res = await fetch("http://localhost:3001/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      alert(t('consultation.success'));
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert(t('consultation.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-slate-500 hover:text-[#1E2F41] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('consultation.back')}
            </Link>
            <h1 className="text-4xl font-extrabold text-[#1E2F41] mb-4">
              {t('consultation.heading')}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('consultation.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder={t('consultation.placeholderName')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('consultation.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={form.company}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder={t('consultation.placeholderCompany')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('consultation.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder={t('consultation.placeholderEmail')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('consultation.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder={t('consultation.placeholderPhone')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {t('consultation.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder={t('consultation.placeholderMessage')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1E2F41] text-white font-semibold py-4 rounded-lg hover:bg-[#2C3E50] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <span>{loading ? t('consultation.submitting') : t('consultation.submit')}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-[#1E2F41] mb-6">
                  {t('consultation.contactHeading')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t('consultation.email')}</p>
                      <p className="font-medium text-[#1E2F41]">
                        {t('footer.email')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t('consultation.phone')}</p>
                      <p className="font-medium text-[#1E2F41]">
                        {t('footer.phone')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1E2F41]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t('consultation.addressLabel')}</p>
                      <p className="font-medium text-[#1E2F41]">
                        {t('footer.address')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Info Section */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
