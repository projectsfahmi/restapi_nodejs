const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mspasienRoutes = require('./routes/mspasien');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/mspasien',mspasienRoutes);


module.exports = app;