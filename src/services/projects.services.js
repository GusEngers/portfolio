const { SpanishProject, Tech } = require('../models');
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

module.exports = { getProjects };
