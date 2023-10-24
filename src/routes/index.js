const { getHomeTechs, getHomeProject } = require('../controllers/get-home-data');
const { getProject, getProjects } = require('../controllers/get-projects');
const { verifyId, verifyType } = require('../middlewares/verify-type');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // const [techs, project] = await Promise.all([
    //   getHomeTechs(),
    //   getHomeProject(),
    // ]);
    // res.render('home', { techs, project });
    res.render('pages/home');
  } catch (error) {
    // res.render('error', { error: error.message });
    res.json("error")
  }
});
/*
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

router.get('/proyecto/:id', verifyId, async (req, res) => {
  try {
    const project = await getProject(req.params.id);
    if (!project) {
      return res.render('project', {
        title: 'GusEngers - Proyecto no encontrado',
        project: null,
        msg: 'El proyecto que está buscando no existe',
      });
    }
    return res.render('project', {
      title: `GusEngers - ${project.name}`,
      project,
      msg: null,
    });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});
*/
module.exports = router;
