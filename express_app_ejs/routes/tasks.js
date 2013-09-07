require("../models/task");

exports.index = function(req, res){
	Task.all(function(tasks, error) {
    if(error)
      res.send('404 Not found', 404);
    else{
      res.render('tasks/index', { 
      	dateFormat: require('dateformat'), 
      	tasks: tasks 
     	});
    }
  });
};

exports.novo = function(req, res){
  res.render('tasks/novo');
};

exports.delete = function(req, res){
  var urlArray = req.url.split("/");
  var id = urlArray[urlArray.length - 1];
  Task.delete(id, function(ok, error) {
    if(error)
      res.send('Erro ao cadastrar : ' + error.message, 500);
    else{
      res.redirect('/tasks');
    }
  });
};

exports.atualizar = function(req, res){
  var urlArray = req.url.split("/");
  var id = urlArray[urlArray.length - 1];
  task = {
    id:id,
    name:req.param("name"), 
    due_date:req.param("due_date"), 
    done:req.param("done")
  }

  Task.update(task, function(ok, error) {
    if(error)
      res.send('Erro ao atualizar : ' + error.message, 500);
    else{
      res.redirect('/tasks');
    }
  });
};

exports.editar = function(req, res){
  var urlArray = req.url.split("/");
  var id = urlArray[urlArray.length - 1];
  Task.get(id, function(tasks, error) {
    if(error)
      res.send('Erro na edicao : ' + error.message, 500);
    else{
      task = tasks[0];
      res.render('tasks/editar', { 
        dateFormat: require('dateformat'), 
        task: task 
      });
    }
  });
};

exports.criar = function(req, res){
  task = {
    name:req.param("name"), 
    due_date:req.param("due_date"), 
    done:req.param("done")
  }

  Task.inserir(task, function(ok, error) {
    if(error)
      res.send('Erro ao cadastrar : ' + error.message, 500);
    else{
      res.redirect('/tasks');
    }
  });
};