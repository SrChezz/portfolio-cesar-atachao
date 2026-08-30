// Single source of truth for portfolio content.
// Data sourced from Cesar Atachao's CV, LinkedIn and Credly profiles.

export const profile = {
  name: 'Cesar Atachao',
  headline: 'Analista de Datos & Desarrollador Cloud',
  location: 'Huancayo, Perú',
  email: 'cesaratachao@gmail.com',
  phone: '+51 985462186',
  links: {
    website: 'https://d1uof5bak6tr0e.cloudfront.net',
    linkedin: 'https://linkedin.com/in/cesaratachao',
    github: 'https://github.com/srchezz',
    credly: 'https://www.credly.com/users/cesaratachao/badges',
  },
  summary:
    'Profesional con 1 año y 9 meses de experiencia práctica en análisis de datos, ' +
    'automatización y desarrollo de aplicaciones en la nube. Dominio de SQL y Python, ' +
    'con una sólida formación en tecnología y conocimientos en computación en la nube. ' +
    'Busco aplicar este conjunto de habilidades diversas en tecnologías cloud.',
}

export const experience = [
  {
    role: 'Practicante de Análisis de Datos',
    company: 'Universidad Continental',
    location: 'Remoto',
    period: 'Abr 2025 - Actualidad',
    highlights: [
      'Automatización de procesos de generación de informes usando Python para la limpieza, transformación de datos y la creación de visualizaciones en Power BI.',
    ],
  },
  {
    role: 'Power Platform Developer',
    company: 'Continua Continental',
    location: 'Huancayo, Perú',
    period: 'Mar 2025 - May 2025',
    highlights: [
      'Uso de Microsoft Power Platform (Power Apps, Power Automate, SharePoint, Power BI) para optimizar la eficiencia de las tareas y la gestión de datos.',
    ],
  },
  {
    role: 'Desarrollador Front-end',
    company: 'Fixa Digital',
    location: 'Huancayo, Perú',
    period: 'Feb 2024 - Mar 2025',
    highlights: [
      'Desarrollo de aplicaciones front-end escalables con Vue.js, utilizando TypeScript, Tailwind, CSS, Docker y Git/GitLab.',
    ],
  },
]

export const skills = [
  {
    category: 'Tecnologías',
    items: [
      'Power BI',
      'Linux',
      'Networking',
      'CCNA',
      'GitHub',
      'SQL Server',
      'Oracle SQL',
      'Excel',
      'PySpark',
      'Docker',
      'Vue.js',
    ],
  },
  {
    category: 'Cloud Computing',
    items: [
      'AWS',
      'Glue',
      'EC2',
      'S3',
      'Redshift',
      'Lambda',
      'CloudFront',
      'GCP',
      'Azure',
    ],
  },
]

export const projects = [
  {
    name: 'Pipeline de Ingesta de Datos en AWS',
    url: 'https://github.com/catachao/aws',
    description:
      'Implementé un pipeline de ingesta y transformación de datos en AWS utilizando RDS, DMS, Glue y Redshift, con visualización en Power BI y manejo de Slowly Changing Dimensions (SCD Tipo 2).',
    stack: ['RDS', 'Glue', 'PySpark', 'MySQL', 'Power BI'],
  },
]

export const education = [
  {
    institution: 'Universidad Continental',
    degree: 'Bachiller en Ingeniería de Sistemas e Informática',
    period: 'Ago 2021 - Dic 2025',
    highlights: [
      'Promedio Ponderado: 17.2 / 20.0',
      'Perteneciente al Top 10% de la Clase',
      'Experiencia Global: participación activa en Global Teams y Global Partners in Education',
    ],
  },
  {
    institution: 'ICPNA',
    degree: 'Certificación de Nivel Avanzado en Inglés',
    period: 'Mar 2015 - Dic 2017',
    highlights: ['Becario de la Beca Access'],
  },
]

// Certifications verified via Credly (credly.com/users/cesaratachao).
export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'Sep 2025', group: 'AWS' },
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', date: 'Jul 2026', group: 'AWS' },
  { name: 'AWS Certified Data Engineer – Associate', issuer: 'Amazon Web Services', date: 'May 2026', group: 'AWS' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'Apr 2026', group: 'AWS' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Jul 2025', group: 'AWS' },
  { name: 'AWS re/Start Graduate', issuer: 'Amazon Web Services', date: 'Jul 2025', group: 'AWS' },
  { name: 'AWS Cloud Club Captain', issuer: 'AWS Community', date: 'Nov 2025', group: 'AWS' },
  { name: 'AWS SBG Leader Badge', issuer: 'AWS Community', date: 'Jul 2026', group: 'AWS' },
  { name: 'AWS Partner: Migration Essentials (Training)', issuer: 'Amazon Web Services', date: 'May 2026', group: 'AWS' },
  { name: 'AWS Partner: Migration Acceleration Program Authorized (Training)', issuer: 'Amazon Web Services', date: 'Jun 2026', group: 'AWS' },
  { name: 'Associate Cloud Engineer', issuer: 'Google Cloud', date: 'Sep 2025', group: 'Google Cloud' },
  { name: 'Build Infrastructure with Terraform on Google Cloud (Skill Badge)', issuer: 'Google Cloud', date: 'Sep 2025', group: 'Google Cloud' },
  { name: 'Build a Secure Google Cloud Network (Skill Badge)', issuer: 'Google Cloud', date: 'Sep 2025', group: 'Google Cloud' },
  { name: 'Develop Your Google Cloud Network (Skill Badge)', issuer: 'Google Cloud', date: 'Sep 2025', group: 'Google Cloud' },
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Coursera', date: 'May 2025', group: 'Google Cloud' },
  { name: 'Google IT Support Professional Certificate', issuer: 'Coursera', date: 'May 2025', group: 'Google Cloud' },
  { name: 'CCNA', issuer: 'Cisco', date: 'Jul 2025', group: 'Otros' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', date: 'Feb 2025', group: 'Otros' },
  { name: 'Microsoft Office Specialist: Excel Expert (Office 2019)', issuer: 'Microsoft', date: 'Jan 2025', group: 'Otros' },
  { name: 'GitHub Foundations', issuer: 'GitHub', date: 'Jan 2025', group: 'Otros' },
  { name: 'PMI Project Management Ready™', issuer: 'Project Management Institute', date: 'Aug 2024', group: 'Otros' },
  { name: 'IBM SkillsBuild Cybersecurity Certificate', issuer: 'IBM SkillsBuild', date: 'May 2025', group: 'Otros' },
  { name: 'IBM Z Xplore - Advanced', issuer: 'IBM', date: 'Aug 2024', group: 'Otros' },
]

export const extracurricular = [
  {
    role: 'AWS Re/Start Program',
    org: 'Morris & Opazo',
    period: 'Mar 2025 - Jul 2025',
  },
  {
    role: 'AWS Captain — Universidad Continental',
    org: 'Amazon Web Services',
    period: 'Nov 2025 - Actualidad',
  },
]
