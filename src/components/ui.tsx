import { useEffect, useId, useRef, type ReactNode } from 'react'

/** Crown + diamond-in-circle mark, drawn from the shop logo. */
export function Emblem({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5d77a" />
          <stop offset=".55" stopColor="#d4af37" />
          <stop offset="1" stopColor="#a8841f" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${id})`} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M24 13 25.5 5.5 29 9 32 4 35 9 38.5 5.5 40 13Z" />
        <circle cx="32" cy="37" r="20" />
        <path d="M21 31 26.5 25h11L43 31 32 47Z M21 31h22 M26.5 25 29.5 31 32 25 34.5 31 37.5 25 M29.5 31 32 47 34.5 31" />
      </g>
    </svg>
  )
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.35-.2-3.56.93.95-3.47-.22-.36A9.4 9.4 0 0 1 2.6 12.05c0-5.2 4.24-9.45 9.46-9.45 2.52 0 4.9.99 6.68 2.77a9.4 9.4 0 0 1 2.77 6.69c0 5.21-4.24 9.45-9.45 9.45M20.1 3.98A11.3 11.3 0 0 0 12.05.66C5.77.66.66 5.77.66 12.05c0 2 .52 3.97 1.52 5.7L.57 23.66l6.05-1.59a11.4 11.4 0 0 0 5.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.34-8.06" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.5V4.46A20 20 0 0 0 14.3 4.3c-2.16 0-3.64 1.32-3.64 3.74v2.46H8.2v3h2.46V21z" />
    </svg>
  )
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.3 4.3 0 0 1 15.54 3h-3.09v12.4a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.38-2.48V9.66a5.7 5.7 0 0 0-.78-.05 5.7 5.7 0 0 0-5.7 5.7 5.7 5.7 0 0 0 5.7 5.69 5.7 5.7 0 0 0 5.69-5.7V9.01a7.3 7.3 0 0 0 4.28 1.37V7.3a4.3 4.3 0 0 1-3.22-1.48" />
    </svg>
  )
}

/** Fades its content in the first time it scrolls into view. */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className={`eyebrow ${light ? 'text-gold-deep' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl ${light ? 'text-ink' : 'text-gold-grad'}`}>{title}</h2>
      {text && <p className={`mt-4 leading-relaxed text-pretty ${light ? 'text-umber' : 'text-smoke'}`}>{text}</p>}
    </Reveal>
  )
}
