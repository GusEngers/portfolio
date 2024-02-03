const Tech = require('../models/tech');
const { ErrorDB } = require('../utils/errors');

const cache = require('../utils/cache');

module.exports = {
  /**
   * @param {string} lang Idioma de la aplicación
   * @returns Lista de tecnologías que se mostrarán en la página de inicio
   */
  getHomeTechs: async function (lang = 'es') {
    try {
      if (cache.has('techs-home')) return JSON.parse(cache.get('techs-home'));

      const techs = await Tech.find({ favorite: true }).lean();
      cache.set('techs-home', JSON.stringify(techs));
      return techs;
    } catch (error) {
      if (lang === 'es') throw new ErrorDB('Error al obtener la lista de tecnologías', error);
      if (lang === 'pt') throw new ErrorDB('Erro na obtenção da lista das tecnologias', error);
    }
  },
};
