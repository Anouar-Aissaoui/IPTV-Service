import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import all translations
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'fr', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['cookie', 'localStorage'],
      cookieMinutes: 10080, // 7 days
      cookieDomain: 'iptvservice.site',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;