import en from '../data/locales/en.json';
import vi from '../data/locales/vi.json';
import zh from '../data/locales/zh.json';

export type LocaleKey = 'en' | 'vi' | 'zh';

export const locales = {
  en,
  vi,
  zh,
};

export function getLocaleData(locale: LocaleKey) {
  return locales[locale];
}

export const supportedLocales: LocaleKey[] = ['en', 'vi', 'zh'];
