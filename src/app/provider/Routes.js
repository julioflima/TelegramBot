const express = require('express');
const BotController = require('../controller/BotController');

module.exports = class Routes {
  constructor() {
    this.routes = express.Router();

    return this.init();
  }

  init() {
    this.map();
    return this.routes;
  }

  map() {
    this.routes.get('/job', BotController.job);
    this.routes.get('/status', BotController.status);
  }
};
