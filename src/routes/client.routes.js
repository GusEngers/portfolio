const client = require('express').Router();
const con = require('../controllers');

client.route('/').get(con.getHomeController);
client.route('/projects').get(con.getProjectsController);
client.route('/projects/:type').get(con.getProjectsTypeController);
client.route('/project/:id').get(con.getProjectController);
client.route('/contact').get(con.getContactController);
client.route('/cv/:cv').get(con.getCvController);
client.route('/about').get(con.getAboutController);

module.exports = client;
