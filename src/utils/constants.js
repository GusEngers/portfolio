require('dotenv').config();

module.exports = {
  // Variables de entorno para la ejecución de la aplicación
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  GUS_MAILER_URI: process.env.GUS_MAILER_URI,

  // Constantes
  TYPES: ['full-stack', 'back-end', 'front-end', 'otros'],
  STUDIES: [
    {
      name: 'Certificación en SQL',
      service: 'Imagina Formación',
      date: 'Febrero de 2024',
      certification: 'https://superskill.pro/diploma/W6TgHcn02pATFwNOifNJe2HtVNsrLsYh',
    },
    {
      name: 'Combinaciones y Subconsultas SQL',
      service: 'Desafío Latam',
      date: 'Febrero de 2024',
      certification: 'https://tutorial-sql.s3.amazonaws.com/certificates/9991_Gustavo%20el%C3%ADas_Engers/9991_22022024.png',
    },
    {
      name: 'Consultas Básicas SQL',
      service: 'Desafío Latam',
      date: 'Febrero de 2024',
      certification: 'https://tutorial-sql.s3.amazonaws.com/certificates/9861_Gustavo%20el%C3%ADas_Engers/9861_20022024.png',
    },
    {
      name: 'Consultas sobre Datos Agrupados SQL',
      service: 'Desafío Latam',
      date: 'Febrero de 2024',
      certification: 'https://tutorial-sql.s3.amazonaws.com/certificates/9922_Gustavo%20el%C3%ADas_Engers/9922_21022024.png',
    },
    {
      name: 'Inserción, Edición y Eliminación de Registros SQL',
      service: 'Desafío Latam',
      date: 'Febrero de 2024',
      certification: 'https://tutorial-sql.s3.amazonaws.com/certificates/10002_Gustavo%20el%C3%ADas_Engers/10002_22022024.png',
    },
    {
      name: 'Tablas y Fundamentos de Integridad SQL',
      service: 'Desafío Latam',
      date: 'Febrero de 2024',
      certification: 'https://tutorial-sql.s3.amazonaws.com/certificates/10025_Gustavo%20el%C3%ADas_Engers/10025_22022024.png',
    },
    {
      name: 'Back-End Development and APIs',
      service: 'freeCodeCamp',
      date: 'Enero de 2024',
      certification: 'https://freecodecamp.org/certification/GusEngers/back-end-development-and-apis',
    },
    {
      name: 'Diseño UX/UI',
      service: 'Accenture',
      date: 'Enero de 2024',
      certification: '',
    },
    {
      name: 'Javascript Algorithms and Data Structures',
      service: 'freeCodeCamp',
      date: 'Enero de 2024',
      certification: 'https://freecodecamp.org/espanol/certification/GusEngers/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Certificación en Typescript',
      service: 'Imagina Formación',
      date: 'Diciembre de 2023',
      certification: 'https://superskill.pro/diploma/lhrXcervcCNqamJRs_kVfXAwnx9Q5G9x',
    },
    {
      name: 'Responsive Web Design',
      service: 'freeCodeCamp',
      date: 'Diciembre de 2023',
      certification: 'https://freecodecamp.org/espanol/certification/GusEngers/responsive-web-design',
    },
    {
      name: 'Certificación en Angular',
      service: 'OpenBootcamp',
      date: 'Marzo de 2023',
      certification: 'https://community.open-bootcamp.com/user/gusengers/certificaciones/cffd0ba7-9e8e-4929-b2dc-81f4d8b2ac3a',
    },
    {
      name: 'Certificación en Python',
      service: 'OpenBootcamp',
      date: 'Febrero de 2023',
      certification: 'https://community.open-bootcamp.com/user/gusengers/certificaciones/cd565257-4a3f-4b55-acd8-f924dec8466a',
    },
    {
      name: 'Certificación en Typescript',
      service: 'OpenBootcamp',
      date: 'Febrero de 2023',
      certification: 'https://community.open-bootcamp.com/user/gusengers/certificaciones/4d186bef-d375-4a42-8dfc-3bdce475606e',
    },
    {
      name: 'Certificación en Javascript',
      service: 'OpenBootcamp',
      date: 'Enero de 2023',
      certification: 'https://community.open-bootcamp.com/user/gusengers/certificaciones/49d13051-3e72-4927-8ae7-7f2b81dd481a',
    },
    {
      name: 'Desarrollador Web Full-Stack',
      service: 'Henry Bootcamp',
      date: 'Julio de 2022 - Noviembre de 2022',
      certification: '',
    },
  ],
};
