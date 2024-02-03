const { getHomeTechs } = require('../services');

module.exports = {
  /**
   * Página principal de la aplicación en español
   * @param {Request} req
   * @param {Response} res
   */
  homePage: async function (req, res, next) {
    try {
      const techs = await getHomeTechs();
      res.render('es/home', { techs });
    } catch (error) {
      next(error);
    }
  },
};
