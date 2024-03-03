const { SpanishProject } = require('../models');
const { ErrorDB } = require('../utils/errors');

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

    const projects = await SpanishProject.find({ techs: tech })
      .select('-__v -features -images -techs -type')
      .sort({ favorite: -1, _id: -1 })
      .lean()
      .catch((e) => {
        throw new ErrorDB(e);
      });
    cache.set(`projects-all-${tech}`, projects);
    return projects;
  }

  // Todos los proyectos
  if (cache.has('projects-all')) return cache.get('projects-all');

  const projects = await SpanishProject.find({})
    .select('-__v -features -images -techs -type')
    .sort({ favorite: -1, _id: -1 })
    .lean()
    .catch((e) => {
      throw new ErrorDB(e);
    });
  cache.set('projects-all', projects);
  return projects;
}

module.exports = { getProjects };
