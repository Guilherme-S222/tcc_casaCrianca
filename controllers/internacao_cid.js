const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarInternacaoCid(request, response){
        try {
            const sql = 'SELECT intercid_id,intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status FROM internacao_cid;';
            const internacao_cid = await db.query(sql);
            const nReg = internacao_cid[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': internacao_cid[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInternacaoCid(request, response){
        try {
            return response.status(200).json({confirma:'cadastrarInternação Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInternacaoCid(request, response){
        try {
            return response.status(200).json({confirma:'editarInternação Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirInternacaoCid(request, response){
        try {
            return response.status(200).json({confirma:'excluirInternação Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};