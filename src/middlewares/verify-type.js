const { TYPES } = require('../utils/constants');

module.exports = {
  verifyType: (req, res, next) => {
    if (!TYPES.includes(req.params.type)) {
      return res.render('not-found');
    }
    next();
  },
};
