const { Schema, model } = require('mongoose');
const { TYPES } = require('../utils/constants');

const Cv = model(
  'cv',
  new Schema({
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      enum: TYPES.filter((type) => type !== 'otros'),
      lowercase: true,
      unique: true,
      required: true,
    },
  })
);

module.exports = Cv;
