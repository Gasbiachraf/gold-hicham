import type { Localized } from '../i18n/types'

export type Review = { name: string; text: Localized; rating: 1 | 2 | 3 | 4 | 5 }

/**
 * Real customer reviews only (copied with permission, or from Google).
 * The "Avis clients" section stays hidden while this list is empty.
 */
export const reviews: Review[] = []
