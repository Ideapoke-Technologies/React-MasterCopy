import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TRANSLATIONS_EN } from "./locale/messages_en";
import { TRANSLATIONS_JP } from "./locale/messages_jp";

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: TRANSLATIONS_EN
    },
    jp: {

      translations: TRANSLATIONS_JP
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'jp'];
export default i18n;