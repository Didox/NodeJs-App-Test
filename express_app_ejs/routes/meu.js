require("../models/task");

exports.index = function(req, res){
	Task.all(function(tasks, error) {
    if(error)
      res.send('404 Not found', 404);
    else
      res.render('meu/index', { title: 'meu', tasks: tasks });
  });
};