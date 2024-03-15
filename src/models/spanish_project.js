const { Schema, model } = require('mongoose');
const { TYPES } = require('../utils/constants');

const SpanishProject = model(
  'spanish_project',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: [
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
    created_at: {
      type: Date,
      default: Date.now()
    },
    updated_at: {
      type: Date,
      default: Date.now()
    }
  })
);

module.exports = SpanishProject;
