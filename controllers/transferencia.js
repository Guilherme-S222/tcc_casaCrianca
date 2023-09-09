const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarTransferencia(request, response){
        try {
            const sql = 'SELECT transf_id, medic_crm_transf, intern_id_transf, user_id_transf, transf_data FROM transferencia;';
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
			const { medic_crm_transf, intern_id_transf, user_id_transf, transf_data } = request.body;
			const sql = 'INSERT INTO transferencia (medic_crm_transf, intern_id_transf, user_id_transf, transf_data) VALUES (?, ?, ?, ?)';
			const values = [medic_crm_transf, intern_id_transf, user_id_transf, transf_data];
			const confirmacao = await db.query(sql, values);
			const transf_id = confirmacao[0].insertId;
			return response.status(200).json({confirma: 'Cadastro realizado com sucesso!', message: transf_id});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async editarTransferencia(request, response){
        try {
			const { medic_crm_transf, intern_id_transf, user_id_transf, transf_data } = request.body;
			const { transf_id } = request.params;
			const sql = 'UPDATE transferencia SET medic_crm_transf = ?, intern_id_transf = ?, user_id_transf = ?, transf_data = ? WHERE transf_id = ?;';
			const values = [medic_crm_transf, intern_id_transf, user_id_transf, transf_data, transf_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async excluirTransferencia(request, response){
        try {
			const { transf_id } = request.params;
			const sql = 'DELETE FROM transferencia WHERE transf_id = ?';
			const  values = [transf_id];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + transf_id + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};