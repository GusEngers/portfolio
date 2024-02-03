const { Schema, model } = require('mongoose');
const { TYPES } = require('../utils/constants');

const Project = model(
  'project',
  new Schema({
    name_es: {
      type: String,
      required: true,
    },
    name_pt: {
      type: String,
      required: true,
    },
    description_es: {
      type: String,
      required: true,
    },
    description_pt: {
      type: String,
      required: true,
    },
    tasks_es: [
      {
        type: String,
        required: true,
      },
    ],
    tasks_pt: [
      {
        type: String,
        required: true,
      },
    ],
    favorite: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    type: {
      type: String,
      lowercase: true,
      enum: TYPES,
    },
    github: {
      type: String,
      required: true,
    },
    deploy: {
      type: String,
    },
    docs: {
      type: String,
    },
    techs: [
      {
        ref: 'tech',
        type: Schema.Types.ObjectId,
      },
    ],
  })
);

module.exports = Project;
