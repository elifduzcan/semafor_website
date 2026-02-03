import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language || 'tr';

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => change('tr')}
        className={`px-3 py-1 rounded-md text-sm font-medium ${current === 'tr' ? 'bg-gray-200' : 'bg-transparent'}`}
      >
        TR
      </button>
      <button
        onClick={() => change('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium ${current === 'en' ? 'bg-gray-200' : 'bg-transparent'}`}
      >
        EN
      </button>
    </div>
  );
}
