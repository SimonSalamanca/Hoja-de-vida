import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="no-print border-t border-ink-200/80 py-8 dark:border-ink-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 text-center text-sm text-ink-400">
        <p>© {new Date().getFullYear()} Simón Salamanca</p>
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  )
}
