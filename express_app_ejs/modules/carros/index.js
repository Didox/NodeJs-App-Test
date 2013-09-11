var express = require("express");
var engine = require('ejs-locals')
var app = module.exports = express();

app.engine('ejs', engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.locals({
	_layoutFile: "../../../views/layout.ejs"
})

app.get("/carros", function(req, res){
	res.render("index");
});