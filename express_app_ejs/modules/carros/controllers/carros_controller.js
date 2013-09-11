var Carro = require("../models/carro")

exports.index = function(req, res){
	res.render("index");
};

exports.json = function(req, res){
	Carro.all(function(carros, error) {
    if(error)
      res.send('404 Not found', 404);
    else{
      res.json(carros);
    }
  });
};


exports.insertOne = function(req, res){
	carro = {
    nome:"fiesta", 
    marca:"ford"
  }

  Carro.inserir(carro, function(carros, error) {
    if(error)
      res.send('Erro: ' + error.message, 404);
    else{
      res.send("dado inserido\n" + carro.nome);
    }
  });
};

exports.createTable = function(req, res){
	Carro.createTable(function(carros, error) {
    if(error)
      res.send('Erro ao criar tabela carros:' + error.message, 500);
    else{
      res.send('tabela carros criada');
    }
  });
};

exports.dropTable = function(req, res){
	Carro.dropTable(function(carros, error) {
    if(error)
      res.send('Erro ao deletar tabela carros:' + error.message, 500);
    else{
      res.send('tabela carros deletada');
    }
  });
};

