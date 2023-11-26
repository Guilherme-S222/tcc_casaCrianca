const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async session(request, response){
        try{
            const { login, senha } = request.body;
            const sql = 'SELECT user_id, user_nome, user_senha, insti_id_user FROM usuario WHERE user_nome = ? AND user_senha = ?;';
            const values = [login, senha];
            console.log(values);
            const usuario = await db.query(sql, values);
            let logar;

            if (usuario[0].length > 0){
                logar = true;
            }
            if (logar == true){
                return response.status(200).json({confirma: true, id: usuario[0][0].user_id, nome: usuario[0][0].user_nome});
            } else {
                return response.status(200).json({confirma: false, message: 'Usuário e senha não conferem!'});
            }
        } catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}