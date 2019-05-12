var clientes = {
    cliente1: {
      nome: "Robert",
      sobrenome: "Stark",
      idade: 40,
      id: 1
    },
    cliente2: {
      nome: "Cris",
      sobrenome: "Evans",
      idade: 35,
      id: 2
    },
    cliente3: {
      nome: "Cristian",
      sobrenome: "Ronaldo",
      idade: 37,
      id: 3
    },
    cliente4: {
      nome: "Peter",
      sobrenome: "Paker",
      idade: 17,
      id: 4
    }
  }

// Criar
exports.create = function(req, res) {
    var novoCliente = req.body;
    clientes["cliente" + novoCliente.id] = novoCliente;
    console.log("--->Novo Cliente:\n" + JSON.stringify(novoCliente, null, 4));
    console.log("--->Depois do Post, clientes:\n" + JSON.stringify(clientes, null, 4));
    res.end("Post realizado com sucesso: \n" + JSON.stringify(novoCliente, null, 4));
};

// Buscar por todos
exports.findAll = function(req, res) {
    console.log("--->Buscar Todos: \n" + JSON.stringify(clientes, null, 4));
    res.end("Buscar todos clientes: \n" + JSON.stringify(clientes, null, 4));  
};

// Buscar por um apenas
exports.findOne = function(req, res) {
    var cliente = clientes["cliente" + req.params.id];
    console.log("--->Buscar cliente: \n" + JSON.stringify(cliente, null, 4));
    res.end( "Buscar pelo cliente:\n" + JSON.stringify(cliente, null, 4));
};

// Atualizar
exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updateCliente = req.body; 
    if(clientes["cliente" + id] != null){

        // Atualização dos dados
        clientes["cliente" + id] = updateCliente;

        console.log("--->Atualização realizada com sucesso, clientes: \n" + JSON.stringify(clientes, null, 4))  

        // Retorno
        res.end("Atualização realizada com sucesso! \n" + JSON.stringify(updateCliente, null, 4));
    }else{
        res.end("Não existe esse cliente.\n:" + JSON.stringify(updateCliente, null, 4));
    }
};

// Deletar
exports.delete = function(req, res) {
    var deletarCliente = clientes["cliente" + req.params.id];
    delete clientes["cliente" + req.params.id];
    console.log("--->Depois de deletar, lista de cliente:\n" + JSON.stringify(clientes, null, 4) );
    res.end( "Deletado o cliente: \n" + JSON.stringify(deletarCliente, null, 4));
};
