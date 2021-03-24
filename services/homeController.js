var homeController=function(){}


homeController.index=function(req,res){
    res.render('index',{title:'Home page'});
}

module.exports=homeController

