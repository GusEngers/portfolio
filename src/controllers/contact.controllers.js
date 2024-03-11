const { axios } = require('../utils/axios');

/**
 * @description Renderiza la página de contacto
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
function getContact(req, res, next) {
  try {
    res.render('contact');
  } catch (error) {
    next(error);
  }
}

/**
 * @description Realiza el envío de correo usando Gus-Mailer
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Función Next
 */
async function postContactApi(req, res, next) {
  try {
    const subject = 'Contacto desde Portfolio';
    const data = {
      name: req.body.name,
      application: 'Portfolio',
      message: req.body.message,
    };
    await axios.post(`/template/3yxj6lj17e5ldo2r?subject=${subject}&email=${req.body.email}&name=${data.name}`, data).catch((e) => {
      console.log('[ERROR-GUS-MAILER] Error:', e);
      throw new Error(e);
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = { getContact, postContactApi };
