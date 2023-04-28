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
        url: 'https://github.com/PG-Movies-Group-1/Kinema-Project',
      },
      {
        name: 'Ver Código - V2',
        url: 'https://github.com/GusEngers/Kinema-Project-GE',
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
    techs: ['Node.js', 'JWT', 'Bcrypt', 'MongoDB', 'Mongoose'],
    links: [
      { name: 'Ver Código', url: 'https://github.com/GusEngers/user-auth-api' },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/drfty5u58/image/upload/v1681183825/car2zthqtxv2zpt0yymu.png',
    name: 'Weather-App',
    description:
      'Sitio web para consultar información respecto al clima de la ciudad que quiere buscar, además contempla la posibilidad de guardar distintas ciudades en su sección de favoritos.',
    techs: ['React', 'Redux-Toolkit', 'Axios', 'CSS'],
    links: [
      { name: 'Ver Código', url: 'https://github.com/GusEngers/weather-app' },
      {
        name: 'Ver Sitio Web',
        url: 'https://weather-app-gusengers.vercel.app/',
      },
    ],
  },
];
