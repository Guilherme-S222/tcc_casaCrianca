const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarMedico(request, response){
        try {
            const sql = 'SELECT medic_id, medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel FROM medico;';
            const medico = await db.query(sql);
            const nReg = medico[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': medico[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarMedico(request, response){
        try {
			const { medic_crm, medic_nome,medic_cpf,medic_especi,medic_tel } = request.body;
			const sql = 'INSERT INTO medico (medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel) VALUES (?, ?, ?, ?, ?)';
			const values = [ medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel];
			const confirmacao = await db.query(sql, values);
			const medic_id = confirmacao[0].insertId;
			return response.status(200).json({confirma: true, message: 'Cadastro realizado com sucesso!', dados: medic_id});
		} catch (error) {
			console.log(error.message);
			return response.status(500).json({confirma: false, message: error.message});
		}
	},
    async editarMedico(request, response){
        try {
			const { medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel } = request.body;
			const { medic_id } = request.params;
			const sql = 'UPDATE medico SET medic_crm, medic_nome = ?, medic_cpf = ?, medic_especi = ?, medic_tel = ? WHERE medic_id = ?;';
			const values = [medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel, medic_id];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async excluirMedico(request, response){
        try {
			const { medic_crm } = request.params;
			const sql = 'DELETE FROM medico WHERE medic_crm = ?';
			const  values = [medic_crm];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + medic_crm + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};

/*
EXPLICANDO O CÓDIGO =>
Controller é um componente que manipula a lógica de negócio e os dados de uma aplicação. Ele é responsável por controlar a maneira como um usuário interage com uma aplicação MVC e possui o fluxo de controle lógico para a aplicação. O controlador determina que resposta será enviada de volta ao usuário quando ele faz uma requisição.
*/