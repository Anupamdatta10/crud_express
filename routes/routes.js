var express=require('express');
var routes= express.Router();
var homeController= require('../services/homeController');
var employeeController= require('../services/employeeController');

//home page routes
routes.get('/',employeeController.employeeIndex);

//employee routes
routes.get('/employee',employeeController.employeeIndex);
routes.get('/employeeinsert',employeeController.employeeIndex);
routes.get('/employee/add',employeeController.add);
routes.post('/employee/add',employeeController.save);
routes.get('/employee/delete',employeeController.deleteinput);
routes.post('/employee/delete',employeeController.delete);
routes.get('/employee/update',employeeController.updateinput);
module.exports=routes;