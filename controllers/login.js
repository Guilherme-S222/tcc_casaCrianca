const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    // Autenticação
    async session(request, response){
        try{
            const { login, senha } = request.body; // Desestruturação para extrair as propriedades login e senha do corpo da requisição.
            //Prepara uma consulta SQL para buscar um usuário com o nome de usuário (user_nome) e senha (user_senha) fornecidos.
            const sql = 'SELECT user_id, user_nome, user_senha, insti_id_user FROM usuario WHERE user_nome = ? AND user_senha = ?;';
            //Prepara os valores a serem substituídos nos placeholders (?) da consulta SQL.
            const values = [login, senha];
            const usuario = await db.query(sql, values); //Executa a consulta SQL no banco de dados usando o módulo db (um objeto que lida com a conexão ao banco de dados).
            let logar;

            //Verifica se a consulta retornou algum usuário. Se sim, define a variável logar como true.
            if (usuario[0].length > 0){
                logar = true;
            }
            //Retorna uma resposta JSON indicando se o login foi bem-sucedido ou não. Se logar for true, retorna os detalhes do usuário; caso contrário, retorna uma mensagem de erro.
            if (logar == true){
                return response.status(200).json({confirma: true, id: usuario[0][0].user_id, nome: usuario[0][0].user_nome});
            } else {
                return response.status(200).json({confirma: false, message: 'Usuário e senha não conferem!'});
            }
        //Em caso de erro durante o processo de autenticação, retorna uma resposta indicando o erro.
        } catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};

/*
EXPLICANDO O CÓDIGO =>
Controller é um componente que manipula a lógica de negócio e os dados de uma aplicação. Ele é responsável por controlar a maneira como um usuário interage com uma aplicação MVC e possui o fluxo de controle lógico para a aplicação. O controlador determina que resposta será enviada de volta ao usuário quando ele faz uma requisição.

Esse código é parte de um controlador (controller) responsável por lidar com a operação de autenticação de usuários (login) em um sistema. 


*/