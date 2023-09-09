const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarProrrogacao(request, response){
        try {
            const sql = 'SELECT prorrog_id, prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog FROM prorrogacao;';
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
			const { prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog } = request.body;
			const sql = 'INSERT INTO prorrogacao (prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog) VALUES (?, ?, ?, ?)';
			const values = [prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog];
			const confirmacao = await db.query(sql, values);
			const prorrog_id = confirmacao[0].insertId;
			return response.status(200).json({confirma: 'Cadastro realizado com sucesso!', message: prorrog_id});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async editarProrrogacao(request, response){
        try {
			const { prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog } = request.body;
			const { prorrog_id } = request.params;
			const sql = 'UPDATE prorrogacao SET prorrog_data = ?, intern_id_prorrog = ?, user_id_prorrog = ?, medic_crm_prorrog = ? WHERE prorrog_id = ?;';
			const values = [prorrog_data, intern_id_prorrog, user_id_prorrog, medic_crm_prorrog, prorrog_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async excluirProrrogacao(request, response){
        try {
			const { prorrog_id } = request.params;
			const sql = 'DELETE FROM prorrogacao WHERE prorrog_id = ?';
			const  values = [prorrog_id];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + prorrog_id + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};