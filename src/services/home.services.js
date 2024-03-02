const { Tech } = require('../models');
const { ErrorDB } = require('../utils/errors');

const cache = require('../utils/cache');

/**
 * @description Obtiene una lista de tecnologías que se mostrarán en la página principal
 * @returns Lista de tecnologías favoritas
 */
async function getTechs() {
  if (cache.has('home-techs')) {
    return JSON.parse(cache.get('home-techs'));
  }
  const techs = await Tech.find({ favorite: true })
    .select('-__v')
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });
  cache.set('home-techs', JSON.stringify(techs));
  return techs;
}

module.exports = { getTechs };
