const { ErrorDB, ErrorResponse } = require('../utils/errors');
// Controladores
const { getHome } = require('./home.controllers');
const { getProjects, getProjectsAPI } = require('./projects.controllers');
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
  if (err instanceof ErrorDB || err instanceof ErrorResponse) return res.render('error', { error: err.response() });
  const error = {
    message: 'Ocurrió un error inesperado',
    statusCode: 500,
  };
  res.render('error', { error });
}

/**
 * @description Controlador para manejar errores en la API
 * @param {Error|ErrorDB|ErrorResponse} err Error emitido
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function errorHandlerApi(err, req, res, next) {
  if (err instanceof ErrorDB || err instanceof ErrorResponse) return res.status(err.statusCode).json(err.response());
  const error = {
    message: 'Ocurrió un error inesperado',
    statusCode: 500,
  };
  res.status(500).json(error);
}

module.exports = {
  getHomeController: [getHome, errorHandlerPage],
  getProjectsController: [getProjects, errorHandlerPage],
  getProjectsApiController: [checkProjectsQuery, getProjectsAPI, errorHandlerApi],
};
