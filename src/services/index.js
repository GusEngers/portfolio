const Tech = require('../models/tech');

const cache = require('../utils/cache');

module.exports = {
  /**
   * @returns Lista de tecnologías que se mostrarán en la página de inicio
   */
  getHomeTechs: async function () {
    try {
      if (cache.has('techs-home')) {
        console.log('Usando caché')
        return JSON.parse(cache.get('techs-home'));
      }
      console.log('Sin usar caché')
      const techs = await Tech.find({ favorite: true }).lean();
      cache.set('techs-home', JSON.stringify(techs));
      return techs;
    } catch (error) {
      // TODO: Crear clase de error para peticiones de la base de datos
      throw new Error(error.message);
    }
  },
};
