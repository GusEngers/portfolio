const Axios = require('axios').default;
const { GUS_MAILER_URI } = require('./constants');

const axios = Axios.create({
  baseURL: GUS_MAILER_URI,
});

module.exports = { axios };
