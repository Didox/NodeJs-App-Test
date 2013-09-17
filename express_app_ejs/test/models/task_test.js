var assert = require("assert")
require("../../models/task")

describe('Task Model', function(){

	describe('methods', function(){
    it('should have a all method', function(){ assert(Task.all != undefined); })
    it('should have a inserir method', function(){ assert(Task.inserir != undefined); })
    it('should have a update method', function(){ assert(Task.update != undefined); })
    it('should have a get method', function(){ assert(Task.get != undefined); })
    it('should have a delete method', function(){ assert(Task.delete != undefined); })
    it('should have a delete_all method', function(){ assert(Task.delete_all != undefined); })
  });

  describe('#all()', function(){
  	task = {name:'didox', due_date:'12/12/2013', done:true};
  	Task.inserir(task, function(ok, error) {});

  	describe('should get all elements of Task model', function(){
	  	Task.all(function(tasks, error){
	    	console.log("quantidade === " + tasks.length);
	    	assert(tasks.length > 0 ); 
	    });
    });
  });

  // describe('#delete_all()', function(){
  // 	Task.delete_all(function(ok, error) {
	 //  	describe('should get all elements of Task model', function(){
		//   	Task.all(function(tasks, error){
		//     	assert(tasks.length == 0 ); 
		//     });
	 //    });
  // 	});
  // });

});