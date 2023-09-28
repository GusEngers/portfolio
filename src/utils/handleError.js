module.exports = (err, req, res, next) => {
  res.render('error', { error: err.message });
};
