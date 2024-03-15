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

/**
 * @description Obtiene mi edad actual de forma dinámica
 * @returns Edad actual
 */
function getAge() {
  const current = new Date();
  const [currentYear, currentMonth, currentDay] = [current.getFullYear(), current.getMonth() + 1, current.getDate()];
  const original = new Date('2000-07-17');
  const [originalYear, originalMonth, originalDay] = [original.getFullYear(), original.getMonth() + 1, original.getDate()];

  let currentAge = currentYear - originalYear;
  if (currentMonth < originalMonth || (currentMonth === originalMonth && currentDay < originalDay)) {
    currentAge--;
  }
  return currentAge;
}

/**
 * @returns Lista con datos de mis distintas formaciones académicas
 */
function getStudies() {
  const { STUDIES } = require('../utils/constants');
  return STUDIES;
}

module.exports = { getCvs, getTechs, getAge, getStudies };
