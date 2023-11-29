const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarInternacao(request, response){
        try {
			const { intern_id = 0 } = request.query;
			const sqlAll = 'SELECT i.intern_id, i.intern_data, i.intern_dtsaida, i.intern_tpsaida, p.pct_pront, p.pct_nome, ic.intercid_status, c.cid_cid, c.cid_descri, m.medic_nome, u.user_nome FROM internacao i JOIN pacientes p ON i.pct_pront_intern = p.pct_pront JOIN internacao_cid ic ON i.intern_id = ic.intern_id_intercid JOIN cid c ON i.intern_id = c.cid_id JOIN medico m ON i.medic_id_intern = m.medic_id JOIN usuario u ON i.user_id_intern = u.user_id;';
			const sqlEdt = 'SELECT i.intern_id, i.intern_data, i.intern_dtsaida, i.intern_tpsaida, p.pct_pront, p.pct_nome, ic.intercid_status, c.cid_cid, c.cid_descri, m.medic_nome, u.user_nome FROM internacao i JOIN pacientes p ON i.pct_pront_intern = p.pct_pront JOIN internacao_cid ic ON i.intern_id = ic.intern_id_intercid JOIN cid c ON i.intern_id = c.cid_id JOIN medico m ON i.medic_id_intern = m.medic_id JOIN usuario u ON i.user_id_intern = u.user_id WHERE intern_id = ?;'; // SELECT COM ALIAS
			const sql = intern_id === 0 ? sqlAll : sqlEdt;
			const values = [intern_id];
            const internacao = await db.query(sql, values);
            const nReg = internacao[0].length;
            return response.status(200).json({'nItens': nReg, 'Itens': internacao[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInternacao(request, response){
        try {
			const { intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern } = request.body;
			const sql = 'INSERT INTO internacao (intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern) VALUES (?, ?, ?, ?, ?, ?)';
			const values = [intern_data,null,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern];
			console.log(values);
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
			const { intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern } = request.body;
			const { intern_id } = request.params;
			const sql = 'UPDATE internacao SET intern_data = ?, intern_dtsaida = ?, intern_tpsaida = ?, medic_id_intern = ?, user_id_intern = ?, pct_pront_intern = ? WHERE intern_id = ?;';
			const values = [intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern, intern_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async excluirInternacao(request, response){
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

/*
EXPLICANDO O CÓDIGO =>
Controller é um componente que manipula a lógica de negócio e os dados de uma aplicação. Ele é responsável por controlar a maneira como um usuário interage com uma aplicação MVC e possui o fluxo de controle lógico para a aplicação. O controlador determina que resposta será enviada de volta ao usuário quando ele faz uma requisição.
*/