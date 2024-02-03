const NodeCache = require('node-cache');

const cache = new NodeCache({
  stdTTL: 1000 * 60 * 60,
});

module.exports = cache;
