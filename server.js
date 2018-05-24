//two basic requirements to setup express on server
var express = require("express");
var bodyParser = require("body-parser");
//setup port for heroku deployment using process.env and for localhost using port 3000
var PORT = process.env.PORT || 3000;
//express setup following documentation guidlines
var app = express();
//static contetn grabbed from public html
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
