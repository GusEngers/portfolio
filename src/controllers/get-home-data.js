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
};
