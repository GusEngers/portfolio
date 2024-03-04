const client = require('express').Router();
const con = require('../controllers');

client.route('/').get(con.getHomeController);
client.route('/projects').get(con.getProjectsController);
client.route('/projects/:type').get(con.getProjectsTypeController);
client.route('/project/:id').get(con.getProjectController);

module.exports = client;
