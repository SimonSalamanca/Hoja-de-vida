import { useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { certificateCategories, certificates } from '../data/certificates'
import ScrollReveal from './ScrollReveal'
import CertificateModal from './CertificateModal'

export default function Certificates() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (filter === 'Todos' ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  )

  return (
    <div className="mt-10">
      <div className="mb-6 flex flex-wrap gap-2">
        {certificateCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                : 'border border-ink-200 text-ink-500 hover:border-primary-300 hover:text-primary-700 dark:border-ink-700 dark:text-ink-300 dark:hover:border-primary-500 dark:hover:text-primary-300'
            }`}
          >
            {cat === 'Todos' ? t('education.filterAll') : cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert, i) => (
          <ScrollReveal key={cert.id} delay={Math.min(i, 5) * 60}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(cert)
                }
              }}
              className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-ink-200/80 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-600/10 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-primary-500/50"
            >
              <div className="flex items-center gap-2 border-b border-ink-100 bg-gradient-to-r from-primary-50 to-cyan-50 px-4 py-2 dark:border-ink-800 dark:from-primary-900/20 dark:to-cyan-900/20">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cert.badgeClass()}`}
                >
                  {cert.category}
                </span>
                <span className="ml-auto text-[11px] text-ink-400">{cert.issuer}</span>
              </div>

              <div className="pointer-events-none relative h-40 overflow-hidden bg-[repeating-linear-gradient(135deg,#f1f5f9_0px,#f1f5f9_8px,#e2e8f0_8px,#e2e8f0_16px)] dark:bg-[repeating-linear-gradient(135deg,#0f172a_0px,#0f172a_8px,#1e293b_8px,#1e293b_16px)]">
                <iframe
                  src={cert.url()}
                  title={`${cert.getTitle(lang)} — vista previa`}
                  loading="lazy"
                  className="h-full w-full border-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 dark:to-ink-900/70" />
              </div>

              <div className="p-4">
                <p className="mb-3 line-clamp-2 min-h-[2.6rem] text-sm font-semibold leading-snug text-ink-800 dark:text-ink-100">
                  {cert.getTitle(lang)}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-300">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                  {t('education.view')}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}

      <p className="mt-6 hidden text-xs text-ink-400 print:block">
        {certificates.map((c) => `${c.getTitle(lang)} — ${c.url()}`).join(' · ')}
      </p>
    </div>
  )
}
