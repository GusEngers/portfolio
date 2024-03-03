const express = require('express');
const path = require('path');
const handleCors = require('./utils/handleCors');
const handleNotFound = require('./utils/handleNotFound');
const handleError = require('./utils/handleError');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(require('morgan')('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));

app.use(handleCors);

app.use('/', router);

// app.use(handleError);
app.use(handleNotFound);

module.exports = app;
