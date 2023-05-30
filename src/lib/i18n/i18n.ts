import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as pl from './translations/pl.json';
import * as en from './translations/en.json';

export const defaultNS = 'translation';

export const resources = {
  pl,
  en,
} as const;

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: 'pl',
  fallbackLng: 'pl',
  resources,
});
