import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { fr, type Dict } from './fr'
import { ar } from './ar'
import { LANGS, type Lang, type Localized } from './types'

export { LANGS, type Lang, type Localized }

export const LANG_LABELS: Record<Lang, { short: string; name: string }> = {
  fr: { short: 'FR', name: 'Français' },
  ar: { short: 'ع', name: 'العربية' },
}

export const DICTS: Record<Lang, Dict> = { fr, ar }

export function isLang(value: string | undefined): value is Lang {
  return LANGS.includes(value as Lang)
}

const I18nContext = createContext<Lang>('fr')

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = DICTS[lang].meta.title
  }, [lang])

  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const lang = useContext(I18nContext)
  return {
    lang,
    t: DICTS[lang],
    l: (value: Localized) => value[lang] || value.fr,
    path: (to = '') => `/${lang}${to}`,
  }
}
