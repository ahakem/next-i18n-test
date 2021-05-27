const localeSubpaths = {
  de: 'motorrad-mieten',
  fr: 'location-moto',
  es: 'alquiler-de-motos',
  nl: 'motorverhuur',
  it: 'noleggio-moto',
  pt: 'aluguel-de-motos',
  ru: 'ru',
  ar: 'ar',
  ko: 'ko',
  sv: 'sv',
  no: 'motorsykkelleie',
  da: 'motorcykeludlejninger',
  ja: 'ja',
};
const path = require('path');
const allLanguages = [
  'en',
  'en-CA',
  'en-GB',
  'en-AU',
  'zh',
  'ja',
  'da',
  'no',
  'sv',
  'ko',
  'ar',
  'ru',
  'pt',
  'it',
  'nl',
  'es',
  'fr',
  'de',
];
module.exports = {
  i18n: {
    defaultLanguage:'en',
    defaultLocale: 'en',
    fallbackLng:"en",
    locales: ['en','de','fr'],
    localeStructure: '%{lng}/%{ns}',
    interpolation: {
      prefix: '%{',
      suffix: '}',
    }
  },
}
