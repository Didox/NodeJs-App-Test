require('../db/connection');

Task = function(){}

Task.all = function(callback){
  db.cnn.exec("select * from tasks", callback);
};

Task.inserir = function(task, callback){
	var due_date = task.due_date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1');
	var done = task.done ? "1" : "0";
	var query = "insert into tasks(name, due_date, done)values('" + task.name + "', '" + due_date + "', '" + done + "')";
  db.cnn.exec(query, callback);
};

Task.update = function(task, callback){
	var due_date = task.due_date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1');
	var done = task.done ? "1" : "0";
	var query = "update tasks set name='" + task.name + "', due_date='" + due_date + "', done='" + done + "' where id=" + task.id;
  db.cnn.exec(query, callback);
};

Task.get = function(id, callback){
	var query = "select * from tasks where id=" + id;
  db.cnn.exec(query, callback);
};

Task.delete = function(id, callback){
	var query = "delete from tasks where id=" + id;
  db.cnn.exec(query, callback);
};

Task.delete_all = function(callback){
	var query = "delete from tasks";
  db.cnn.exec(query, callback);
};

module.exports = Task;