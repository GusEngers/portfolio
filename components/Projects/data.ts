type Links = {
  url: string;
  name: string;
};

export type Card = {
  image: string;
  name: string;
  description: string;
  techs: string[];
  links: Links[];
};

export const PJS: Card[] = [
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1681177477/ncn7xl1qkrb2rdfhkegk.png',
    name: 'KINEMA',
    description:
      'Sitio web de streaming de películas y series, consta de búsqueda por nombre, filtros por género y dos planes de suscripción (básico y premium).',
    techs: [
      'React',
      'Node.js',
      'Redux',
      'Express',
      'MongoDB',
      'Cloudinary',
      'Stripe',
      'Firebase',
    ],
    links: [
      {
        name: 'Ver Código - V1',
        url: 'https://github.com/PG-Movies-Group-1/Kinema-Project#readme',
      },
      {
        name: 'Ver Código - V2',
        url: 'https://github.com/GusEngers/Kinema-Project-GE#readme',
      },
      {
        name: 'Ver Sitio Web',
        url: 'https://kinema-entertainment.vercel.app/',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1682711752/Frame_1_o07l5u.png',
    name: 'Poke-App',
    description:
      'Sitio web con la finalidad de buscar información sobre pokemons, consta de diversos filtrados y contempla la posibilidad de crear tu propio pokemon.',
    techs: [
      'Javascript',
      'React',
      'Node.js',
      'Redux-Toolkit',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'CSS',
    ],
    links: [
      { name: 'Ver Código', url: 'https://github.com/GusEngers/PI-Pokemon' },
      {
        name: 'Actualmente se encuentra en desarrollo de su nueva versión. En breve estará disponible para su uso!',
        url: '#',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1682712653/uaapi_lxcx6g.png',
    name: 'User-Auth-Api',
    description:
      'API de autenticación y almacenamiento de usuarios en una base de datos, con contraseñas que pasan por su respectivo método de hashing.',
    techs: [
      'Javascript',
      'Node.js',
      'Express',
      'Joi',
      'JWT',
      'Bcrypt',
      'MongoDB',
      'Mongoose',
    ],
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/user-auth-api#readme',
      },
      { name: 'Documentación', url: 'https://ge-us.onrender.com/lhqcbldt' },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1681183825/car2zthqtxv2zpt0yymu.png',
    name: 'Weather-App',
    description:
      'Sitio web para consultar información respecto al clima de la ciudad que quiere buscar, además contempla la posibilidad de guardar distintas ciudades en su sección de favoritos.',
    techs: ['Javascript', 'React', 'Redux-Toolkit', 'Axios', 'CSS'],
    links: [
      { name: 'Ver Código', url: 'https://github.com/GusEngers/weather-app' },
      {
        name: 'Ver Sitio Web',
        url: 'https://weather-app-gusengers.vercel.app/',
      },
    ],
  },
  {
    image: 'https://miro.medium.com/max/2560/1*4RIXfWCSrDsagQWHil5unw.jpeg',
    name: 'Wikipedia-Scraping',
    description:
      'Pequeño proyecto de Web Scraping usando la página de Wikipedia con funciones como obtener los idiomas disponibles en la página, búsqueda de artículos y texto de artículos de forma individual.',
    techs: ['Javascript', 'Node.js', 'Express', 'Axios', 'Cheerio'],
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/wikipedia-scraping#readme',
      },
      {
        name: 'Documentación',
        url: 'https://ge-us.onrender.com/lh8ib4zp',
      },
    ],
  },
  {
    image:
      'https://www.javiramosmarketing.com/wp-content/uploads/2016/11/acortar-url.jpg',
    name: 'Url-Shorten',
    description:
      'Acortador de urls simple con pocas funcionalidades: añadir, redireccionar y obtener una lista con todas las urls. Está en proceso de desarrollo un cliente para un uso más cómodo.',
    techs: ['Javascript', 'Node.js', 'Express', 'Mongoose', 'MongoDB'],
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/url-shorten#readme',
      },
      {
        name: 'Actualmente su documentación se encuentra en desarrollo aunque pueden acceder al README del repositorio!',
        url: '#',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1684243337/tma_ycrowt.png',
    name: 'Tasks-Management-Api',
    description:
      'Con la finalidad de poner en práctica el desarrollo con NestJS surge este simple proyecto de manejo de tareas personal donde el objetivo era la modularización del código como así también lograr una conexión a una base de datos.',
    techs: ['Typescript', 'NestJS', 'Mongoose', 'MongoDB'],
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/url-shorten#readme',
      },
      {
        name: 'Documentación',
        url: 'https://ge-us.onrender.com/lhqdarcs',
      },
    ],
  },
];
