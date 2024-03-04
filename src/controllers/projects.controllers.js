const { projectsService } = require('../services');

/**
 * @description Renderiza la página de listado de todos los proyectos
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function getProjects(req, res, next) {
  try {
    res.render('projects');
  } catch (error) {
    next(error);
  }
}

/**
 * @description Retorna listado de todos los proyectos o filtrados por tecnología obtenidos de la base de datos
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getProjectsAPI(req, res, next) {
  try {
    const { tech } = req.query;
    const projects = await projectsService.getProjects(tech);
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

/**
 * @description Renderiza la página de listado de todos los proyectos según su tipo
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function getProjectsType(req, res, next) {
  try {
    res.render('projects');
  } catch (error) {
    next(error);
  }
}

/**
 * @description Retorna listado de todos los proyectos según su tipo obtenidos de la base de datos
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getProjectsTypeAPI(req, res, next) {
  try {
    const { type } = req.params;
    const projects = await projectsService.getProjectsType(type);
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

/**
 * @description Renderiza la página con la información del proyecto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function getProject(req, res, next) {
  try {
    res.render('project');
  } catch (error) {
    next(error);
  }
}

module.exports = { getProjects, getProjectsAPI, getProjectsType, getProjectsTypeAPI, getProject };
