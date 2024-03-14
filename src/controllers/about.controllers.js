const { aboutService } = require('../services');

/**
 * @description Renderiza la página 'Sobre Mí'
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getAbout(req, res, next) {
  try {
    const [cvs, techs] = await Promise.all([aboutService.getCvs(), aboutService.getTechs()]);
    res.render('about', { cvs, techs });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAbout };
