var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// application/json
app.use(bodyParser.json());

// Pasta do roteamento 
require('./app/routes/cliente.routes.js')(app);
 
// Criar o Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Aplicação sendo acessada no link: http://%s:%s", host, port)
 
});