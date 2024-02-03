const router = require('express').Router();
const es = require('./es');
const pt = require('./pt');

const { homeRedirect } = require('../controllers');

router.route('/').get(homeRedirect);
router.use('/es', es);
router.use('/pt', pt);

module.exports = router;
