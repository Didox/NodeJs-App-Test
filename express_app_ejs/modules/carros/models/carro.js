require('../../../db/connection');

exports.all = function(callback){
  db.cnn.exec("select * from carros", callback);
}

exports.inserir = function(carro, callback){
	var query = "insert into carros(nome, marca)values('" + carro.nome + "', '" + carro.marca + "')";
  db.cnn.exec(query, callback);
};

exports.createTable = function(callback){
  db.cnn.exec(
		"CREATE TABLE carros (" +
		"  id bigint(20) NOT NULL AUTO_INCREMENT," +
		"  nome varchar(255) NOT NULL," +
		"  marca varchar(255)," +
		"  PRIMARY KEY (id)" +
		");"
	, callback);
}

exports.dropTable = function(callback){
  db.cnn.exec("DROP TABLE carros", callback);
};