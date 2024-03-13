const { cvsService } = require('../services');

/**
 * @description Obtiene la ruta url del CV y lo redirecciona hacia ella
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getCv(req, res, next) {
  try {
    const { cv } = req.params;
    const pathCv = await cvsService.getCv(cv);
    res.redirect(pathCv);
  } catch (error) {
    next(error);
  }
}

module.exports = { getCv };
