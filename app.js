require('dotenv').config();

var express       = require('express'),
    app           = express(),
    flash         = require("connect-flash");
    bodyParser    = require("body-parser");



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

app.set("view engine", "ejs");


var answer = [];
var choice = [];

    app.get("/", function(req, res){
      res.render("home/home");
    });

    app.get("/start", function(req, res){
      res.render("start/start");
    })

    app.post("/results", function(req, res){
      choice = req.body.choice;
      if(answer.length > 0){
        answer.splice(0, 1, choice);
      } else {
         answer.push(choice);
      }
      res.redirect("/results");
    })

    app.get("/results", function(req, res){
        
        res.render("results/results", {answer: answer});
    })


    var port = process.env.PORT || 3000;
    app.listen(port, function(){
      console.log("Indecision Connected on Port 3000!")
    });