const { Schema, model } = require('mongoose');

const Tech = model(
  'tech',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    details: [
      {
        type: String,
      },
    ],
  })
);

module.exports = Tech;
