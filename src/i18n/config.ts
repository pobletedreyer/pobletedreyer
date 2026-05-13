// Centralized i18n configuration.
// Single source of truth: edit here when adding a language.

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Display labels for the language switcher (always shown in the language itself)
export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

// HTML lang attribute values
export const htmlLangMap: Record<Locale, string> = {
  en: 'en',
  es: 'es-CL',
};

// Cookie name for persisted language preference
export const langCookieName = 'pd_lang';
export const langCookieMaxAge = 60 * 60 * 24 * 365; // 1 year
