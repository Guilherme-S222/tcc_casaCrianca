const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
	//METODO GET
    async listarPacientes(request, response){
        try {
			const { pct_pront = 0 } = request.query;
            const sqlAll = 'SELECT pct_pront, pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status = 1 AS pct_status, pct_tel FROM pacientes;';
            const sqlEdt = 'SELECT pct_pront, pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status = 1 AS pct_status, pct_tel FROM pacientes WHERE pct_pront = ?;'; 
			const sql = pct_pront === 0 ? sqlAll : sqlEdt; 
			const values = [pct_pront];
            const pacientes = await db.query(sql, values);
            const nReg = pacientes[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({nItens: nReg, itens: pacientes[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error.message});
        }
    },
	//METODO POST
    async cadastrarPacientes(request, response){
        try {
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel } = request.body;
			const sql = 'INSERT INTO pacientes (pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel];
			const confirmacao = await db.query(sql, values);
			const pct_pront = confirmacao[0].insertId;
			return response.status(200).json({confirma: true, message: 'Cadastro realizado com sucesso!', dados: pct_pront});
		} catch (error) {
			console.log(error);
			return response.status(500).json({confirma: false, message: error.message});
		}
	},
	//METODO PUT
    async editarPacientes(request, response){
        try {
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel } = request.body;
			const { pct_pront } = request.params;
			// console.log(pct_status);
			const sql = 'UPDATE pacientes SET pct_cpf = ?, pct_nome = ?, pct_sexo = ?, pct_sus = ?, pct_cns = ?, pct_dtnasc = ?, pct_aih = ?, pct_bpc = ?, pct_aposent = ?, pct_filiacao = ?, pct_natural = ?, pct_cor = ?, pct_rg = ?, pct_dataexp = ?, pct_orgemissor = ?, pct_dtcad = ?, pct_status = ?, pct_tel = ? WHERE pct_pront = ?;';
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, parseInt(pct_status), pct_tel, pct_pront];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error.message});
		}
	},
	//METODO DELETE
	// VAI INATIVAR AO INVÉS DE EXCLUIR
    async excluirPacientes(request, response){
        try {
			const { pct_pront } = request.params;
			const sql = 'DELETE FROM pacientes WHERE pct_pront = ?';
			const  values = [pct_pront];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + pct_pront + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error.message});
		}
	},
};

/*
EXPLICANDO O CÓDIGO =>
Controller é um componente que manipula a lógica de negócio e os dados de uma aplicação. Ele é responsável por controlar a maneira como um usuário interage com uma aplicação MVC e possui o fluxo de controle lógico para a aplicação. O controlador determina que resposta será enviada de volta ao usuário quando ele faz uma requisição.
*/
