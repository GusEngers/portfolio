const router = require('express').Router();
const es = require('./es');
const pt = require('./pt');

const con = require('../controllers');

// router.route('/').get(homeRedirect);
router.route('/').get(con.getHomeController);
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
router.route('/projects').get((req, res) => {
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
router.route('/projects/1').get((req, res) => {
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
