var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';




router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/qui",function(req,res){
  res.sendFile(path + "qui.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});


router.get("/newsletter",function(req,res){
  res.sendFile(path + "newsletter.html");
});


app.use("/",router);

app.use(express.static(__dirname + '/public'));


app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
