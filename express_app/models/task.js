var mysql = require('mysql');
var dbURL = 'mysql://root:root@localhost/movimentosmatematicos';

exports.all = function(callback) {
  var connection = mysql.createConnection(dbURL);
  connection.query('SELECT * FROM Task', function(err, rows) {
    if(err) throw err
    callback(rows, err);
    connection.end();
  });
};