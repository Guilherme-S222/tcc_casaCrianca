const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarMedico(request, response){
        try {
            const sql = 'SELECT medic_crm,medic_nome,medic_cpf,medic_especi medic_tel FROM medico;';
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
            return response.status(200).json({confirma:'cadastrarMédico'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarMedico(request, response){
        try {
            return response.status(200).json({confirma:'editarMédico'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirMedico(request, response){
        try {
            return response.status(200).json({confirma:'excluirMédico'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};