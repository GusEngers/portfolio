const pt = require('express').Router();

pt.route('/').get();

pt.route('/projects').get();

pt.route('/projects/:type').get();

pt.route('/project/:id').get();

pt.route('/about_me').get();

pt.route('/contact').get();

module.exports = pt;
