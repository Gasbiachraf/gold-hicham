import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { Emblem } from '../components/ui'

export function NotFound() {
  const { t, path } = useI18n()
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <Emblem className="mx-auto size-20" />
        <h1 className="text-gold-grad mt-6 font-display text-4xl font-semibold">{t.notFound.title}</h1>
        <p className="mt-3 text-smoke">{t.notFound.text}</p>
        <Link to={path()} className="btn btn-gold mt-8">
          {t.notFound.back}
        </Link>
      </div>
    </section>
  )
}
