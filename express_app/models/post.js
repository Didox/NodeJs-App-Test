var mysql = require('mysql');
var dbURL = 'mysql://root@localhost/app_test';

exports.all = function(callback) {
  var connection = mysql.createConnection(dbURL);
  connection.query('SELECT * FROM posts', function(err, rows) {
    if(err) throw err
    callback(rows, err);
    connection.end();
  });
};