const Tech = require('../models/tech');

module.exports = {
  /**
   * Obtiene las tecnologías que se mostrarán en
   * la página principal del porfolio
   * @returns Tech[]
   */
  getHomeTechs: async () => {
    try {
      const techs = await Tech.find({ favorite: true }).lean();
      return techs;
    } catch (error) {
      throw error;
    }
  },
  getTechs: async () => {
    try {
      const techs = await Tech.find({});
      return techs;
    } catch (error) {
      throw error;
    }
  }
};
