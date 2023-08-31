const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarCid(request, response){
        try {
            const sql = 'SELECT cid_id, cid_cid, cid_descri FROM cid;';
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
            const { cid_cid, cid_descri } = request.body;
            const sql = 'INSERT INTO cid (cid_cid, cid_descri) VALUES (?, ?)';
            const values = [cid_cid, cid_descri];
            const confirmacao = await db.query(sql, values);
            const cid_id = confirmacao[0].insertId;
            return response.status(200).json({confirma:'Cadastro de cid realizado com sucesso', message: cid_id});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCid(request, response){
        try {
            const { cid_cid, cid_descri } = request.body;
            const { cid_id } = request.params;
            const sql = 'UPDATE cid SET cid_cid = ?, cid_descri = ? WHERE cid_id = ?;';
            const values = [cid_cid, cid_descri, cid_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Dados atualizados'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirCid(request, response){
        try {
            const { cid_id } = request.params;
            const sql = 'DELETE FROM cid WHERE cid_id = ?';
            const values = [cid_id];
            await db.query(sql, values);
            return response.status(200).json({confirma:'Sucesso', message: 'Cid com id ' + cid_id + ' excluido com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};