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
            const intercid_id = confirmacao[0].insertId;
            return response.status(200).json({confirma: true, message: 'Cadastro de Internaçao Cid realizado com sucesso', dados: intercid_id});
        } catch (error) {
            console.log(error);
            return response.status(500).json({confirma: false, message: error.message});
        }
    },
    async editarInternacaoCid(request, response){
        try {
            const { intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status } = request.body;
            const { intercid_id } = request.params;
            const sql = 'UPDATE internacao_cid SET intern_id_intercid = ?, cid_id_intercid = ?, intercid_evento = ?, intercid_status = ? WHERE intercid_id = ?;';
            const values = [intern_id_intercid, cid_id_intercid, intercid_evento, intercid_status, intercid_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
    },
    async excluirInternacaoCid(request, response){
        try {
			const { intercid_id } = request.params;
			const sql = 'DELETE FROM internacao_cid WHERE intercid_id = ?';
			const values = [intercid_id];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + intercid_id + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};