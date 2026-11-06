import { describe, expect, it } from 'vitest'
import { formatLocal, PHONE_INTL, TEL_LINK, toInternational, whatsappLink } from './contact'

describe('contact', () => {
  it('converts the shop number to international format', () => {
    expect(PHONE_INTL).toBe('212640216616')
    expect(TEL_LINK).toBe('tel:+212640216616')
  })

  it('accepts spaced or already international numbers', () => {
    expect(toInternational('06 40 21 66 16')).toBe('212640216616')
    expect(toInternational('+212 640216616')).toBe('212640216616')
  })

  it('rejects a number with the wrong length (e.g. the 11-digit typo on the old card)', () => {
    expect(() => toInternational('06402166166')).toThrow()
  })

  it('formats the local number in pairs', () => {
    expect(formatLocal('0640216616')).toBe('06 40 21 66 16')
  })

  it('encodes the WhatsApp message, Arabic included', () => {
    const url = whatsappLink('Prix ? كم الثمن')
    expect(url.startsWith('https://wa.me/212640216616?text=')).toBe(true)
    expect(decodeURIComponent(url.split('text=')[1])).toBe('Prix ? كم الثمن')
  })
})
