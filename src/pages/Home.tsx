import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Coins, Expand, Gem, HeartHandshake, MapPin, Navigation, PencilRuler, PenLine, Phone, Scale, ShieldCheck, Star, Store, Users, Wrench, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { STORE } from '../data/store'
import { collections } from '../data/collections'
import { gallery } from '../data/gallery'
import { reviews } from '../data/reviews'
import { MAP_EMBED, MAP_LINK, PHONE_DISPLAY, TEL_LINK, whatsappLink } from '../lib/contact'
import { JewelIllustration } from '../components/JewelIcons'
import { Reveal, SectionHead, WhatsAppIcon } from '../components/ui'

function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 75% 45%, rgb(212 175 55 / 0.16), transparent 70%), radial-gradient(40% 40% at 10% 90%, rgb(212 175 55 / 0.07), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-12 pt-10 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28">
        <Reveal className="text-center lg:text-start">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[2.4rem] leading-[1.12] font-semibold text-balance sm:text-5xl lg:text-[3.5rem]">
            <span className="block text-ivory">{t.hero.title1}</span>
            <span className="text-gold-grad block">{t.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-pretty text-smoke lg:mx-0">{t.hero.text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#collections" className="btn btn-gold">
              {t.hero.ctaCollections}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
            </a>
            <a href={whatsappLink(t.contact.hello)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon className="size-4" />
              {t.hero.ctaWhatsapp}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ivory/80 lg:justify-start">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <Gem className="size-4 text-gold" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-[30rem]">
          <div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
          <div className="shine relative rounded-[2rem] border border-gold/25 bg-ink p-4 shadow-gold sm:p-6">
            <img src="/images/logo.webp" width={460} height={300} alt={t.hero.logoAlt} fetchPriority="high" className="h-auto w-full mix-blend-lighten" />
          </div>
        </Reveal>
      </div>
      <div className="gold-rule opacity-50" />
    </section>
  )
}

function Collections() {
  const { t, l } = useI18n()
  return (
    <section id="collections" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={t.collections.eyebrow} title={t.collections.title} text={t.collections.text} />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collections.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={(i % 4) * 80} className="h-full">
                <article className="card-dark group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold">
                  <div className="relative grid aspect-[16/9] place-items-center sm:aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#2a2318,#121110_70%)]">
                    {c.image ? (
                      <img src={c.image} alt={l(c.title)} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                    ) : (
                      <JewelIllustration kind={c.icon} metal={c.metal} className="size-24 transition duration-500 sm:size-32 group-hover:scale-110" />
                    )}
                    <span
                      className={`absolute start-3 top-3 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${
                        c.metal === 'gold' ? 'border-gold/40 bg-ink/70 text-gold-light' : 'border-silver/40 bg-ink/70 text-silver'
                      }`}
                    >
                      {l(c.purity)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-ivory">{l(c.title)}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-smoke">{l(c.text)}</p>
                    <a
                      href={whatsappLink(t.collections.message(l(c.title)))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-gold"
                    >
                      <WhatsAppIcon className="size-4" />
                      {t.collections.ask}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  const { t } = useI18n()
  return (
    <section id="a-propos" className="scroll-mt-20 bg-cream py-20 text-ink sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/50 rtl:-scale-x-100" style={{ transform: 'rotate(-3deg)' }} aria-hidden="true" />
          <img
            src="/images/hicham-anbi.webp"
            width={465}
            height={694}
            alt={t.about.photoAlt}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_15%] shadow-soft"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow text-gold-deep">{t.about.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">{t.about.title}</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-umber">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-sand pt-6">
            <span className="grid size-12 place-items-center rounded-full bg-ink">
              <Gem className="size-5 text-gold" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">{t.about.signature}</p>
              <p className="text-sm text-umber">{t.about.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const SERVICE_ICONS = [Gem, Coins, PencilRuler, Wrench, PenLine, HeartHandshake]

function Services() {
  const { t } = useI18n()
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <li key={item.title} className="bg-onyx">
                <Reveal delay={(i % 3) * 80} className="h-full p-7 sm:p-8">
                  <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{item.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const WHY_ICONS = [ShieldCheck, Scale, Users, Store]

function Why() {
  const { t } = useI18n()
  return (
    <section className="bg-cream py-20 text-ink sm:py-24">
      <div className="container-x">
        <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} light />
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = WHY_ICONS[i]
            return (
              <li key={item.title}>
                <Reveal delay={i * 80} className="text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-ink shadow-soft">
                    <Icon className="size-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-umber">{item.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (step: number) => void }) {
  const { t, l, lang } = useI18n()
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = gallery[index]
  const rtl = lang === 'ar'

  useEffect(() => {
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(rtl ? -1 : 1)
      if (e.key === 'ArrowLeft') onMove(rtl ? 1 : -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onMove, rtl])

  const many = gallery.length > 1
  return (
    <div role="dialog" aria-modal="true" aria-label={l(item.alt)} className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4 backdrop-blur-sm" onClick={onClose}>
      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} srcSet={item.srcSet} sizes="90vw" width={item.width} height={item.height} alt={l(item.alt)} className="max-h-[78vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-4 text-center text-sm text-smoke">{l(item.alt)}</figcaption>
      </figure>
      <button ref={closeRef} type="button" onClick={onClose} aria-label={t.gallery.close} className="absolute end-4 top-4 grid size-11 place-items-center rounded-full border border-line bg-onyx text-ivory hover:border-gold">
        <X className="size-5" />
      </button>
      {many && (
        <>
          <button type="button" onClick={(e) => (e.stopPropagation(), onMove(-1))} aria-label={t.gallery.prev} className="absolute start-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-onyx text-ivory hover:border-gold">
            <ChevronLeft className="size-5 rtl:rotate-180" />
          </button>
          <button type="button" onClick={(e) => (e.stopPropagation(), onMove(1))} aria-label={t.gallery.next} className="absolute end-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-onyx text-ivory hover:border-gold">
            <ChevronRight className="size-5 rtl:rotate-180" />
          </button>
        </>
      )}
    </div>
  )
}

function Gallery() {
  const { t, l } = useI18n()
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((step: number) => setOpen((i) => (i === null ? i : (i + step + gallery.length) % gallery.length)), [])
  if (gallery.length === 0) return null

  return (
    <section id="galerie" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={t.gallery.eyebrow} title={t.gallery.title} text={t.gallery.text} />
        <ul className={`mx-auto mt-14 grid items-center gap-5 ${gallery.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'max-w-4xl sm:grid-cols-2'}`}>
          {gallery.map((item, i) => (
            <li key={item.src}>
              <Reveal delay={(i % 3) * 80}>
                <button type="button" onClick={() => setOpen(i)} aria-label={`${t.gallery.open} : ${l(item.alt)}`} className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-ink">
                  <img
                    src={item.src}
                    srcSet={item.srcSet}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    width={item.width}
                    height={item.height}
                    alt=""
                    loading="lazy"
                    className="h-auto w-full transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/0 text-gold-light opacity-0 transition group-hover:bg-ink/40 group-hover:opacity-100">
                    <Expand className="size-7" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </section>
  )
}

function Reviews() {
  const { t, l } = useI18n()
  if (reviews.length === 0) return null
  return (
    <section className="bg-onyx py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
        <ul className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {reviews.map((r) => (
            <li key={r.name} className="card-dark w-[min(22rem,85vw)] shrink-0 snap-start p-7">
              <div className="flex gap-1 text-gold" aria-label={`${r.rating}/5`}>
                {Array.from({ length: r.rating }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-ivory/90">« {l(r.text)} »</blockquote>
              <p className="mt-5 text-sm font-semibold text-gold-light">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  const { t, l } = useI18n()
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-onyx py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="card-dark flex flex-col gap-7 bg-ink p-7 sm:p-9">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gold uppercase rtl:tracking-normal">{t.contact.addressLabel}</p>
                <p className="mt-1.5 text-ivory">{l(STORE.address)}</p>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold-light hover:text-gold">
                  <Navigation className="size-3.5" aria-hidden="true" />
                  {t.contact.directions}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gold uppercase rtl:tracking-normal">{t.contact.phoneLabel}</p>
                <a href={TEL_LINK} className="mt-1.5 inline-block font-display text-2xl text-ivory hover:text-gold-light" dir="ltr">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gold uppercase rtl:tracking-normal">{t.contact.hoursLabel}</p>
                {STORE.hours.length > 0 ? (
                  <dl className="mt-1.5 space-y-1 text-ivory">
                    {STORE.hours.map((h) => (
                      <div key={h.days.fr} className="flex justify-between gap-6">
                        <dt>{l(h.days)}</dt>
                        <dd dir="ltr">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="mt-1.5 text-smoke">{t.contact.hoursUnknown}</p>
                )}
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row [&>a]:whitespace-nowrap">
              <a href={whatsappLink(t.contact.hello)} target="_blank" rel="noopener noreferrer" className="btn btn-wa flex-1">
                <WhatsAppIcon className="size-5" />
                {t.contact.whatsappCta}
              </a>
              <a href={TEL_LINK} className="btn btn-outline flex-1">
                <Phone className="size-4" aria-hidden="true" />
                {t.contact.callCta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-h-80 overflow-hidden rounded-2xl border border-line">
            <iframe title={t.contact.mapTitle} src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-80 grayscale-[0.4] invert-[0.9] hue-rotate-180" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <About />
      <Services />
      <Why />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  )
}
