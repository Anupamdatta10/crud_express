var employeeController = function () {}
var employeeModel = require('../models/employeeModel');

employeeController.employeeIndex = function (req, res, next) {
    employeeModel.getAllEmployees(function (err, employees) {
        if (err) {
            throw err;
        } else {
            
            res.render('employee/employeeIndex', { title: 'Employee Listing', employees: employees });
        }
    });

}
employeeController.add = function (req, res, next) {
    
        res.render('employee/insertemployee', { title: 'Add Employee'});
   

}
employeeController.save = function (req, res, next) {
 
    
        var newEmployee={
            name:req.body.name,
            phno:req.body.phno
        }
      
        employeeModel.insertEmployee(newEmployee, function (err) {
            if (err) {
                res.render('submit',{title:'error'});
            } else {
                res.render('submit',{title:'successfully inserted!'});
            }
           
        });
    
   
}

employeeController.deleteinput = function (req, res, next){
    res.render('employee/employeedelete', { title: 'delete Employee'});
}
employeeController.delete = function (req, res, next) {
 
    
    var newEmployee={
        
        phno:req.body.phno
    }
   
    employeeModel.deleteEmployee(newEmployee, function (err) {
        if (err) {
            res.render('submit',{title:'error'});
        } else {
            res.render('submit',{title:'successfully deleted!'});
        }
    });


}
employeeController.updateinput =function (req,res,next){
    res.render('employee/employeeupdate',{title:'update employee'});
}
employeeController.update=function(req, res, next) {
    var newEmployee={
        name:req.body.name,
        phno:req.body.phno
    }
    id=req.body.phno
    employeeModel.updateEmployee();
}
module.exports = employeeController;