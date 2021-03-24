var sql= require('../db/connection');

var employeeModel=function(){}
//databse read all data
employeeModel.getAllEmployees=function(result){
    sql.query("SELECT * FROM  `contact`",function(err, rows, fields){
        if(err){
            return result(err,null);
        }else{
            return result(null,rows);
        }
    });
}
//databse insert

employeeModel.insertEmployee=function(newEmployee,result){
    sql.query("INSERT into contact SET  ?",newEmployee,function(err,res,field){
        if(err){
            return result(err,null);
        }else{
            return result(null,res);
        }
    });
   
}

employeeModel.deleteEmployee=function(newEmployee,result){
    sql.query("DELETE from contact where  ?",newEmployee,function(err,res,field){
        if(err){
            return result(err,null);
        }else{
            return result(null,res);
        }
    });
   
}

module.exports=employeeModel;