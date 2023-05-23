import { IProject } from '../interfaces/project.interface';

export const PROJECTS: IProject[] = [
  {
    name: 'KINEMA',
    description:
      'Sitio web de streaming de películas y series, consta de búsqueda por nombre, filtros por género y dos planes de suscripción (básico y premium).',
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1681177477/ncn7xl1qkrb2rdfhkegk.png',
    links: [
      {
        name: 'Ver Código - V1.0',
        url: 'https://github.com/PG-Movies-Group-1/Kinema-Project#readme',
      },
      {
        name: 'Ver Código - V2.0',
        url: 'https://github.com/GusEngers/Kinema-Project-GE#readme',
      },
      {
        name: 'Ver Sitio Web',
        url: 'https://kinema-entertainment.vercel.app/',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'Node.js' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Express' },
      { name: 'Mongoose' },
      { name: 'Cloudinary' },
      { name: 'Stripe' },
      { name: 'Firebase' },
      { name: 'Nodemailer' },
    ],
  },
  {
    name: 'Poke-App',
    description:
      'Sitio web con la finalidad de buscar información sobre pokemons, consta de diversos filtrados y contempla la posibilidad de crear tu propio pokemon.',
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1682711752/Frame_1_o07l5u.png',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/PI-Pokemon',
      },
      {
        name: 'Actualmente se encuentra en desarrollo de una nueva versión. En breve estará disponible para su uso!',
        url: '#',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'Node.js' },
      { name: 'React' },
      { name: 'Redux-Toolkit' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'Sequelize' },
      { name: 'CSS' },
    ],
  },
  {
    name: 'User-Auth-Api',
    description:
      'API de autenticación, autorización y almacenamiento de usuarios en una base de datos, con contraseñas que pasan por su respectivo método de hashing.',
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1682712653/uaapi_lxcx6g.png',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/user-auth-api#readme',
      },
      {
        name: 'Ver Documentación',
        url: 'https://documenter.getpostman.com/view/24779129/2s93eX1spC',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Joi' },
      { name: 'JWT' },
      { name: 'Bcrypt' },
      { name: 'Mongoose' },
      { name: 'MongoDB' },
    ],
  },
  {
    name: 'Weather-App',
    description:
      'Sitio web para consultar información respecto al clima de la ciudad que quiere buscar, además contempla la posibilidad de guardar distintas ciudades en su sección de favoritos.',
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1681183825/car2zthqtxv2zpt0yymu.png',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/weather-app',
      },
      {
        name: 'Ver Sitio Web',
        url: 'https://weather-app-gusengers.vercel.app/',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'React' },
      { name: 'Redux-Toolkit' },
      { name: 'Axios' },
      { name: 'CSS' },
    ],
  },
  {
    name: 'Wikipedia-Scraping',
    description:
      'Pequeño proyecto de Web Scraping usando la página de Wikipedia con funciones como obtener los idiomas disponibles en la página, búsqueda de artículos y texto de artículos de forma individual.',
    image: 'https://miro.medium.com/max/2560/1*4RIXfWCSrDsagQWHil5unw.jpeg',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/wikipedia-scraping#readme',
      },
      {
        name: 'Ver Documentación',
        url: 'https://documenter.getpostman.com/view/24779129/2s93eU4FR9',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Axios' },
      { name: 'Cheerio' },
    ],
  },
  {
    name: 'Url-Shorten',
    description:
      'Acortador de urls simple con pocas funcionalidades: añadir, redireccionar y obtener una lista con todas las urls. Está en proceso de desarrollo un cliente para un uso más cómodo.',
    image:
      'https://www.javiramosmarketing.com/wp-content/uploads/2016/11/acortar-url.jpg',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/url-shorten#readme',
      },
      {
        name: 'Realizar una prueba',
        url: '/url_shorten',
      },
    ],
    techs: [
      { name: 'Javascript' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Mongoose' },
      { name: 'MongoDB' },
    ],
  },
  {
    name: 'Tasks-Management-Api',
    description:
      'Proyecto de manejo de tareas personal usando NestJS donde el objetivo era la modularización del código como así también lograr una conexión a una base de datos.',
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1684243337/tma_ycrowt.png',
    links: [
      {
        name: 'Ver Código',
        url: 'https://github.com/GusEngers/tasks-management-api#readme',
      },
      {
        name: 'Ver Documentación',
        url: 'https://documenter.getpostman.com/view/24779129/2s93eYWYDB',
      },
    ],
    techs: [
      { name: 'Typescript' },
      { name: 'NestJS' },
      { name: 'Mongoose' },
      { name: 'MongoDB' },
    ],
  },
];
