import { useLanguage } from '../context/LanguageContext'
import ScrollReveal from './ScrollReveal'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {t('about.text')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-primary-500 to-cyan-400" />
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-white md:text-3xl">
          {children}
        </h2>
      </div>
      {subtitle ? <p className="text-ink-400 dark:text-ink-400">{subtitle}</p> : null}
    </div>
  )
}
