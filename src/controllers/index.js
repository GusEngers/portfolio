module.exports = {
  /**
   * Redirecciona la ruta principal `/` a la ruta `/es`
   * @param {Request} req 
   * @param {Response} res 
   */
  homeRedirect: function (req, res) {
    res.redirect('/es');
  },
};
