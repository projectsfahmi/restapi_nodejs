const express = require('express');
const app = express();

const mspasienRoutes = require('./routes/mspasien');

app.use('/mspasien',mspasienRoutes);

module.exports = app;