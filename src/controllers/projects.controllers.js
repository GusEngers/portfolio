const { projectsService } = require('../services');

/**
 * @description Renderiza la página de listado de todos los proyectos
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function getProjects(req, res, next) {
  try {
    res.render('pages/projects');
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
    res.render('pages/projects');
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
    res.render('pages/project');
  } catch (error) {
    next(error);
  }
}

/**
 * @description Retorna la información del proyecto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function getProjectAPI(req, res, next) {
  try {
    const { id } = req.params;
    const project = await projectsService.getProject(id);
    res.json(project);
  } catch (error) {
    next(error);
  }
}

module.exports = { getProjects, getProjectsAPI, getProjectsType, getProjectsTypeAPI, getProject, getProjectAPI };
