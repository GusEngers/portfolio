const Tech = require('../models/tech');

module.exports = {
  getTechs: async () => {
    try {
      const techs = await Tech.find({});
      return techs;
    } catch (error) {
      throw error;
    }
  }
};
