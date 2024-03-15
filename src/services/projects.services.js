const { SpanishProject, Tech } = require('../models');
const { ErrorDB, ErrorResponse } = require('../utils/errors');

const cache = require('../utils/cache');

/**
 * @description Obtiene una lista de todos los proyectos o filtrada según tecnología
 * @param {string} tech ID para filtrar por tecnología (opcional)
 * @returns Lista de todos los proyectos
 */
async function getProjects(tech = undefined) {
  // Proyectos por filtro
  if (tech) {
    if (cache.has(`projects-all-${tech}`)) return cache.get(`projects-all-${tech}`);

    const [techName, projects] = await Promise.all([
      Tech.findById(tech).select('-__id -__v -icon').lean(),
      SpanishProject.find({ techs: tech }).select('-__v -features -images -techs -favorite').sort({ favorite: -1, _id: -1 }).lean(),
    ]).catch((e) => {
      throw new ErrorDB(e);
    });

    const data = { projects, title: `Todos los proyectos con ${techName.name}` };
    cache.set(`projects-all-${tech}`, data);
    return data;
  }

  // Todos los proyectos
  if (cache.has('projects-all')) return cache.get('projects-all');

  const projects = await SpanishProject.find({})
    .select('-__v -features -images -techs')
    .sort({ favorite: -1, _id: -1 })
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });
  const data = { projects, title: `Todos los proyectos` };
  cache.set(`projects-all`, data);
  return data;
}

/**
 * @description Obtiene una lista de todos los proyectos según su tipo
 * @param {'full-stack'|'back-end'|'front-end'|'other'} type Tipo de proyecto
 * @returns Lista de proyectos
 */
async function getProjectsType(type) {
  let typeStr = type;
  if (type === 'other') {
    typeStr = 'otros';
  }
  if (cache.has(`projects-type-${type}`)) return cache.get(`projects-type-${type}`);

  const projects = await SpanishProject.find({ type: typeStr })
    .select('-__v -features -images -techs')
    .sort({ favorite: -1, _id: -1 })
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });
  let title = typeStr === 'otros' ? 'Otros proyectos' : `Todos los proyectos ${typeStr.toUpperCase()}`;
  const data = { projects, title };
  cache.set(`projects-type-${type}`, data);
  return data;
}

async function getProject(id) {
  if (cache.has(`project-${id}`)) return cache.get(`project-${id}`);

  const project = await SpanishProject.findById(id).select('-__v').populate('techs').lean();
  if (!project) throw new ErrorResponse('El proyecto no existe', 404);
  cache.set(`project-${id}`, project);
  return project;
}

module.exports = { getProjects, getProjectsType, getProject };
