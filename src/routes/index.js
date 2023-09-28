const {
  getHomeTechs,
  getHomeProject,
} = require('../controllers/get-home-data');

const R = require('express').Router();

R.get('/', async (req, res) => {
  try {
    const techs = await getHomeTechs();
    const project = await getHomeProject();
    res.render('home', { techs, project });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = R;
