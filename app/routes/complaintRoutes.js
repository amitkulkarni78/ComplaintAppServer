const express = require('express');
const Router = express.Router();
// import controllers 
const controllers = require('../controllers/controllers');

Router.route('/complaint/register')
.post(controllers.complaintController.registerComplaint);

Router.route('/complaint/update/:id')
.post(controllers.complaintController.updateComplaint);

Router.route('/complaints')
.get(controllers.complaintController.getAllComplaints);

Router.route('/complaint/delete/:id')
.post(controllers.complaintController.deleteComplaint);

module.exports = Router