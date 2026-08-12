import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/resume'
import ScrollReveal from './ScrollReveal'
import { SectionTitle } from './About'

export default function Projects() {
  const { t, lang } = useLanguage()

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionTitle>{t('projects.title')}</SectionTitle>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-ink-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-600/10 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-primary-500/50">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary-600/10 to-cyan-500/10 p-3 text-primary-600 dark:text-primary-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">
                  {project.getTitle(lang)}
                </h3>
                <ul className="space-y-2">
                  {project.getHighlights(lang).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
