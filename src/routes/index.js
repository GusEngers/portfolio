const router = require('express').Router();
const es = require('./es');
const pt = require('./pt');

const { homeRedirect } = require('../controllers');

// router.route('/').get(homeRedirect);
router.route('/').get((req, res) => {
  const techs = [{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},
  {name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},
  {name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},
  {name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},
  {name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},{name: "javascript", icon: "logos:javascript"},]
  res.render('home', {techs});
});
router.use('/es', es);
router.use('/pt', pt);

module.exports = router;
