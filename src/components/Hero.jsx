import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/resume'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const { t, lang } = useLanguage()

  const handlePrint = () => window.open(`./cv.html?lang=${lang}`, '_blank', 'noopener')

  const whatsappHref = `${profile.contact.whatsappHref}?text=${encodeURIComponent(
    lang === 'es' ? 'Hola Simón, me gustaría contactarte.' : 'Hi Simón, I would like to get in touch.',
  )}`

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(139,92,246,0.18),transparent)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-8 text-center">
        <ScrollReveal>
          <div className="relative mb-7">
            <div className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-tr from-primary-500 via-cyan-400 to-primary-600 opacity-60 blur-lg" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative h-44 w-44 rounded-3xl border-4 border-white object-cover shadow-2xl dark:border-ink-800 md:h-52 md:w-52"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:border-emerald-400/30 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('hero.available')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-white md:text-6xl">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-3 bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
            {t('hero.subtitle')} · {t('hero.tagline')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-500 dark:hover:text-primary-300"
            >
              <PhoneIcon /> {profile.contact.phone}
            </a>
            <a
              href={profile.contact.emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-500 dark:hover:text-primary-300"
            >
              <MailIcon /> {profile.contact.email}
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-500 dark:hover:text-primary-300"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-primary-500 dark:hover:text-primary-300"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <button
            type="button"
            onClick={handlePrint}
            className="no-print mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <DownloadIcon /> {t('hero.download')}
          </button>
          <p className="mt-4 text-sm text-ink-400 dark:text-ink-400">{profile.location}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}

const iconProps = {
  className: 'h-4 w-4',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 2,
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-2.25v-4.5c0-1.077-.02-2.46-1.5-2.46-1.5 0-1.73 1.17-1.73 2.38v4.58H8.77V9.75h2.16v1.23h.03c.3-.57 1.035-1.17 2.13-1.17 2.28 0 2.7 1.5 2.7 3.45v4.49ZM6.375 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.125 10.5H5.25V9.75h2.25v9Z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}
function DownloadIcon() {
  return (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}
