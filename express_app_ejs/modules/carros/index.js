var express = require("express");
var engine = require('ejs-locals')
var controller = require('./controllers/carros_controller');
var app = module.exports = express();

app.engine('ejs', engine);
app.locals({ _layoutFile: "../../../views/layout.ejs" })
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/carros", controller.index);
app.get("/carros.json", controller.json);
app.get("/carros/db/criar", controller.createTable);
app.get("/carros/db/apagar", controller.dropTable);
app.get("/carros/db/criar-dados", controller.insertOne);