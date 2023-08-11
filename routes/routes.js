const db = require("../database/connection");
const express = require('express');
const router = express.Router();

// importação dos controllers utilizados nas rotas
const casa_crianca = require('../controllers/casa_crianca');
const cid = require('../controllers/cid');
const endereco = require('../controllers/endereco');
const internacaoCid = require('../controllers/internacao_cid');
const internacao = require('../controllers/internacao');
const medico = require('../controllers/medico');
const pacientes = require('../controllers/pacientes');
const prorrogacao = require('../controllers/prorrogacao');
const transferencia = require('../controllers/transferencia');
const usuario = require('../controllers/usuario');

// definição de rotas
router.get('/casa_crianca', casa_crianca.listarCasaCrianca);
//cadastrar
//editar
//excluir

router.get('/cid', cid.listarCid);
//cadastrar
//editar
//excluir

router.get('/endereco', endereco.listarEndereco);
//cadastrar
//editar
//excluir

router.get('/internacao_cid', internacaoCid.listarInternacaoCid);
//cadastrar
//editar
//excluir

router.get('/internacao', internacao.listarInternacao);
//cadastrar
//editar
//excluir

router.get('/medico', medico.listarMedico);
//cadastrar
//editar
//excluir

router.get('/pacientes', pacientes.listarPacientes);
//cadastrar
//editar
//excluir

router.get('/prorrogacao', prorrogacao.listarProrrogacao);
//cadastrar
//editar
//excluir

router.get('/transferencia', transferencia.listarTransferencia);
//cadastrar
//editar
//excluir

router.get('/usuario', usuario.listarUsuario);
//cadastrar
//editar
//excluir



module.exports = router;