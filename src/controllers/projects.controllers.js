const { projectsService } = require('../services');

/**
 * @description Renderiza la página de listado de todos los proyectos o filtrados por tecnología
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getProjects(req, res, next) {
  try {
    const { tech } = req.query;
    const projects = await projectsService.getProjects(tech);
    res.render('projects', { projects, type: tech ? 'all-tech' : 'all', tech });
  } catch (error) {
    next(error);
  }
}

module.exports = { getProjects };
