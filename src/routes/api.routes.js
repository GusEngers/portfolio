const api = require('express').Router();

const con = require('../controllers');

api.route('/projects').get(con.getProjectsApiController);
api.route('/projects/:type').get(con.getProjectsTypeApiController);

module.exports = api;
