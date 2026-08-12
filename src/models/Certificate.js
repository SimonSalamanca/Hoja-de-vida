import { LocalizedText } from './LocalizedText.js'
import { baseUrl } from '../utils/baseUrl.js'

const BADGE_CLASSES = {
  Cisco: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
  Microsoft: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300',
  SoloLearn: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  DevSeniorCode: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
}

const FALLBACK_BADGE_CLASS =
  'bg-ink-100 text-ink-600 dark:bg-ink-700/40 dark:text-ink-200'

export class Certificate {
  constructor({ id, title, issuer, category, file }) {
    this.id = id
    this.title = new LocalizedText(title)
    this.issuer = issuer
    this.category = category
    this.file = file
  }

  getTitle(lang) {
    return this.title.get(lang)
  }

  url() {
    return `${baseUrl}files/${encodeURI(this.file)}`
  }

  downloadName() {
    return this.file
  }

  badgeClass() {
    return BADGE_CLASSES[this.category] ?? FALLBACK_BADGE_CLASS
  }
}
