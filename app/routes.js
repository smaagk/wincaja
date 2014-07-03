//app routes
var express = require('express');
var router = express.Router();
var edge = require('edge');
var connection = require('./modules/connectionString');


module.exports = function(app){
	router.use(express.static(__dirname+'/public'));


	router.get('/clientes',function (req,res){
		var mySelect = edge.func('sql', {
    		source: function () {/*
       					 select * from Clientes 
   				*/},
   	 		connectionString: connection.url
	});

		mySelect(null,function (error, result){
				if(error){
					console.log(error);
				}else{
					console.log(result);
					res.json(result);
				}
	
		});
		
	});

	
	app.use('/wincaja',router);
}