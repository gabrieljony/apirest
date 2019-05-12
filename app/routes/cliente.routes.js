module.exports = function(app) {

    // Controladores - CONTROLLER
    var clientes = require('../controllers/cliente.controller.js');
 
    // Criar um Cliente - CREATE
    app.post('/api/clientes', clientes.create);
 
    // Recuperar todo o Cliente - RETRIEVE
    app.get('/api/clientes', clientes.findAll);
 
    // Recuperar um único Cliente por ID - RETRIEVE
    app.get('/api/clientes/:id', clientes.findOne);
 
    // Atualizar um Cliente com o ID - UPDATE
    app.put('/api/clientes/:id', clientes.update);
 
    // Excluir um Cliente com ID - DELETE
    app.delete('/api/clientes/:id', clientes.delete);

}