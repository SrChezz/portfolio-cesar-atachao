// Single source of truth for portfolio content.
// Data sourced from Cesar Atachao's CV, LinkedIn and Credly profiles.

export const profile = {
  name: 'Cesar Atachao',
  headline: 'Data Engineer · Cloud & Datos en AWS',
  location: 'Huancayo, Perú',
  email: 'cesaratachao@gmail.com',
  phone: '+51 985462186',
  links: {
    website: 'https://portfolio-cesar-atachao.vercel.app',
    linkedin: 'https://linkedin.com/in/cesaratachao',
    github: 'https://github.com/srchezz',
    credly: 'https://www.credly.com/users/cesaratachao/badges',
  },
  summary:
    'Data Engineer en Morris & Opazo (Partner AWS), especializado en el diseño y ' +
    'operación de pipelines de datos y soluciones cloud sobre AWS. Sólida base en ' +
    'análisis de datos, automatización con Python y SQL, respaldada por 6 ' +
    'certificaciones AWS (incluida Data Engineer Associate) y Google Cloud. ' +
    'Enfocado en construir arquitecturas de datos escalables, seguras y bien diseñadas.',
}

export const experience = [
  {
    role: 'Data Engineer',
    company: 'Morris & Opazo (Partner AWS)',
    location: 'En remoto · Jornada completa',
    period: 'Nov 2025 - Actualidad',
    highlights: [
      'Diseño y operación de pipelines de datos y soluciones cloud sobre AWS para proyectos de clientes del partner.',
      'Trabajo con servicios de datos de AWS (Glue, Redshift, S3, Lambda) aplicando buenas prácticas de arquitectura y seguridad.',
    ],
  },
  {
    role: 'Practicante de Análisis de Datos',
    company: 'Universidad Continental',
    location: 'Remoto',
    period: 'Abr 2025 - Actualidad',
    highlights: [
      'Automatización de la generación de informes con Python para limpieza y transformación de datos, reduciendo trabajo manual recurrente.',
      'Creación de visualizaciones y dashboards en Power BI para la toma de decisiones.',
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
    slug: 'aws-data-ingestion',
    name: 'Pipeline de Ingesta de Datos en AWS',
    tagline: 'Arquitectura de datos en tiempo real con SCD Tipo 2',
    url: 'https://github.com/catachao/aws-data-ingestion-restart',
    description:
      'Implementé un pipeline de ingesta y transformación de datos en AWS utilizando RDS, DMS, Glue y Redshift, con visualización en Power BI y manejo de Slowly Changing Dimensions (SCD Tipo 2).',
    stack: ['RDS', 'DMS', 'Glue', 'PySpark', 'Redshift', 'S3', 'Power BI'],
  },
]

// Deep-dive content for the dedicated project page.
// Extracted from github.com/catachao/aws-data-ingestion-restart.
export const projectDetails = {
  'aws-data-ingestion': {
    slug: 'aws-data-ingestion',
    name: 'Pipeline de Ingesta de Datos en AWS',
    tagline: 'Arquitectura de datos en tiempo real con Slowly Changing Dimensions (Tipo 2)',
    repo: 'https://github.com/catachao/aws-data-ingestion-restart',
    year: '2025',
    role: 'Diseño e implementación end-to-end',
    intro:
      'Un pipeline de ingesta y transformación de datos sobre AWS que mueve datos desde ' +
      'una base transaccional hasta un almacén analítico, con capas Bronze/Silver, ' +
      'transformaciones ETL en PySpark y trazabilidad histórica mediante Slowly Changing ' +
      'Dimensions (SCD Tipo 2). La orquestación es automática y el resultado se consume en Power BI.',
    architectureImage: '/projects/aws-architecture.gif',
    powerBiImage: '/projects/power-bi-diagram.png',
    // End-to-end data flow.
    flow: [
      {
        icon: 'Database',
        title: 'Amazon RDS (MySQL)',
        detail: 'Base de datos transaccional de origen. El esquema fuente se define con DDL en MySQL.',
      },
      {
        icon: 'Zap',
        title: 'AWS Lambda',
        detail: 'Automatiza los disparadores que inician los procesos de migración.',
      },
      {
        icon: 'ArrowLeftRight',
        title: 'AWS DMS',
        detail: 'Migra los datos desde RDS hacia Amazon S3 mediante un Database Migration Workflow.',
      },
      {
        icon: 'Layers',
        title: 'Amazon S3 (Bronze / Silver)',
        detail: 'Almacenamiento por capas: datos crudos (bronze) y parcialmente transformados (silver).',
      },
      {
        icon: 'Cog',
        title: 'AWS Glue (PySpark)',
        detail:
          'Jobs ETL con job bookmarks y hashing SHA-2 para detección de cambios. ' +
          'Transforma clientes, órdenes, detalles de órdenes y productos.',
      },
      {
        icon: 'Warehouse',
        title: 'Amazon Redshift',
        detail:
          'Data warehouse donde Stored Procedures aplican la lógica SCD Tipo 2, ' +
          'preservando el histórico de cambios en las dimensiones.',
      },
      {
        icon: 'BarChart3',
        title: 'Power BI',
        detail: 'Conectado a Redshift para reportes y dashboards analíticos.',
      },
    ],
    orchestration: [
      { icon: 'Workflow', label: 'AWS Step Functions', detail: 'Orquestación de los procesos ETL.' },
      { icon: 'CalendarClock', label: 'Amazon EventBridge', detail: 'Disparo programado y basado en eventos.' },
    ],
    highlights: [
      'Arquitectura por capas (Bronze / Silver) para separar datos crudos de datos procesados.',
      'SCD Tipo 2 en Redshift vía Stored Procedures para trazabilidad histórica completa.',
      'Detección incremental de cambios con job bookmarks y hashing SHA-2 en Glue.',
      'Orquestación automática con Step Functions + EventBridge.',
    ],
    stack: [
      'Amazon RDS',
      'AWS DMS',
      'AWS Lambda',
      'AWS Glue',
      'Amazon S3',
      'Amazon Redshift',
      'AWS Step Functions',
      'AWS EventBridge',
      'PySpark',
      'Power BI',
    ],
    // Mirrors the repository layout.
    structure: [
      { path: 'glue-jobs/load_jobs/', note: 'Job de carga (orders) hacia la capa bronze.' },
      { path: 'glue-jobs/transform_jobs/', note: 'ETL de customer, orders, order_details y product.' },
      { path: 'lambda-function/', note: 'Función que dispara la migración.' },
      { path: 'rds/', note: 'DDL del esquema fuente en MySQL.' },
      { path: 'redshift/DDL/', note: 'Tablas, vistas y vista materializada del sales mart.' },
      { path: 'redshift/SP/', note: 'Stored Procedures con lógica SCD Tipo 2.' },
      { path: 'step-functions/', note: 'Definición de la máquina de estados de orquestación.' },
    ],
  },
}

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
