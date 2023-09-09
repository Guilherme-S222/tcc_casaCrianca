const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarCasaCrianca(request, response){
        try {
            const sql = 'SELECT insti_id, insti_nome, insti_cnpj FROM casa_crianca;';
            const casa_crianca = await db.query(sql);
            const nReg = casa_crianca[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': casa_crianca[0]});
        } catch (error) {
            return response.status(500).json('Erro');
        }
    },
    async cadastrarCasaCrianca(request, response){
        try {

            const { insti_nome, insti_cnpj } = request.body;
            const sql = 'INSERT INTO casa_crianca (insti_nome, insti_cnpj) VALUES (?, ?)';
            const values = [insti_nome, insti_cnpj];
            const confirmacao = await db.query(sql, values);
            const insti_id = confirmacao[0].insertId;
            return response.status(200).json({confirma:'Cadastro de Instituição realizado com sucesso', message: insti_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCasaCrianca(request, response){
        try {
            const { insti_nome, insti_cnpj } = request.body;
            const { insti_id } = request.params;
            const sql = 'UPDATE casa_crianca SET insti_nome = ?, insti_cnpj = ? WHERE insti_id = ?;';
            const values = [insti_nome, insti_cnpj, insti_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Dados atualizados'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirCasaCrianca(request, response){
        try {
            const { insti_id } = request.params;
            const sql = 'DELETE FROM casa_crianca WHERE insti_id = ?';
            const values = [insti_id];
            await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Instituição com id ' + insti_id + ' excluido com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};