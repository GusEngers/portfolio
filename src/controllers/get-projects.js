const Project = require('../models/project');

module.exports = {
  getProject: async (id) => {
    try {
      const project = await Project.findById(id).populate('techs');
      return project;
    } catch (error) {
      throw error;
    }
  },
  getProjects: async (type = undefined) => {
    try {
      if (!type) {
        const projects = await Project.find({});
        return projects;
      }
      const projects = await Project.find({ type });
      return projects;
    } catch (error) {
      throw error;
    }
  },
};
