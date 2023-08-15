const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarInternacao(request, response){
        try {
            const sql = 'SELECT intern_id,intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern FROM internacao;';
            const internacao = await db.query(sql);
            const nReg = internacao[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': internacao[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInternacao(request, response){
        try {
            return response.status(200).json({confirma:'cadastrarInternação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInternacao(request, response){
        try {
            return response.status(200).json({confirma:'editarInternação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async exluirInternacao(request, response){
        try {
            return response.status(200).json({confirma:'excluirInternação'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};