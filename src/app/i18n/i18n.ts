import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ca from './locales/ca.json';
import en from './locales/en.json';
import es from './locales/es.json';
import { Locale, Translations } from './translations.model';

const DICTIONARIES: Record<Locale, Translations> = { es, ca, en };
const LOCALES: Locale[] = ['es', 'ca', 'en'];
const STORAGE_KEY = 'ruthchavar.locale';

function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'es';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLocale(stored)) {
    return stored;
  }

  const browserLang = window.navigator.language.slice(0, 2);
  return isLocale(browserLang) ? browserLang : 'es';
}

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);

  readonly locales = LOCALES;
  readonly locale = signal<Locale>(detectInitialLocale());
  readonly t = computed(() => DICTIONARIES[this.locale()]);

  constructor() {
    effect(() => {
      const dictionary = DICTIONARIES[this.locale()];
      this.document.documentElement.lang = this.locale();
      this.titleService.setTitle(dictionary.documentTitle);
    });
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale);
    }
  }
}
