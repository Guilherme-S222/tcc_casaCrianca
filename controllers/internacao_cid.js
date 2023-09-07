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
            const { intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status } = request.body;
            const sql = 'INSERT INTO internacao_cid (intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status) VALUES (?, ?, ?, ?)';
            const values = [intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status];
            const confirmacao = await db.query(sql, values);
            const intercid_id = confirmacao [0].insertId;
            return response.status(200).json({confirma:'Cadastro de Internaçao Cid realizado com sucesso', message: intercid_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInternacaoCid(request, response){
        try {
            const { intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status } = request.body;
            const { intercid_id } = request.params;
            const sql = 'UPDATE internacao_cid SET intern_id_intercid = ?, cid_id_intercid = ?, intercid_evento = ?, intercid_status = ?;';
            //PAREI AQUI
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