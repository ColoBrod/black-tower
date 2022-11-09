import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  ru: {
    title: "Главная страница",
    about: "О компании",
    contacts: "Контакты",
  },
  en: {
    title: "Homepage",
    about: "About us",
  },
  uz: {
    title: "Главная на узбекском",
    about: "О компании (UZB)",
  },
  kz: {
    title: "Главная на казахском",
    about: "О компании (KZ)",
  },
});

export default locales;