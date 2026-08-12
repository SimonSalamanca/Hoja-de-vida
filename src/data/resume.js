import { Contact } from '../models/Contact.js'
import { Profile } from '../models/Profile.js'
import { Technology } from '../models/Technology.js'
import { Project } from '../models/Project.js'
import { EducationEntry } from '../models/EducationEntry.js'
import { LocalizedText } from '../models/LocalizedText.js'
import { baseUrl } from '../utils/baseUrl.js'

export const profile = new Profile({
  name: 'Simón Salamanca',
  location: 'Bogotá, DC',
  photo: `${baseUrl}files/profile.jpg`,
  contact: new Contact({
    phone: '+57 305 933 5354',
    email: 'simonsalamancatrab@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sim%C3%B3n-salamanca-vargas',
    github: 'https://github.com/SimonSalamanca',
  }),
})

export const softSkills = [
  new LocalizedText({ es: 'Trabajo colaborativo', en: 'Teamwork' }),
  new LocalizedText({ es: 'Resolución de problemas', en: 'Problem solving' }),
  new LocalizedText({ es: 'Aprendizaje autónomo', en: 'Self-directed learning' }),
  new LocalizedText({ es: 'Adaptabilidad', en: 'Adaptability' }),
  new LocalizedText({ es: 'Comunicación asertiva', en: 'Assertive communication' }),
]

export const technologies = [
  new Technology({ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }),
  new Technology({ name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }),
  new Technology({ name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }),
  new Technology({ name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }),
  new Technology({ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }),
  new Technology({ name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }),
  new Technology({ name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }),
  new Technology({ name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }),
  new Technology({ name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' }),
  new Technology({ name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }),
  new Technology({ name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }),
  new Technology({ name: 'Jira', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg' }),
  new Technology({ name: 'Power BI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/powerbi.svg' }),
]

export const projects = [
  new Project({
    id: 'ludex',
    title: { es: 'Proyecto Ludex — Plataforma E-commerce', en: 'Ludex Project — E-commerce Platform' },
    url: 'https://github.com/Cristianmoreno25/Ludex',
    highlights: [
      { es: 'Desarrollo colaborativo de una plataforma web', en: 'Collaborative development of a web platform' },
      { es: 'Trabajo bajo metodología Scrum', en: 'Work under Scrum methodology' },
      { es: 'Uso de GitHub para control de versiones', en: 'GitHub for version control' },
      { es: 'Aplicación de buenas prácticas de desarrollo', en: 'Application of development best practices' },
      { es: 'Diseño de páginas web', en: 'Web page design' },
    ],
  }),
  new Project({
    id: 'cv-site',
    title: { es: 'Mi hoja de vida — CV en línea', en: 'My résumé — Online CV' },
    url: 'https://github.com/SimonSalamanca/Hoja-de-vida',
    highlights: [
      { es: 'SPA construida con React y Vite', en: 'SPA built with React and Vite' },
      { es: 'Diseño responsive con Tailwind CSS', en: 'Responsive design with Tailwind CSS' },
      { es: 'Modo oscuro/claro y selector de idioma ES/EN', en: 'Dark/light mode and ES/EN language selector' },
      { es: 'Descarga del CV en PDF', en: 'CV download as PDF' },
      { es: 'Galería de certificados con filtros', en: 'Certificate gallery with filters' },
    ],
  }),
  new Project({
    id: 'pymes',
    title: { es: 'Consultorías a PYMES', en: 'SME Consultancies' },
    highlights: [
      {
        es: 'Análisis, planeación y construcción de soluciones web a medida para el usuario',
        en: 'Analysis, planning and building of tailor-made web solutions for the client',
      },
    ],
  }),
]

export const education = [
  new EducationEntry({
    degree: { es: 'Ingeniería de Software', en: 'Software Engineering' },
    school: 'Universidad Manuela Beltrán',
    status: { es: '7.º semestre — en curso', en: '7th semester — in progress' },
  }),
]
