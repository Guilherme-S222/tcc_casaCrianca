const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarPacientes(request, response){
        try {
            const sql = 'SELECT pct_pront, pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad FROM pacientes;';
            const pacientes = await db.query(sql);
            const nReg = pacientes[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': pacientes[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarPacientes(request, response){
        try {
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad } = request.body;
			const sql = 'INSERT INTO pacientes (pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad];
			const confirmacao = await db.query(sql, values);
			const pct_pront = confirmacao[0].insertId;
			return response.status(200).json({confirma: 'Cadastro realizado com sucesso!', message: pct_pront});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async editarPacientes(request, response){
        try {
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad } = request.body;
			const { pct_pront } = request.params;
			const sql = 'UPDATE pacientes SET pct_cpf = ?, pct_nome = ?, pct_sexo = ?, pct_sus = ?, pct_cns = ?, pct_dtnasc = ?, pct_aih = ?, pct_bpc = ?, pct_aposent = ?, pct_filiacao = ?, pct_natural = ?, pct_cor = ?, pct_rg = ?, pct_dataexp = ?, pct_orgemissor = ?, pct_dtcad = ? WHERE pct_pront = ?;';
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_pront];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
    async excluirPacientes(request, response){
        try {
			const { pct_pront } = request.params;
			const sql = 'DELETE FROM pacientes WHERE pct_pront = ?';
			const  values = [pct_pront];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + pct_pront + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
};