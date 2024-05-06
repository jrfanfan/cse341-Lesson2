const routes = require('express').Router();
const inputController= require('../controllers/inputController')

routes.get('/', inputController.inputCon);

module.exports = routes;