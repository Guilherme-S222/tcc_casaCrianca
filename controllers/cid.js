const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarCid(request, response){
        try {
            const sql = 'SELECT cid_id,cid_cid,cid_descri FROM cid;';
            const cid = await db.query(sql);
            const nReg = cid[0].length;
            //console.log ('tam:' + instituicoes[0].length);
            return response.status(200).json({'nItens': nReg, 'Itens': cid[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCid(request, response){
        try {
            return response.status(200).json({confirma:'Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCid(request, response){
        try {
            return response.status(200).json({confirma:'Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirCid(request, response){
        try {
            return response.status(200).json({confirma:'Cid'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};