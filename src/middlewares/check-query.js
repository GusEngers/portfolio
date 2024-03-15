const { isObjectIdOrHexString } = require('mongoose');
const { ErrorResponse } = require('../utils/errors');

/**
 * @description Verifica si, en caso de existir la query `tech`, cumple con su formato ID
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkProjectsQuery(req, res, next) {
  const { tech } = req.query;
  if (tech && !isObjectIdOrHexString(tech)) {
    return next(new ErrorResponse('El ID de filtrado por tecnología es incorrecto', 403));
  }
  next();
}



module.exports = { checkProjectsQuery };
