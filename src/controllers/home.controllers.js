const { homeServices } = require('../services');

/**
 * @description Renderiza la página principal
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getHome(req, res, next) {
  try {
    const techs = await homeServices.getTechs();
    res.render('home', { techs });
  } catch (error) {
    next(error);
  }
}

module.exports = { getHome };
