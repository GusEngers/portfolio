const {
  getHomeTechs,
  getHomeProject,
} = require('../controllers/get-home-data');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const [techs, project] = await Promise.all([
      getHomeTechs(),
      getHomeProject(),
    ]);
    res.render('home', { techs, project });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = router;
