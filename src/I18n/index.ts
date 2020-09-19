import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

console.log('I18 NEXT  INIT');
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'global',
    interpolation: {
      escapeValue: false,
    },
  });
