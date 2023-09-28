const Project = require('../models/project');
const Tech = require('../models/tech');

module.exports = {
  /**
   * Obtiene las tecnologías que se mostrarán en
   * la página principal del porfolio
   * @returns Tech[]
   */
  getHomeTechs: async () => {
    try {
      const techs = await Tech.find({ favorite: true });
      return techs;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Obtiene el proyecto destacado que se mostrará en
   * la página principal del portfolio
   * @returns Project
   */
  getHomeProject: async () => {
    try {
      const project = await Project.findOne({ favorite: true });
      return project;
    } catch (error) {
      throw error;
    }
  },
};
