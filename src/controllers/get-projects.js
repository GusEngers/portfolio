const Project = require('../models/project');

module.exports = {
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
