const { getHomeTechs } = require('../controllers/get-home-data');
const { getProject, getProjects } = require('../controllers/get-projects');
const { verifyId, verifyType } = require('../middlewares/verify-type');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const techs = await getHomeTechs();
    res.render('pages/home', { techs });
  } catch (error) {
    res.render('pages/error', { error: error.message });
  }
});

router.get('/proyectos', async (req, res) => {
  try {
    const projects = await getProjects();
    res.render('pages/projects', { title: 'todos los proyectos', projects });
  } catch (error) {
    res.render('pages/error', { error: error.message });
  }
});

router.get('/proyectos/:type', verifyType, async (req, res) => {
  try {
    const { type } = req.params;
    const projects = await getProjects(type);
    const title = type === 'otros' ? `${type} proyectos` : `todos los proyectos ${type}`;
    res.render('pages/projects', { title, projects });
  } catch (error) {
    res.render('pages/error', { error: error.message });
  }
});

router.get('/proyecto/:id', verifyId, async (req, res) => {
  try {
    const project = await getProject(req.params.id);
    if (!project) {
      return res.render('pages/project', {
        title: 'Proyecto no encontrado',
        project: null,
      });
    }
    return res.render('pages/project', {
      title: project.name,
      project,
    });
  } catch (error) {
    res.render('pages/error', { error: error.message });
  }
});

router.get('/sobre_mi', async (req, res) => {
  try {
    res.render('pages/about-me');
  } catch (error) {
    res.render('pages/error', { error: error.message });
  }
});

router.route('/contacto').get((req, res) => {
  res.render('pages/contact');
});
module.exports = router;
