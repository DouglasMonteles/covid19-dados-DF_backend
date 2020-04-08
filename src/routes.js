const express = require('express');

const routes = express.Router();

const DataCovidController = require('./controllers/DataCovidController');

routes.get('/dados', DataCovidController.store);

module.exports = routes;