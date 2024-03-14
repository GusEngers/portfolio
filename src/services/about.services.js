const { Cv, Tech } = require('../models');
const cache = require('../utils/cache');
const { ErrorDB } = require('../utils/errors');

/**
 * @description Obtiene todos los CV almacenados
 * @returns Lista de CV
 */
async function getCvs() {
  if (cache.has('cvs')) return cache.get('cvs');

  const dataCvs = await Cv.find({})
    .select('-__v')
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });

  cache.set('cvs', dataCvs);
  return dataCvs;
}

/**
 * @description Obtiene todas las tecnologías almacenadas
 * @returns Lista de tecnologías
 */
async function getTechs() {
  if (cache.has('techs')) return cache.get('techs');

  const techs = await Tech.find({})
    .sort({ favorite: -1 })
    .select('-__v')
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });

  cache.set('techs', techs);
  return techs;
}

module.exports = { getCvs, getTechs };
