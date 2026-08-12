import { LocalizedText } from './LocalizedText.js'

export class Project {
  constructor({ id, title, highlights, url }) {
    this.id = id
    this.title = new LocalizedText(title)
    this.highlights = highlights.map((h) => new LocalizedText(h))
    this.url = url
  }

  getTitle(lang) {
    return this.title.get(lang)
  }

  getHighlights(lang) {
    return this.highlights.map((h) => h.get(lang))
  }
}
