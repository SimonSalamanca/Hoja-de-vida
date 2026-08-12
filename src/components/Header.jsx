import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollSpy } from '../hooks/useScrollSpy'

const sections = ['home', 'about', 'skills', 'projects', 'education']

export default function Header() {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const activeId = useScrollSpy(sections)

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="no-print fixed inset-x-3 top-3 z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl border border-ink-200/70 bg-white/80 px-4 py-2.5 shadow-lg shadow-ink-900/5 backdrop-blur-lg dark:border-ink-700/70 dark:bg-ink-900/80 dark:shadow-black/20">
        <a
          href="#home"
          onClick={scrollTo('home')}
          className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-ink-900 dark:text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 text-sm font-bold text-white">
            SS
          </span>
          <span className="hidden sm:block">Simón Salamanca</span>
        </a>

        <ul className="flex items-center gap-1">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={scrollTo(id)}
                className={`rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3 ${
                  activeId === id
                    ? 'bg-primary-600/10 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300'
                    : 'text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            className="grid h-9 w-9 place-items-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white"
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.06 8.06 5.64 6.64m12.72 0-1.42 1.42m-9.9 9.9-1.42 1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t('language')}
      className="h-9 rounded-lg border border-ink-200 px-2.5 text-xs font-bold uppercase tracking-wider text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-primary-500 dark:hover:text-primary-300"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
