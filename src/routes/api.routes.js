const api = require('express').Router();

const { getProjectsApiController } = require('../controllers');

api.route('/projects').get(getProjectsApiController);

module.exports = api;
