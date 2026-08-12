import { useLanguage } from '../context/LanguageContext'
import { softSkills, technologies } from '../data/resume'
import { useCarousel } from '../hooks/useCarousel'
import ScrollReveal from './ScrollReveal'
import { SectionTitle } from './About'

const breakpoints = [
  { min: 1280, count: 6 },
  { min: 700, count: 4 },
]

const CAROUSEL_GAP = 12

export default function Skills() {
  const { t, lang } = useLanguage()
  const carousel = useCarousel(technologies.length, breakpoints)
  const itemWidth = `calc((100% - ${CAROUSEL_GAP * (carousel.visible - 1)}px) / ${carousel.visible})`

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionTitle subtitle={t('skills.lead')}>{t('skills.title')}</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="relative">
            <div ref={carousel.containerRef} className="overflow-hidden rounded-2xl">
              <div
                ref={carousel.trackRef}
                {...carousel.touchHandlers}
                className="flex gap-3 transition-transform duration-500 ease-[cubic-bezier(.2,.9,.3,1)]"
              >
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    style={{ flex: `0 0 ${itemWidth}` }}
                    className="group flex min-h-[7rem] min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-ink-200/80 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-600/10 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-primary-500/50"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      loading="lazy"
                      className="h-9 max-w-full object-contain transition-transform group-hover:scale-110"
                    />
                    <span className="text-xs font-semibold text-ink-500 dark:text-ink-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={carousel.prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white/90 text-ink-600 shadow-md transition-colors hover:text-primary-600 dark:border-ink-700 dark:bg-ink-800/90 dark:text-ink-200"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={carousel.next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white/90 text-ink-600 shadow-md transition-colors hover:text-primary-600 dark:border-ink-700 dark:bg-ink-800/90 dark:text-ink-200"
            >
              ▶
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-10 rounded-2xl border border-ink-200/80 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-ink-400">
              {t('skills.soft')}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <li
                  key={skill.get('es')}
                  className="rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-300"
                >
                  {skill.get(lang)}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
