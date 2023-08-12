const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarTransferencia(request, response){
        try {
            const sql = 'SELECT transferencia.transf_id,medic_crm_transf,intern_id_transf,user_id_transf,transf_data FROM transferencia;';
            const transferencia = await db.query(sql);
            const nReg = transferencia[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': transferencia[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarTransferencia(request, response){
        try {
            return response.status(200).json({confirma:'Transferência'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarTransferencia(request, response){
        try {
            return response.status(200).json({confirma:'Transferência'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirTransferencia(request, response){
        try {
            return response.status(200).json({confirma:'Transferência'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};