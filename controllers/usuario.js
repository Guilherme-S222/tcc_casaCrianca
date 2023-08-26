const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarUsuario(request, response){
        try {
            const sql = 'SELECT user_id,user_nome,user_senha,insti_id_user FROM usuario;';
            const usuario = await db.query(sql);
            const nReg = usuario[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': usuario[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsuario(request, response){
        try {
                //parâmetros passados via corpo da requisição
            const { user_nome,user_senha,insti_id_user } = request.body;
                //instrução sql para inserção
            const sql = 'INSERT INTO usuario (user_nome, user_senha, insti_id_user) VALUES (?, ?, ?)';
                //definição de array com os parâmetros que receberam os valores do front-end
            const values = [user_nome, user_senha, insti_id_user];
                //executa a instrução de inserção no banco de dados
            const confirmacao = await db.query(sql, values);
                //Exibe o id do registro inserido
            const user_id = confirmacao[0].insertId;
                //mensagem de retorno no formato JSON
            return response.status(200).json({confirma:'Cadastro de usuário realizado com sucesso', message: user_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsuario(request, response){
        try {
            const { user_nome,user_senha,insti_id_user } = request.body;
            const { user_id } = request.params;
            const sql = 'UPDATE usuario SET user_nome = ?, user_senha = ?, insti_id_user = ? WHERE user_id = ?;';
            const values = [user_nome,user_senha,insti_id_user, user_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json({confirma:'Sucesso', message: 'Dados atualizados'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirUsuario(request, response){
        try {
            const { user_id } = request.params;
            
            const sql  = 'DELETE FROM usuario WHERE user_id = ?';
            const values = [user_id];
            await db.query(sql, values);

            return response.status(200).json({confirma:'Sucesso', message:'Usuario com id ' + user_id + ' excluído com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};