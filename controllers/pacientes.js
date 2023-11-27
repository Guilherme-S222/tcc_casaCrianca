const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
	//METODO GET - Listagem de pacientes
    async listarPacientes(request, response){
		//Este método trata da operação de listar pacientes. Ele aceita um parâmetro opcional pct_pront para listar um paciente específico. A consulta SQL é ajustada com base nesse parâmetro.
        try {
			const { pct_pront = 0 } = request.query;
			// Consulta SQL para listar todos os pacientes
            const sqlAll = 'SELECT pct_pront, pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status = 1 AS pct_status, pct_tel FROM pacientes;';
            // Consulta SQL para listar um paciente específico
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
	//METODO POST - Cadastro de pacientes
    async cadastrarPacientes(request, response){
		//Este método trata da operação de cadastrar um novo paciente. Ele obtém os dados do corpo da requisição, executa uma consulta SQL para inserir os dados no banco e retorna uma confirmação.
        try {
			// Desestruturação para obter dados do corpo da requisição
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel } = request.body;
			// Consulta SQL para inserir um novo paciente
			const sql = 'INSERT INTO pacientes (pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
			// Valores a serem inseridos
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel];
			const confirmacao = await db.query(sql, values);
			const pct_pront = confirmacao[0].insertId;
			return response.status(200).json({confirma: true, message: 'Cadastro realizado com sucesso!', dados: pct_pront});
		} catch (error) {
			console.log(error);
			return response.status(500).json({confirma: false, message: error.message});
		}
	},
	//METODO PATCH - Edição de pacientes
    async editarPacientes(request, response){
		//Este método trata da operação de editar (atualizar) os dados de um paciente. Ele obtém os dados do corpo da requisição e o parâmetro da URL (pct_pront), executa uma consulta SQL para atualizar os dados no banco e retorna uma confirmação.
        try {
			// Desestruturação para obter dados do corpo da requisição
			const { pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel } = request.body;
			const { pct_pront } = request.params;
			// Consulta SQL para atualizar dados do paciente
			const sql = 'UPDATE pacientes SET pct_cpf = ?, pct_nome = ?, pct_sexo = ?, pct_sus = ?, pct_cns = ?, pct_dtnasc = ?, pct_aih = ?, pct_bpc = ?, pct_aposent = ?, pct_filiacao = ?, pct_natural = ?, pct_cor = ?, pct_rg = ?, pct_dataexp = ?, pct_orgemissor = ?, pct_dtcad = ?, pct_status = ?, pct_tel = ? WHERE pct_pront = ?;';
			// Valores a serem atualizados
			const values = [pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, parseInt(pct_status), pct_tel, pct_pront];
			const atualizacao = await db.query (sql, values);
			return response.status(200).json({confirma: 'Cadastro atualizado com sucesso!', message: 'Dados atualizados'});
		} catch (error) {
			return response.status(500).json({confirma: 'Erro', message: error.message});
		}
	},
	//METODO DELETE - Exclusão de paciente
	// VAMOS INATIVAR AO INVÉS DE EXCLUIR
    async excluirPacientes(request, response){
		//Este método trata da operação de excluir (inativar) um paciente. Ele obtém o parâmetro da URL (pct_pront), executa uma consulta SQL para excluir o paciente no banco e retorna uma confirmação.
        try {
			const { pct_pront } = request.params;
			// Consulta SQL para excluir um paciente
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

O padrão de arquitetura de software MVC (Model-View-Controller) é um paradigma que separa a lógica de uma aplicação em três componentes principais, proporcionando uma estrutura organizada e modular.

Model (Modelo):
Representa a camada de dados e a lógica de negócios da aplicação. É responsável por acessar e manipular os dados, bem como notificar as Views sobre quaisquer alterações nos dados. O Modelo encapsula a lógica específica do domínio e as operações relacionadas aos dados.

View (Visão):
Representa a camada de apresentação da aplicação. A View é responsável por exibir os dados do Modelo ao usuário e por coletar a entrada do usuário. Ela não contém lógica de negócios; em vez disso, ela reflete o estado atual do Modelo. Uma aplicação pode ter várias Views para apresentar os dados de maneiras diferentes.

Controller (Controlador):
Atua como intermediário entre o Modelo e a View. O Controlador responde a eventos do usuário e modifica o estado do Modelo ou da View conforme necessário. Ele contém a lógica de controle e coordena as interações entre o Modelo e a View. O Controlador é responsável por interpretar as entradas do usuário, manipular o Modelo e atualizar a View.

Ao dividir a aplicação em três componentes distintos, o padrão MVC ajuda a manter o código mais organizado, modular e facilita a manutenção e evolução da aplicação. Cada componente tem uma responsabilidade clara e pode ser desenvolvido, testado e modificado de forma independente. Isso também facilita a reutilização de código, já que os componentes podem ser substituídos ou estendidos sem afetar os outros.

O código utiliza o módulo mysql2/promise para interagir com o banco de dados de forma assíncrona.

As operações são envolvidas em blocos try-catch para tratamento de erros.

As respostas são formatadas como objetos JSON com informações relevantes para a operação realizada.
*/
