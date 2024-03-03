const router = require('express').Router();
const es = require('./es');
const pt = require('./pt');

const con = require('../controllers');

router.route('/').get(con.getHomeController);
router.route('/projects').get(con.getProjectsController);
router.route('/projects/:type').get(con.getProjectsController);

router.route('/about').get((req, res) => {
  const techs = [
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
    { _id: 1, name: 'javascript', icon: 'logos:javascript' },
  ];
  res.render('home', { techs });
});


router.use('/es', es);
router.use('/pt', pt);

module.exports = router;
