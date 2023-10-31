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
			const { intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern } = request.body;
			const sql = 'INSERT INTO internacao (intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern) VALUES (?, ?, ?, ?, ?, ?)';
			const values = [intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern];
			const confirmacao = await db.query(sql, values);
			const intern_id = confirmacao[0].insertId;
			return response.status(200).json({confirma: true, message: 'Internação cadastrada com sucesso!', dados: intern_id});
		} catch (error) {
			console.log(error);
			return response.status(500).json({confirma: false, message: error.message});
		}
	},
    async editarInternacao(request, response){
        try {
			const { intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern } = request.body;
			const { intern_id } = request.params;
			const sql = 'UPDATE internacao SET intern_data = ?, intern_dtsaida = ?, intern_tpsaida = ?, medic_crm_intern = ?, user_id_intern = ?, pct_pront_intern = ? WHERE intern_id = ?;';
			const values = [intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern, intern_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async exluirInternacao(request, response){
        try {
			const { intern_id } = request.params;
			const sql = 'DELETE FROM internacao WHERE intern_id = ?';
			const  values = [intern_id];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + intern_id + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};