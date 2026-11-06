export const LANGS = ['fr', 'ar'] as const
export type Lang = (typeof LANGS)[number]
export type Localized = Record<Lang, string>
