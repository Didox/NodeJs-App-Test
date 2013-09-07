require('../db/connection');

Task = function(){}

Task.all = function(callback){
  db.cnn.exec("select * from tasks", callback);
};

module.exports = Task;