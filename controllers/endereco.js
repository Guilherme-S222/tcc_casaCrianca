const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarEndereco(request, response){
        try {
            const sql = 'SELECT enderec_id,enderec_rua,enderec_num,enderec_bairro,enderec_complem,enderec_cidade,enderec_cep,enderec_estado,pct_pront_enderec FROM endereco;';
            const endereco = await db.query(sql);
            const nReg = endereco[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': endereco[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarEndereco(request, response){
        try {
            const { enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec } = request.body;
            const sql = 'INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec];
            const confirmacao = await db.query(sql, values);
            const enderec_id = confirmacao[0].insertId;
            return response.status(200).json({confirma:'Cadastro de endereço realizado com sucesso', message: enderec_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarEndereco(request, response){
        try {
            const { enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec } = request.body;
            const { enderec_id } = request.params;
            const sql = 'UPDATE endereco SET enderec_rua = ?, enderec_num = ?, enderec_bairro = ?, enderec_complem = ?, enderec_cidade = ?, enderec_cep = ?, enderec_estado = ?, pct_pront_enderec = ? WHERE enderec_id = ?;';
            const values = [enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec, enderec_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Dados atualizados'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirEndereco(request, response){
        try {
            const { enderec_id } = request.params;
            const sql = 'DELETE FROM endereco WHERE enderec_id = ?';
            const values = [enderec_id];
            await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Endereço com id ' + enderec_id + ' excluido com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};