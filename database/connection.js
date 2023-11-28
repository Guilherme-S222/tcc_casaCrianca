const mysql = require('mysql2/promise'); 

// const bd_usuario = 'us_des_222_casacri'; // usuário
// const bd_senha = 'ah7372'; // senha
// const bd_servidor = '10.67.22.216'; // servidor

const bd_usuario = 'root'; // usuário server home
const bd_senha = '123456'; // senha server home
const bd_servidor = 'localhost'; // server home

const bd_porta = '3306'; // porta
const bd_banco = 'bd_tcc_des_222_casacri'; // nome do banco
let connection;
    
const config = {
    host: bd_servidor, 
    port: bd_porta, //Default: 3306
    user: bd_usuario, 
    password: bd_senha, 
    database: bd_banco, 
    waitForConnections : true, 
    connectionLimit : 10, //Default: 10 - deixar 100 ou 1000
    queueLimit : 0, 
}

    /* 
        -queueLimit-
        O número máximo de solicitações de conexão que o pool enfileirará 
        antes de retornar um erro do getConnection. Se definido como 0, não 
        há limite para o número de solicitações de conexão enfileiradas. (Padrão: 0)
    */

try {
    connection = mysql.createPool(config);

    console.log('Chamou conexão MySql!'); 
    
} catch (error) { 
    console.log(error); 
} 

module.exports = connection;

/*
Este código Node.js é responsável por criar e configurar uma conexão com um banco de dados MySQL usando o módulo mysql2/promise. 

Esse código segue as práticas ao usar um pool de conexões para melhorar a eficiência na interação com o banco de dados. Além disso, imprime uma mensagem no console para indicar quando a conexão foi estabelecida com sucesso. 
*/