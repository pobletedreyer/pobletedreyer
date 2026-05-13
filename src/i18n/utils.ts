// i18n helpers used across pages and components.

import { ui } from './ui';
import { locales, defaultLocale, type Locale } from './config';

/**
 * Translate a UI key for a given locale.
 * Falls back to English if the key is missing in the requested locale.
 */
export function t(key: string, locale: Locale): string {
  return ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
}

/**
 * Curry the translator so components can call `t('nav.work')` without
 * passing the locale every time.
 */
export function useTranslations(locale: Locale) {
  return (key: string) => t(key, locale);
}

/**
 * Infer the active locale from a URL pathname.
 * `/es/...` → 'es', everything else → 'en' (default).
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const seg = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/**
 * Build a localized URL path. For the default locale we omit the prefix.
 * Examples:
 *   localizedPath('/about', 'en')   → '/about'
 *   localizedPath('/about', 'es')   → '/es/about'
 *   localizedPath('/', 'es')        → '/es/'
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

/**
 * Given a current path and a target locale, return the equivalent URL
 * in the target locale. Used by the language switcher.
 */
export function switchLocalePath(currentPath: string, target: Locale): string {
  // Strip leading locale prefix if present
  const segments = currentPath.split('/').filter(Boolean);
  if (segments[0] && (locales as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  const base = '/' + segments.join('/');
  return localizedPath(base === '/' ? '/' : base, target);
}

/**
 * Pick the right value from a bilingual `{ en, es }` object,
 * falling back to English if the target value is missing.
 */
export function pickLang<T>(field: { en: T; es?: T }, locale: Locale): T {
  if (locale === 'es' && field.es !== undefined) return field.es;
  return field.en;
}
