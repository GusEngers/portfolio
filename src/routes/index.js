const {
  getHomeTechs,
  getHomeProject,
} = require('../controllers/get-home-data');
const { getProjects } = require('../controllers/get-projects');
const { verifyType } = require('../middlewares/verify-type');

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

router.get('/proyectos', async (req, res) => {
  try {
    const projects = await getProjects();
    res.render('projects', { projects });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

router.get('/proyectos/:type', verifyType, async (req, res) => {
  try {
    const { type } = req.params;
    const projects = await getProjects(type);
    res.render('projects', { projects });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = router;
