const router = require('express').Router();

router.use('/api', require('./api.routes'));
router.use('/', require('./client.routes'));

module.exports = router;
