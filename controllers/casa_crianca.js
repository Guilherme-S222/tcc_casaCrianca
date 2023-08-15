const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarCasaCrianca(request, response){
        try {
            const sql = 'SELECT insti_id, insti_nome, insti_cnpj FROM casa_crianca;';
            const casa_crianca = await db.query(sql);
            const nReg = casa_crianca[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': casa_crianca[0]});
        } catch (error) {
            return response.status(500).json('Erro');
        }
    },
    async cadastrarCasaCrianca(request, response){
        try {
            return response.status(200).json({confirma:'cadastrarCasaCrianca'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCasaCrianca(request, response){
        try {
            return response.status(200).json({confirma:'editarCasaCrianca'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirCasaCrianca(request, response){
        try {
            return response.status(200).json({confirma:'excluirCasaCrianca'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};