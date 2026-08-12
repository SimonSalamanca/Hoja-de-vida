import { LocalizedText } from './LocalizedText.js'

export class EducationEntry {
  constructor({ degree, school, status }) {
    this.degree = new LocalizedText(degree)
    this.school = school
    this.status = new LocalizedText(status)
  }

  getDegree(lang) {
    return this.degree.get(lang)
  }

  getStatus(lang) {
    return this.status.get(lang)
  }
}
