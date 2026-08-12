import { useLanguage } from '../context/LanguageContext'
import { education } from '../data/resume'
import { certificates } from '../data/certificates'
import ScrollReveal from './ScrollReveal'
import { SectionTitle } from './About'
import Certificates from './Certificates'

export default function Education() {
  const { t, lang } = useLanguage()
  const entry = education[0]

  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionTitle>{t('education.title')}</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mb-2 flex items-center gap-5 rounded-2xl border border-ink-200/80 bg-white p-6 shadow-sm dark:border-ink-700 dark:bg-ink-900">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-600 to-cyan-500 text-white shadow-lg shadow-primary-600/25">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                {entry.getDegree(lang)}
              </h3>
              <p className="text-sm text-ink-500 dark:text-ink-300">{entry.school}</p>
              <p className="text-xs text-ink-400">{entry.getStatus(lang)}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <h3 className="mb-4 mt-10 flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white">
            <svg className="h-5 w-5 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {t('education.certificates')}
            <span className="rounded-full bg-primary-600/10 px-2.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
              {certificates.length}
            </span>
          </h3>
        </ScrollReveal>

        <Certificates />
      </div>
    </section>
  )
}
