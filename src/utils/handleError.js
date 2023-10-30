module.exports = (err, req, res, next) => {
  res.render('pages/error', { error: err.message });
};
