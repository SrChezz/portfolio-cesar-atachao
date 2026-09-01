// Bilingual content (ES/EN) — single source of truth for display copy.
// Data grounded in Cesar Atachao's CV, LinkedIn, and Credly. Copy rewritten
// to a high professional standard: confident, specific, first-person.

export const profile = {
  name: 'Cesar Atachao',
  headline: {
    es: 'Data Engineer · Arquitecturas de datos confiables en AWS',
    en: 'Data Engineer · Reliable data architectures on AWS',
  },
  location: { es: 'Huancayo, Perú', en: 'Huancayo, Peru' },
  email: 'cesaratachao@gmail.com',
  phone: '+51 985462186',
  links: {
    website: 'https://portfolio-cesar-atachao.vercel.app',
    linkedin: 'https://linkedin.com/in/cesaratachao',
    github: 'https://github.com/srchezz',
    credly: 'https://www.credly.com/users/cesaratachao/badges',
  },
  summary: {
    es:
      'Data Engineer en Morris & Opazo (Partner AWS). He liderado equipos en más de 25 ' +
      'proyectos, diseñando arquitecturas de datos sobre AWS. He trabajado en proyectos ' +
      'para el sector financiero, priorizando desempeño, seguridad e idempotencia en ' +
      'procesos críticos. Busco consolidarme en roles de ingeniería y arquitectura de ' +
      'datos en entornos internacionales.',
    en:
      'Data Engineer at Morris & Opazo (AWS Partner). I have led teams across more than ' +
      '25 projects, designing data architectures on AWS. I have delivered projects for the ' +
      'financial sector, prioritizing performance, security, and idempotency in ' +
      'business-critical processes. I am looking to grow into data engineering and ' +
      'architecture roles in international environments.',
  },
}

export const experience = [
  {
    role: { es: 'Data Engineer', en: 'Data Engineer' },
    company: 'Morris & Opazo (AWS Partner)',
    location: { es: 'En remoto · Jornada completa', en: 'Remote · Full-time' },
    period: { es: 'Nov 2025 - Actualidad', en: 'Nov 2025 - Present' },
    highlights: [
      {
        es: 'Lideré equipos en más de 25 proyectos de ingeniería de datos, diseñando arquitecturas sobre AWS.',
        en: 'Led teams across 25+ data engineering projects, designing architectures on AWS.',
      },
      {
        es: 'Construí pipelines confiables para el sector financiero, priorizando desempeño, seguridad e idempotencia en procesos críticos.',
        en: 'Built reliable pipelines for the financial sector, prioritizing performance, security, and idempotency in business-critical processes.',
      },
      {
        es: 'Trabajé con servicios de datos de AWS (Glue, Redshift, S3, Lambda) aplicando buenas prácticas de arquitectura Well-Architected.',
        en: 'Worked with AWS data services (Glue, Redshift, S3, Lambda) applying Well-Architected best practices.',
      },
    ],
  },
  {
    role: { es: 'Practicante de Análisis de Datos', en: 'Data Analysis Intern' },
    company: 'Universidad Continental',
    location: { es: 'Remoto', en: 'Remote' },
    period: { es: 'Abr 2025 - Nov 2025', en: 'Apr 2025 - Nov 2025' },
    highlights: [
      {
        es: 'Automaticé un proceso que tomaba 5 días y lo reduje a horas, usando Python, SQL y Power BI.',
        en: 'Automated a process that took 5 days down to hours, using Python, SQL, and Power BI.',
      },
      {
        es: 'Construí dashboards en Power BI para apoyar la toma de decisiones basada en datos.',
        en: 'Built Power BI dashboards to support data-driven decision-making.',
      },
    ],
  },
  {
    role: { es: 'Power Platform Developer', en: 'Power Platform Developer' },
    company: 'Continua Continental',
    location: { es: 'Huancayo, Perú', en: 'Huancayo, Peru' },
    period: { es: 'Mar 2025 - May 2025', en: 'Mar 2025 - May 2025' },
    highlights: [
      {
        es: 'Optimicé tareas y la gestión de datos con Microsoft Power Platform (Power Apps, Power Automate, SharePoint, Power BI).',
        en: 'Streamlined tasks and data management with Microsoft Power Platform (Power Apps, Power Automate, SharePoint, Power BI).',
      },
    ],
  },
  {
    role: { es: 'Desarrollador Front-end', en: 'Front-end Developer' },
    company: 'Fixa Digital',
    location: { es: 'Huancayo, Perú', en: 'Huancayo, Peru' },
    period: { es: 'Feb 2024 - Mar 2025', en: 'Feb 2024 - Mar 2025' },
    highlights: [
      {
        es: 'Desarrollé aplicaciones front-end escalables con Vue.js, TypeScript, Tailwind, Docker y Git/GitLab.',
        en: 'Developed scalable front-end applications with Vue.js, TypeScript, Tailwind, Docker, and Git/GitLab.',
      },
    ],
  },
]

export const skills = [
  {
    category: { es: 'Tecnologías', en: 'Technologies' },
    items: [
      'Python',
      'SQL Server',
      'Oracle SQL',
      'PySpark',
      'Power BI',
      'Excel',
      'Docker',
      'Linux',
      'Networking',
      'CCNA',
      'GitHub',
      'Git',
      'Vue.js',
    ],
  },
  {
    category: { es: 'Cloud & Datos', en: 'Cloud & Data' },
    items: [
      'AWS',
      'AWS Glue',
      'Amazon S3',
      'Amazon Redshift',
      'AWS Lambda',
      'AWS DMS',
      'Amazon EC2',
      'CloudFront',
      'Step Functions',
      'EventBridge',
      'GCP',
      'Azure',
    ],
  },
]

export const projects = [
  {
    slug: 'aws-data-ingestion',
    name: { es: 'Pipeline de Ingesta de Datos en AWS', en: 'AWS Data Ingestion Pipeline' },
    tagline: {
      es: 'Arquitectura de datos en tiempo real con SCD Tipo 2',
      en: 'Real-time data architecture with SCD Type 2',
    },
    url: 'https://github.com/catachao/aws-data-ingestion-restart',
    description: {
      es: 'Pipeline de ingesta y transformación de datos en AWS con RDS, DMS, Glue y Redshift, visualización en Power BI y manejo de Slowly Changing Dimensions (SCD Tipo 2).',
      en: 'A data ingestion and transformation pipeline on AWS using RDS, DMS, Glue, and Redshift, with Power BI visualization and Slowly Changing Dimensions (SCD Type 2) handling.',
    },
    stack: ['RDS', 'DMS', 'Glue', 'PySpark', 'Redshift', 'S3', 'Power BI'],
  },
]

export const education = [
  {
    institution: 'Universidad Continental',
    degree: {
      es: 'Bachiller en Ingeniería de Sistemas e Informática',
      en: 'B.Sc. in Systems & Computer Engineering',
    },
    period: { es: 'Ago 2021 - Dic 2025', en: 'Aug 2021 - Dec 2025' },
    highlights: [
      { es: 'Promedio ponderado: 17.2 / 20.0', en: 'GPA: 17.2 / 20.0' },
      { es: 'Top 10% de la clase', en: 'Top 10% of the class' },
      {
        es: 'Experiencia global: Global Teams y Global Partners in Education',
        en: 'Global experience: Global Teams and Global Partners in Education',
      },
    ],
  },
  {
    institution: 'ICPNA',
    degree: {
      es: 'Certificación de Nivel Avanzado en Inglés',
      en: 'Advanced English Certification',
    },
    period: { es: 'Mar 2015 - Dic 2017', en: 'Mar 2015 - Dec 2017' },
    highlights: [{ es: 'Becario de la Beca Access', en: 'Access Scholarship recipient' }],
  },
]

export const extracurricular = [
  {
    role: { es: 'AWS Cloud Club Captain — Universidad Continental', en: 'AWS Cloud Club Captain — Universidad Continental' },
    org: 'Amazon Web Services',
    period: { es: 'Nov 2025 - Actualidad', en: 'Nov 2025 - Present' },
  },
  {
    role: { es: 'Programa AWS re/Start', en: 'AWS re/Start Program' },
    org: 'Morris & Opazo',
    period: { es: 'Mar 2025 - Jul 2025', en: 'Mar 2025 - Jul 2025' },
  },
]

// Static certifications fallback (live Credly badges override this at build time).
export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'Sep 2025', group: 'AWS' },
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', date: 'Jul 2026', group: 'AWS' },
  { name: 'AWS Certified Data Engineer – Associate', issuer: 'Amazon Web Services', date: 'May 2026', group: 'AWS' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'Apr 2026', group: 'AWS' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Jul 2025', group: 'AWS' },
  { name: 'Associate Cloud Engineer', issuer: 'Google Cloud', date: 'Sep 2025', group: 'Google Cloud' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', date: 'Feb 2025', group: 'Otros' },
  { name: 'CCNA', issuer: 'Cisco', date: 'Jul 2025', group: 'Otros' },
]

// UI strings (labels, section titles, nav, etc.)
export const ui = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    projects: { es: 'Proyectos', en: 'Projects' },
    blog: { es: 'Blog', en: 'Blog' },
  },
  sections: {
    experience: { es: 'Experiencia', en: 'Experience' },
    skills: { es: 'Habilidades', en: 'Skills' },
    projects: { es: 'Proyectos', en: 'Projects' },
    certifications: { es: 'Certificaciones', en: 'Certifications' },
    education: { es: 'Educación', en: 'Education' },
    community: { es: 'Comunidad', en: 'Community' },
  },
  labels: {
    certsVerified: { es: 'certificaciones verificadas', en: 'verified certifications' },
    caseStudy: { es: 'Ver caso de estudio', en: 'View case study' },
    viewRepo: { es: 'Ver repositorio', en: 'View repository' },
    back: { es: 'Volver', en: 'Back' },
    backToPortfolio: { es: 'Volver al portafolio', en: 'Back to portfolio' },
    viewCode: { es: 'Ver el código en GitHub', en: 'View the code on GitHub' },
    onGithub: { es: 'En GitHub', en: 'On GitHub' },
    caseStudies: { es: 'Casos de estudio', en: 'Case studies' },
    reposSynced: {
      es: 'Repositorios públicos, sincronizados automáticamente en cada despliegue.',
      en: 'Public repositories, synced automatically on every deploy.',
    },
    workPortfolio: { es: 'Portafolio de trabajo', en: 'Work portfolio' },
    projectsLead: {
      es: 'Casos de estudio detallados y repositorios públicos en constante evolución.',
      en: 'Detailed case studies and evolving public repositories.',
    },
    techNotes: { es: 'Notas técnicas', en: 'Technical notes' },
    blogLead: {
      es: 'Escritos sobre ingeniería de datos, nube y aprendizaje continuo.',
      en: 'Writing on data engineering, cloud, and continuous learning.',
    },
    comingSoon: { es: 'Próximamente', en: 'Coming soon' },
    blogEmpty: {
      es: 'Estoy preparando artículos técnicos sobre ingeniería de datos, arquitectura en AWS y lo que voy aprendiendo. Vuelve pronto.',
      en: 'I am preparing technical articles on data engineering, AWS architecture, and what I learn along the way. Check back soon.',
    },
    followLinkedin: { es: 'Sígueme en LinkedIn', en: 'Follow me on LinkedIn' },
  },
  project: {
    caseStudy: { es: 'Caso de estudio', en: 'Case study' },
    dataFlow: { es: 'Flujo de datos', en: 'Data flow' },
    orchestration: { es: 'Orquestación', en: 'Orchestration' },
    highlights: { es: 'Puntos clave', en: 'Highlights' },
    stack: { es: 'Stack tecnológico', en: 'Tech stack' },
    repoStructure: { es: 'Estructura del repositorio', en: 'Repository structure' },
    powerBiCaption: {
      es: 'Modelo de datos conectado a Redshift en Power BI',
      en: 'Data model connected to Redshift in Power BI',
    },
    archCaption: {
      es: 'Arquitectura general del pipeline en AWS',
      en: 'Overall pipeline architecture on AWS',
    },
    notFound: { es: 'Proyecto no encontrado.', en: 'Project not found.' },
    role: { es: 'Diseño e implementación end-to-end', en: 'End-to-end design & implementation' },
  },
}

// Project deep-dive (bilingual).
export const projectDetails = {
  'aws-data-ingestion': {
    slug: 'aws-data-ingestion',
    name: { es: 'Pipeline de Ingesta de Datos en AWS', en: 'AWS Data Ingestion Pipeline' },
    tagline: {
      es: 'Arquitectura de datos en tiempo real con Slowly Changing Dimensions (Tipo 2)',
      en: 'Real-time data architecture with Slowly Changing Dimensions (Type 2)',
    },
    repo: 'https://github.com/catachao/aws-data-ingestion-restart',
    year: '2025',
    intro: {
      es: 'Un pipeline de ingesta y transformación de datos sobre AWS que mueve datos desde una base transaccional hasta un almacén analítico, con capas Bronze/Silver, transformaciones ETL en PySpark y trazabilidad histórica mediante Slowly Changing Dimensions (SCD Tipo 2). La orquestación es automática y el resultado se consume en Power BI.',
      en: 'A data ingestion and transformation pipeline on AWS that moves data from a transactional database to an analytical warehouse, with Bronze/Silver layers, PySpark ETL transformations, and historical traceability via Slowly Changing Dimensions (SCD Type 2). Orchestration is automated and the output is consumed in Power BI.',
    },
    architectureImage: '/projects/aws-architecture.gif',
    powerBiImage: '/projects/power-bi-diagram.png',
    flow: [
      { icon: 'Database', title: 'Amazon RDS (MySQL)', detail: { es: 'Base de datos transaccional de origen, definida con DDL en MySQL.', en: 'Source transactional database, defined with MySQL DDL.' } },
      { icon: 'Zap', title: 'AWS Lambda', detail: { es: 'Automatiza los disparadores que inician la migración.', en: 'Automates the triggers that start the migration.' } },
      { icon: 'ArrowLeftRight', title: 'AWS DMS', detail: { es: 'Migra los datos desde RDS hacia Amazon S3.', en: 'Migrates data from RDS into Amazon S3.' } },
      { icon: 'Layers', title: 'Amazon S3 (Bronze / Silver)', detail: { es: 'Almacenamiento por capas: datos crudos y parcialmente transformados.', en: 'Layered storage: raw and partially transformed data.' } },
      { icon: 'Cog', title: 'AWS Glue (PySpark)', detail: { es: 'Jobs ETL con job bookmarks y hashing SHA-2 para detección de cambios.', en: 'ETL jobs with job bookmarks and SHA-2 hashing for change detection.' } },
      { icon: 'Warehouse', title: 'Amazon Redshift', detail: { es: 'Stored Procedures aplican la lógica SCD Tipo 2, preservando el histórico.', en: 'Stored Procedures apply SCD Type 2 logic, preserving history.' } },
      { icon: 'BarChart3', title: 'Power BI', detail: { es: 'Conectado a Redshift para reportes y dashboards analíticos.', en: 'Connected to Redshift for analytical reports and dashboards.' } },
    ],
    orchestration: [
      { icon: 'Workflow', label: 'AWS Step Functions', detail: { es: 'Orquestación de los procesos ETL.', en: 'Orchestration of the ETL processes.' } },
      { icon: 'CalendarClock', label: 'Amazon EventBridge', detail: { es: 'Disparo programado y basado en eventos.', en: 'Scheduled and event-based triggering.' } },
    ],
    highlights: [
      { es: 'Arquitectura por capas (Bronze / Silver) que separa datos crudos de datos procesados.', en: 'Layered architecture (Bronze / Silver) separating raw from processed data.' },
      { es: 'SCD Tipo 2 en Redshift vía Stored Procedures para trazabilidad histórica completa.', en: 'SCD Type 2 in Redshift via Stored Procedures for full historical traceability.' },
      { es: 'Detección incremental de cambios con job bookmarks y hashing SHA-2 en Glue.', en: 'Incremental change detection with job bookmarks and SHA-2 hashing in Glue.' },
      { es: 'Orquestación automática con Step Functions + EventBridge.', en: 'Automated orchestration with Step Functions + EventBridge.' },
    ],
    stack: ['Amazon RDS', 'AWS DMS', 'AWS Lambda', 'AWS Glue', 'Amazon S3', 'Amazon Redshift', 'AWS Step Functions', 'AWS EventBridge', 'PySpark', 'Power BI'],
    structure: [
      { path: 'glue-jobs/load_jobs/', note: { es: 'Job de carga (orders) hacia la capa bronze.', en: 'Load job (orders) into the bronze layer.' } },
      { path: 'glue-jobs/transform_jobs/', note: { es: 'ETL de customer, orders, order_details y product.', en: 'ETL for customer, orders, order_details, and product.' } },
      { path: 'lambda-function/', note: { es: 'Función que dispara la migración.', en: 'Function that triggers the migration.' } },
      { path: 'rds/', note: { es: 'DDL del esquema fuente en MySQL.', en: 'Source schema DDL in MySQL.' } },
      { path: 'redshift/DDL/', note: { es: 'Tablas, vistas y vista materializada del sales mart.', en: 'Tables, views, and the sales mart materialized view.' } },
      { path: 'redshift/SP/', note: { es: 'Stored Procedures con lógica SCD Tipo 2.', en: 'Stored Procedures with SCD Type 2 logic.' } },
      { path: 'step-functions/', note: { es: 'Definición de la máquina de estados.', en: 'State machine definition.' } },
    ],
  },
}
