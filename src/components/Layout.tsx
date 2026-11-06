import { useEffect, useState, type ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { MapPin, Menu, Phone, X } from 'lucide-react'
import { LANGS, LANG_LABELS, useI18n, type Lang } from '../i18n'
import { STORE } from '../data/store'
import { PHONE_DISPLAY, TEL_LINK, whatsappLink } from '../lib/contact'
import { Emblem, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './ui'

function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const { t, path } = useI18n()
  return (
    <Link to={path()} aria-label={t.nav.home} className="flex items-center gap-3" dir="ltr">
      <Emblem className={size === 'lg' ? 'size-14' : 'size-11'} />
      <span className="leading-none">
        <span className={`brand text-gold-grad block font-display font-bold tracking-[0.08em] ${size === 'lg' ? 'text-2xl' : 'text-xl'}`}>GOLD HICHAM</span>
        <span className="brand mt-1 block font-display text-[10px] font-semibold tracking-[0.42em] text-gold/80">BIJOUTERIE</span>
      </span>
    </Link>
  )
}

function LangSwitcher({ onPick }: { onPick?: () => void }) {
  const { lang, t } = useI18n()
  const { pathname, hash } = useLocation()
  const swap = (to: Lang) => pathname.replace(/^\/(fr|ar)(?=\/|$)/, `/${to}`) + hash
  return (
    <nav aria-label={t.nav.language} className="flex items-center rounded-full border border-line p-0.5">
      {LANGS.map((code) => (
        <Link
          key={code}
          to={swap(code)}
          onClick={onPick}
          lang={code}
          hrefLang={code}
          aria-current={code === lang ? 'true' : undefined}
          title={LANG_LABELS[code].name}
          className={`grid h-8 min-w-10 place-items-center rounded-full px-2.5 text-sm font-semibold transition ${
            code === lang ? 'bg-gold text-ink' : 'text-smoke hover:text-gold-light'
          }`}
        >
          {LANG_LABELS[code].short}
        </Link>
      ))}
    </nav>
  )
}

function useNavLinks() {
  const { t, path } = useI18n()
  return [
    { to: `${path()}#collections`, label: t.nav.collections },
    { to: `${path()}#a-propos`, label: t.nav.about },
    { to: `${path()}#services`, label: t.nav.services },
    { to: `${path()}#galerie`, label: t.nav.gallery },
    { to: `${path()}#contact`, label: t.nav.contact },
  ]
}

function Header() {
  const { t } = useI18n()
  const links = useNavLinks()
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-ink'
      }`}
    >
      <div className="container-x flex h-[4.75rem] items-center justify-between gap-3">
        <Logo />

        <nav aria-label={t.nav.main} className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="px-3.5 py-2 text-sm font-medium text-ivory/80 transition hover:text-gold-light">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangSwitcher />
          </div>
          <a href={whatsappLink(t.contact.hello)} target="_blank" rel="noopener noreferrer" className="btn btn-gold hidden min-h-10 px-5 lg:inline-flex">
            <WhatsAppIcon className="size-4" />
            {t.nav.whatsapp}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid size-11 place-items-center rounded-full border border-line text-gold-light lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <nav aria-label={t.nav.main} className="container-x flex flex-col py-3">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b border-line/60 py-4 font-display text-xl text-ivory last:border-0">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="container-x flex flex-wrap items-center justify-between gap-3 pb-6">
            <LangSwitcher onPick={() => setOpen(false)} />
            <a href={TEL_LINK} className="btn btn-outline min-h-10 px-5">
              <Phone className="size-4" aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function FloatingWhatsApp() {
  const { t } = useI18n()
  return (
    <a
      href={whatsappLink(t.contact.hello)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsappCta}
      title={t.contact.whatsappCta}
      className="fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-wa text-ink shadow-[0_12px_30px_-8px_rgb(37_211_102/0.6)] transition hover:scale-105 sm:end-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}

function Footer() {
  const { t, l } = useI18n()
  const links = useNavLinks()
  const socials = [
    { href: STORE.social.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: STORE.social.facebook, label: 'Facebook', Icon: FacebookIcon },
    { href: STORE.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-line bg-ink pt-14 pb-24 text-smoke sm:pb-10">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
            {socials.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold tracking-widest text-gold uppercase rtl:tracking-normal">{t.footer.follow}</p>
                <div className="mt-3 flex gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-full border border-line text-gold-light transition hover:border-gold">
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <nav aria-label={t.nav.main}>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {l(STORE.address)}
            </li>
            <li>
              <a href={TEL_LINK} className="flex gap-2.5 transition hover:text-gold-light">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={whatsappLink(t.contact.hello)} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 transition hover:text-gold-light">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold" />
                {t.contact.whatsappCta}
              </a>
            </li>
          </ul>
        </div>
        <div className="gold-rule mt-12 opacity-40" />
        <p className="pt-6 text-center text-xs">
          © {new Date().getFullYear()} <span className="brand">Gold Hicham</span> Bijouterie · {STORE.owner}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

/** Scrolls to the hash target, or to the top when the page changes. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export function Layout({ children }: { children?: ReactNode }) {
  const { t } = useI18n()
  return (
    <>
      <ScrollManager />
      <a href="#main" className="sr-only z-50 bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:start-3 focus:top-3">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">{children ?? <Outlet />}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
