import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./src/locales/de.json";
import en from "./src/locales/en.json";

const namespace = "zula-app";

const loadLocales = (i18next) => {
  i18next.addResourceBundle('en', namespace, en);
  i18next.addResourceBundle('de', namespace, de);
};

const options = {
  lng: "de",
  ns: namespace,
  defaultNS: namespace,
  lngs: ["de", "en"],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
},
  react: {
    useSuspense: false,
  },
  returnEmptyString: false,
};

const i18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .init(options);

loadLocales(i18n);

export default i18n;
