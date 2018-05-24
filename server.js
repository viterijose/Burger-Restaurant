//two basic requirements to setup express on server
var express = require("express");
var bodyParser = require("body-parser");
//setup port for heroku deployment using process.env and for localhost using port 3000
var PORT = process.env.PORT || 3000;
//express setup following documentation guidlines
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//import handlebars
var exphbs = require("express-handlebars");
//setup default html page
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//import routes and give them access to server
var routes = require("./controllers/burgerController.js");
app.use(routes);
app.listen(PORT, function(){
    console.log("App listening on port: "+PORT);
});