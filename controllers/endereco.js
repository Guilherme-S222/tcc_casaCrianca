const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarEndereco(request, response){
        try {
            const sql = 'SELECT enderec_id,enderec_rua,enderec_num,enderec_bairro,enderec_complem,enderec_cidade,enderec_cep,enderec_estado,endereco.pct_pront_enderec FROM endereco;';
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
            return response.status(200).json({confirma:'Endereço'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarEndereco(request, response){
        try {
            return response.status(200).json({confirma:'Endereço'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirEndereco(request, response){
        try {
            return response.status(200).json({confirma:'Endereço'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};