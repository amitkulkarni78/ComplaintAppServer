const express = require('express');
const Router = express.Router();
// import controllers 
const controllers = require('../controllers/controllers');

Router.route('/token')
.get(controllers.authController.getToken);

module.exports = Router;