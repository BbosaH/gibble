const express = require('express');

//create express app
const app = express();

//tell node which folder to serve
app.use(express.static('client'));

module.exports = app;
