const { isObjectIdOrHexString } = require('mongoose');
const { TYPES } = require('../utils/constants');

module.exports = {
  verifyId: (req, res, next) => {
    if (!isObjectIdOrHexString(req.params.id)) {
      return res.render('pages/error', {
        error: 'El id proporcionado no tiene un formato válido',
      });
    }
    next();
  },
  verifyType: (req, res, next) => {
    if (!TYPES.includes(req.params.type)) {
      return res.render('pages/not-found');
    }
    next();
  },
};
