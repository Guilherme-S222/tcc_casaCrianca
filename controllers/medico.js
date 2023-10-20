const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarMedico(request, response){
        try {
            const sql = 'SELECT medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel FROM medico;';
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
			// NÃO ESTÁ FUNCIONANDO! (ERRO 500)
			const { medic_nome,medic_cpf,medic_especi,medic_tel } = request.body;
			const sql = 'INSERT INTO medico (medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel) VALUES (?, ?, ?, ?, ?)';
			const values = [ medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel];
			const confirmacao = await db.query(sql, values);
			const medic_crm = confirmacao[0].insertId;
			return response.status(200).json({confirma: 'Cadastro realizado com sucesso!', message: medic_crm});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async editarMedico(request, response){
        try {
			const { medic_nome, medic_cpf, medic_especi, medic_tel } = request.body;
			const { medic_crm } = request.params;
			const sql = 'UPDATE medico SET medic_nome = ?, medic_cpf = ?, medic_especi = ?, medic_tel = ? WHERE medic_crm = ?;';
			const values = [medic_nome, medic_cpf, medic_especi, medic_tel, medic_crm];
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