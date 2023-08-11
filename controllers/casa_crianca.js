const { json } = require("express");
const db = require ("../database/connection");

module.exports = {
    async listarCasaCrianca(request, response){
        try {
            return response.status(200).json({confirma:'CasaCrianca'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};