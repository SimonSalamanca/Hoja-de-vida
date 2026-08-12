import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { translations } from '../src/i18n/translations.js'
import { profile, softSkills, technologies, projects, education } from '../src/data/resume.js'
import { certificates } from '../src/data/certificates.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = join(root, 'cv.template.html')
const outputPath = join(root, 'public', 'cv.html')

const data = {
  translations,
  profile: {
    name: profile.name,
    location: profile.location,
    contact: {
      phone: profile.contact.phone,
      email: profile.contact.email,
      linkedin: profile.contact.linkedin,
      github: profile.contact.github,
    },
  },
  technologies: technologies.map((t) => t.name),
  softSkills: {
    es: softSkills.map((s) => s.get('es')),
    en: softSkills.map((s) => s.get('en')),
  },
  projects: {
    es: projects.map((p) => ({ title: p.getTitle('es'), highlights: p.getHighlights('es') })),
    en: projects.map((p) => ({ title: p.getTitle('en'), highlights: p.getHighlights('en') })),
  },
  education: {
    es: { degree: education[0].getDegree('es'), school: education[0].school, status: education[0].getStatus('es') },
    en: { degree: education[0].getDegree('en'), school: education[0].school, status: education[0].getStatus('en') },
  },
  certificates: certificates.map((c) => ({
    title: { es: c.getTitle('es'), en: c.getTitle('en') },
    issuer: c.issuer,
  })),
}

let template = readFileSync(templatePath, 'utf8')
template = template.replace('/*__CV_DATA__*/', JSON.stringify(data))

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, template, 'utf8')
console.log(`cv.html generado (${certificates.length} certificados)`)
