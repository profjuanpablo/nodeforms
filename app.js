const express=require('express');
const bodyParser=require('body-parser');
const mysql= require('mysql');
const handlebars=require('express-handlebars');
const app= express();

//template engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');



//Totas e templates
app.get("/",function(req,res){
    /*res.send("Essá é a página Inicial");
    res.sendFile(__dirname+"/index.html"); */
   res.render('index');
  // console.log(req.parms.id);
});

app.get("/javascript",function(req,res){
    res.sendFile(__dirname+'/js/javascript.js');
});

app.get("/style",function(req,res){
    res.sendFile(__dirname+'/css/style.css');
});

//Indicar server
app.listen(3000);

