const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarProrrogacao(request, response){
        try {
            const sql = 'SELECT prorrog_id,prorrog_data,intern_id_prorrog,user_id_prorrog,medic_crm_prorrog FROM prorrogacao;';
            const prorrogacao = await db.query(sql);
            const nReg = prorrogacao[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': prorrogacao[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarProrrogacao(request, response){
        try {
            return response.status(200).json({confirma:'Prorrogação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarProrrogacao(request, response){
        try {
            return response.status(200).json({confirma:'Prorrogação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirProrrogacao(request, response){
        try {
            return response.status(200).json({confirma:'Prorrogação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};