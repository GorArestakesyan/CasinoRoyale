import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { Geolocation } from '@/constants/geolocation';

import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import frTranslations from './locales/fr.json';
import itTranslations from './locales/it.json';
import esTranslations from './locales/es.json';

const resources = {
  en: { translation: enTranslations },
  de: { translation: deTranslations },
  fr: { translation: frTranslations },
  it: { translation: itTranslations },
  es: { translation: esTranslations },
};

const geolocationToLanguage: Record<Geolocation, string> = {
  us: 'en',
  uk: 'en',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  default: 'en',
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const setLanguageByGeolocation = (geolocation: Geolocation) => {
  const language = geolocationToLanguage[geolocation] || 'en';
  i18n.changeLanguage(language);
};

export default i18n;
