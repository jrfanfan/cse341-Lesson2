const routes = require('express').Router();
const htmlController= require('../controllers/htmlController')

routes.get('/input', htmlController.inputCon);
routes.get('/update', htmlController.updateDataById);
module.exports = routes;