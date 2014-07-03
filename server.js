//server.js 

	//configuración del servidor =========================================================
	var express = require('express');					//llamamos a express
	var app = express();											//generamos la aplicación con express
	var bodyParser = require('body-parser');
	var port = process.env.PORT || 3000;			//definimos el puerto
	var router2 = express.Router();

	//configuramos la app para usar bodyParser()
	//bodyParser nos va a permitir obtener datos de un POST
	app.use(bodyParser());

	//routes
	require('./app/routes.js')(app);
	router2.use(express.static(__dirname+'/public'));
	app.use('/wincaja',router2);
	//iniciamos el servidor
	app.listen(port);
	console.log('Servidor iniciado en el puerto' + port)