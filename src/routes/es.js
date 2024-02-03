const es = require('express').Router();

const { homePage } = require('../controllers/es');

es.route('/').get(homePage);

es.route('/projects').get();

es.route('/projects/:type').get();

es.route('/project/:id').get();

es.route('/about_me').get();

es.route('/contact').get();

module.exports = es;
