const { isObjectIdOrHexString } = require('mongoose');
const { ErrorResponse } = require('../utils/errors');
const { TYPES } = require('../utils/constants');

/**
 * @description Verifica si el parámetro ingresado es correcto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkProjectsTypeApiParams(req, res, next) {
  const { type } = req.params;
  if (type !== 'full-stack' && type !== 'back-end' && type !== 'front-end' && type !== 'other') {
    return next(new ErrorResponse('El parámetro indicado es incorrecto', 403));
  }
  next();
}

/**
 * @description Verifica si el parámetro ingresado es correcto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkProjectsTypeParams(req, res, next) {
  const { type } = req.params;
  if (type !== 'full-stack' && type !== 'back-end' && type !== 'front-end' && type !== 'other') {
    return res.render('error', { error: new ErrorResponse('El parámetro indicado es incorrecto', 403).response() });
  }
  next();
}

/**
 * @description Verifica si el formato del ID ingresado es correcto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkProjectParams(req, res, next) {
  const { id } = req.params;
  if (!isObjectIdOrHexString(id)) {
    return res.render('error', { error: new ErrorResponse('El ID tiene un formato incorrecto', 403).response() });
  }
  next();
}

/**
 * @description Verifica si el formato del ID ingresado es correcto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkProjectApiParams(req, res, next) {
  const { id } = req.params;
  if (!isObjectIdOrHexString(id)) {
    return next(new ErrorResponse('El ID tiene un formato incorrecto', 403));
  }
  next();
}

/**
 * @description Verifica si el nombre del CV buscado es correcto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function checkCvParams(req, res, next) {
  const { cv } = req.params;
  if (cv === 'otros' || !TYPES.includes(cv)) return res.render('not-found');
  next();
}

module.exports = { checkProjectsTypeApiParams, checkProjectsTypeParams, checkProjectParams, checkProjectApiParams, checkCvParams };
