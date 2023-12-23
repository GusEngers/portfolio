const Project = require('../models/project');

module.exports = {
  getProject: async (id) => {
    try {
      const project = await Project.findById(id).populate('techs').lean();
      return project;
    } catch (error) {
      throw error;
    }
  },
  getProjects: async (type = undefined) => {
    try {
      if (!type) {
        const projects = await Project.find({}).sort({ favorite: -1, _id: -1 }).lean();
        return projects;
      }
      const projects = await Project.find({ type }).sort({ favorite: -1, _id: -1 }).lean();
      return projects;
    } catch (error) {
      throw error;
    }
  },
};
