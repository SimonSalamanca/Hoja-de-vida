import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function CertificateModal({ certificate, onClose }) {
  const { t, lang } = useLanguage()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!certificate) return null
  const url = certificate.url()

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.getTitle(lang)}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-200 p-5 dark:border-ink-700">
          <div>
            <h3 className="font-display text-base font-bold text-ink-900 dark:text-white md:text-lg">
              {certificate.getTitle(lang)}
            </h3>
            <p className="text-sm text-ink-400">{certificate.issuer}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('education.close')}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:hover:bg-ink-800 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-[40vh] flex-1 overflow-auto bg-ink-100 p-4 dark:bg-ink-950">
          <iframe
            src={url}
            title={certificate.getTitle(lang)}
            className="h-full min-h-[40vh] w-full rounded-lg border-0 bg-white"
          />
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-ink-200 p-4 dark:border-ink-700">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-primary-500 dark:hover:text-primary-300"
          >
            <OpenIcon /> {t('education.open')}
          </a>
          <a
            href={url}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
          >
            <DownloadIcon /> {t('education.download')}
          </a>
        </div>
      </div>
    </div>
  )
}

function OpenIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}
