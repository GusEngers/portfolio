const { Cv } = require('../models');
const cache = require('../utils/cache');
const { ErrorDB, ErrorResponse } = require('../utils/errors');

/**
 * @description Obtiene un CV según su tipo
 * @returns Ruta url del CV
 */
async function getCv(cv) {
  if (cache.has(`cv-${cv}`)) return cache.get(`cv-${cv}`);

  const dataCv = await Cv.findOne({ name: cv })
    .select('-__v')
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });

  if (!dataCv) throw new ErrorResponse('Cv no encontrado', 404);
  cache.set(`cv-${cv}`, dataCv);
  return dataCv.path;
}

module.exports = { getCv };
