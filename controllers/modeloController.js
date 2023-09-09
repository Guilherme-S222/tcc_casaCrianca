/*
READ
	async listarTABELA(resquest, response) {
		try {
			const sql = 'SELECT #ID, ###, ###, ###, ### FROM TABELA;';
			const TABELA = await db.query(sql);
			const nReg = TABELA[0].length;
			return response.status(200).json({'nItens': nReg, 'Itens': TABELA[0]});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},

-----------------------------------------------------------------------------------------------------------------------------

INSERT
	async cadastrarTABELA(request, response) {
		try {
			const { ###, ###, ###, ### } = request.body;
			const sql = 'INSERT INTO TABELA (###, ###, ###, ###) VALUES (?, ?, ?, ?)';
			const values = [###, ###, ###, ###];
			const confirmacao = await db.query(sql, values);
			const #ID = confirmacao[0].insertId;
			return response.status(200).json({confirma: 'Cadastro realizado com sucesso!', message: #ID});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},

-----------------------------------------------------------------------------------------------------------------------------

UPDATE
	async editarTABELA(request, response) {
		try {
			const { ###, ###, ###, ### } = request.body;
			const { #ID } = request.params;
			const sql = 'UPDATE TABELA SET ### = ?, ### = ?, ### = ?, ### = ? WHERE #ID = ?;';
			const values = [###, ###, ###, ###, #ID];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},

-----------------------------------------------------------------------------------------------------------------------------

DELETE
	async excluirTABELA(request, response) {
		try {
			const { #ID } = request.params;
			const sql = 'DELETE FROM TABELA WHERE #ID = ?';
			const  values = [#ID];
			await db.query(sql, values);
			return response.status(200).json ({confirma:'Cadastro excluído com sucesso!', message: 'Registo com id ' + #ID + ' excluído com sucesso'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error});
		}
	},
*/