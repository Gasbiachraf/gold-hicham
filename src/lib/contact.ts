import { STORE } from '../data/store'

/** "0640216616" → "212640216616" (Moroccan local number to international digits, no "+"). */
export function toInternational(local: string): string {
  const digits = local.replace(/\D/g, '')
  if (digits.startsWith('212')) return digits
  if (digits.startsWith('0') && digits.length === 10) return `212${digits.slice(1)}`
  throw new Error(`Numéro marocain invalide : "${local}"`)
}

/** "0640216616" → "06 40 21 66 16" */
export function formatLocal(local: string): string {
  return local.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1 ')
}

export const PHONE_INTL = toInternational(STORE.phone)
export const PHONE_DISPLAY = formatLocal(STORE.phone)
export const TEL_LINK = `tel:+${PHONE_INTL}`

export function whatsappLink(text: string, number = PHONE_INTL) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(STORE.mapsQuery)}&z=16&output=embed`
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.mapsQuery)}`
