const { getHomeTechs } = require("../services");

module.exports = {
  /**
   * Página principal de la aplicación en español
   * @param {Request} req
   * @param {Response} res
   */
  getHomePage: async function (req, res, next) {
    try {
      const techs = await getHomeTechs();
      res.render('pages/pt/home', { techs });
    } catch (error) {
      next(error);
    }
  }
}