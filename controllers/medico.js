const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarMedico(request, response){
        try {
            return response.status(200).json({confirma:'Médico'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};