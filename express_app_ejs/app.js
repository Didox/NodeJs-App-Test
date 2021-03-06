
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals')
var routes = require('./routes');
var tasks = require('./routes/tasks');
var http = require('http');
var path = require('path');


var app = express();

app.engine('ejs', engine);

// app.set('view options', {layout: 'views/ss_layout.ejs'}); // não funciona
app.locals({
	_layoutFile:'../layout.ejs'
})

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/tasks', tasks.index);
app.get('/task/novo', tasks.novo);
app.get('/task/editar/:id', tasks.editar);
app.post('/task/criar', tasks.criar);
app.put('/task/atualizar/:id', tasks.atualizar);
app.delete('/task/apagar/:id', tasks.delete);


// trava o app node porque eu não deixei o app cair
// process.on('uncaughtException', function(err) {
//   console.log('Caught exception: ' + err);
// });

// ===== my modules ===========
var carros = require('./modules/carros');
app.use(carros);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
