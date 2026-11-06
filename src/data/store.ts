import type { Localized } from '../i18n/types'

export type Hours = { days: Localized; time: string }

/**
 * Shop details: the single place to edit contact info.
 * Empty values are hidden on the site (never an invented value).
 */
export const STORE = {
  name: 'Gold Hicham',
  owner: 'Hicham ANBI',
  phone: '0640216616',
  address: {
    fr: 'Kissariat Sidi Moumen, N° 285, Casablanca',
    ar: 'قيسارية سيدي مومن، رقم 285، الدار البيضاء',
  } satisfies Localized,
  mapsQuery: 'Kissariat Sidi Moumen, Casablanca, Maroc',

  // TODO: à compléter avec M. Hicham. Exemple :
  // { days: { fr: 'Lundi – Samedi', ar: 'الإثنين – السبت' }, time: '10:00 – 20:00' }
  hours: [] as Hours[],

  // TODO: coller les liens complets (https://...). Laisser vide pour masquer l'icône.
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },
}
