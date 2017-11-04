var http = require('http');
var app = require('./config/express');

var porta = process.env.PORT || 8080;


http.createServer(app)
.listen(porta, function() {
	console.log('Servidor iniciado');
});
