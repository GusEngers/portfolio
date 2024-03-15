const api = require('express').Router();

const con = require('../controllers');

api.route('/projects').get(con.getProjectsApiController);
api.route('/projects/:type').get(con.getProjectsTypeApiController);
api.route('/project/:id').get(con.getProjectApiController);
api.route('/contact').post(con.postContactController);

module.exports = api;
