// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my site",
      }
    },
    pt: {
      translation: {
        welcome: "Bem-vindo ao meu site",
      }
    },
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
