const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarPacientes(request, response){
        try {
            const sql = 'SELECT pct_pront,pct_cpf,pct_nome,pct_sexo,pct_sus,pct_cns,pct_dtnasc,pct_aih,pct_bpc,pct_aposent,pct_filiacao,pct_natural,pct_cor,pct_rg,pct_dataexp,pct_orgemissor,pct_dtcad FROM pacientes;';
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
            return response.status(200).json({confirma:'cadastrarPacientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPacientes(request, response){
        try {
            return response.status(200).json({confirma:'editarPacientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirPacientes(request, response){
        try {
            return response.status(200).json({confirma:'excluirPacientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};