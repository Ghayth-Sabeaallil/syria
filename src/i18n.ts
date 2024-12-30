import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import ar from './lang/ar.json';
import en from './lang/en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ar: { translation: ar },
            en: { translation: en },
        },
        fallbackLng: 'ar', // Default language
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
