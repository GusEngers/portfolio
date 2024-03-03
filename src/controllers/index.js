const { ErrorDB, ErrorResponse } = require('../utils/errors');
// Controladores
const { getHome } = require('./home.controllers');
const { getProjects } = require('./projects.controllers');
// Middlewares
const { checkProjectsQuery } = require('../middlewares/check-query');

/**
 * @description Controlador para manejar errores en el renderizado de páginas
 * @param {Error|ErrorDB|ErrorResponse} err Error emitido
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function errorHandlerPage(err, req, res, next) {
  if (err instanceof ErrorDB || err instanceof ErrorResponse) return res.render('error', { error: err.response });
  const error = {
    message: 'Ocurrió un error inesperado',
    statusCode: 500,
  };
  res.render('error', { error });
}

module.exports = {
  getHomeController: [getHome, errorHandlerPage],
  getProjectsController: [checkProjectsQuery, getProjects, errorHandlerPage]
};
