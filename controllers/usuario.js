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
            return response.status(200).json({confirma:'Usuário'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsuario(request, response){
        try {
            return response.status(200).json({confirma:'Usuário'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirUsuario(request, response){
        try {
            return response.status(200).json({confirma:'Usuário'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};