import { Certificate } from '../models/Certificate.js'

export const certificates = [
  new Certificate({
    id: 'ccna',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    file: 'CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_simonsalamanca-av-academia-umb-edu-co_dcfcd8e4-596c-4557-ac87-9e04c1169c72.pdf',
  }),
  new Certificate({
    id: 'cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    file: 'Introduction_to_Cybersecurity_certificate_simonsalamanca-av-academia-umb-edu-co_6109e141-20bd-4e32-a31e-9459da78f2a1.pdf',
  }),
  new Certificate({
    id: 'linux-unhatched',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    file: 'Linux_Unhatched_certificate_simonsalamanca-av-academia-umb-edu-co_6ab13369-77d5-4090-a415-24429d4fa01b (1).pdf',
  }),
  new Certificate({
    id: 'linux-essentials',
    title: 'Linux Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    file: 'CertificadoCisco_LinuxEssentials.pdf',
  }),
  new Certificate({
    id: 'os-support',
    title: 'Operating System Support',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    file: 'CertificadoCisco_OperatingSystemSupport.pdf',
  }),
  new Certificate({
    id: 'ms-admin-resources',
    title: { es: 'Ruta de aprendizaje: Administrar recursos', en: 'Learning Path: Administer resources' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftAdminRecursos.pdf',
  }),
  new Certificate({
    id: 'ms-data-analysis',
    title: { es: 'Ruta de aprendizaje: Análisis de datos', en: 'Learning Path: Data analysis' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftAnalisisDatos.pdf',
  }),
  new Certificate({
    id: 'ms-data-warehouse',
    title: { es: 'Ruta de aprendizaje: Almacenamiento de datos', en: 'Learning Path: Data warehousing' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftDataWarehouse.pdf',
  }),
  new Certificate({
    id: 'ms-cloud-infra',
    title: { es: 'Ruta de aprendizaje: Infraestructura en la nube', en: 'Learning Path: Cloud infrastructure' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftInfraNube.pdf',
  }),
  new Certificate({
    id: 'ms-data-viz',
    title: { es: 'Ruta de aprendizaje: Visualización de datos', en: 'Learning Path: Data visualization' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftVisualizarDatos.pdf',
  }),
  new Certificate({
    id: 'ms-powershell',
    title: { es: 'Ruta de aprendizaje: Windows PowerShell', en: 'Learning Path: Windows PowerShell' },
    issuer: 'Microsoft',
    category: 'Microsoft',
    file: 'CertificadoRutaAprendizaje_MicrosoftWindowsPowerShell.pdf',
  }),
  new Certificate({
    id: 'sololearn-css',
    title: 'CSS',
    issuer: 'SoloLearn',
    category: 'SoloLearn',
    file: 'CertificadoSololearn_CSS.pdf',
  }),
  new Certificate({
    id: 'sololearn-js',
    title: 'JavaScript',
    issuer: 'SoloLearn',
    category: 'SoloLearn',
    file: 'CertificadoSololearn_JS.pdf',
  }),
  new Certificate({
    id: 'devseniorcode',
    title: { es: 'Programación Web — DevSeniorCode', en: 'Web Development — DevSeniorCode' },
    issuer: 'DevSeniorCode',
    category: 'DevSeniorCode',
    file: 'certificado_devseniorcode.pdf',
  }),
]

export const certificateCategories = ['Todos', 'Cisco', 'Microsoft', 'SoloLearn', 'DevSeniorCode']
