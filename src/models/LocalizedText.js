export class LocalizedText {
  constructor(values) {
    if (typeof values === 'string') {
      this.es = values
      this.en = values
    } else {
      this.es = values?.es ?? ''
      this.en = values?.en ?? this.es
    }
  }

  get(lang) {
    return lang === 'en' ? this.en : this.es
  }
}
