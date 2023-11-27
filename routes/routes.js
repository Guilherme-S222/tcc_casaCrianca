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
const login = require('../controllers/login');

// definição de rotas
router.get('/casa_crianca', casa_crianca.listarCasaCrianca);
router.post('/casa_crianca', casa_crianca.cadastrarCasaCrianca);
router.patch('/casa_crianca/:insti_id', casa_crianca.editarCasaCrianca);
router.delete('/casa_crianca/:insti_id', casa_crianca.excluirCasaCrianca);

router.get('/cid', cid.listarCid);
router.post('/cid', cid.cadastrarCid);
router.patch('/cid/:cid_id', cid.editarCid);
router.delete('/cid/:cid_id', cid.excluirCid);

router.get('/endereco', endereco.listarEndereco);
router.post('/endereco', endereco.cadastrarEndereco);
router.patch('/endereco/:enderec_id', endereco.editarEndereco);
router.delete('/endereco/:enderec_id', endereco.excluirEndereco);

router.get('/internacao_cid', internacaoCid.listarInternacaoCid);
router.post('/internacao_cid', internacaoCid.cadastrarInternacaoCid);
router.patch('/internacao_cid/:intercid_id', internacaoCid.editarInternacaoCid);
router.delete('/internacao_cid/:intercid_id', internacaoCid.excluirInternacaoCid);

router.get('/internacao', internacao.listarInternacao);
router.post('/internacao', internacao.cadastrarInternacao);
router.patch('/internacao/:intern_id', internacao.editarInternacao);
router.delete('/internacao/:intern_id', internacao.exluirInternacao);

router.get('/medico', medico.listarMedico);
router.post('/medico', medico.cadastrarMedico);
router.patch('/medico/:medic_crm', medico.editarMedico);
router.delete('/medico/:medic_crm', medico.excluirMedico);

router.get('/pacientes', pacientes.listarPacientes);
// router.get('/pacientes/:pct_pront', pacientes.listarPacientes);
router.post('/pacientes', pacientes.cadastrarPacientes);
router.patch('/pacientes/:pct_pront', pacientes.editarPacientes);
router.delete('/pacientes/:pct_pront', pacientes.excluirPacientes);

router.get('/prorrogacao', prorrogacao.listarProrrogacao);
router.post('/prorrogacao', prorrogacao.cadastrarProrrogacao);
router.patch('/prorrogacao/:prorrog_id', prorrogacao.editarProrrogacao);
router.delete('/prorrogacao/:prorrog_id', prorrogacao.excluirProrrogacao);

router.get('/transferencia', transferencia.listarTransferencia);
router.post('/transferencia', transferencia.cadastrarTransferencia);
router.patch('/transferencia/:transf_id', transferencia.editarTransferencia);
router.delete('/transferencia/:transf_id', transferencia.excluirTransferencia);

router.get('/usuario', usuario.listarUsuario);
router.post('/usuario', usuario.cadastrarUsuario);
router.patch('/usuario/:user_id', usuario.editarUsuario);
router.delete('/usuario/:user_id', usuario.excluirUsuario);

router.post('/login', login.session);

module.exports = router;

/* Explicação do código:

### Rotas (Routes):

No contexto de uma aplicação web, as rotas são URLs específicas que o servidor pode lidar. Em uma aplicação Node.js com Express.js, as rotas são definidas para especificar como o servidor deve responder a diferentes requisições HTTP em URLs específicos.

### Express.js:

É um framework web para Node.js que simplifica o processo de criação de aplicativos web e APIs. Ele fornece funcionalidades para definição de rotas, manipulação de requisições e respostas, e muito mais.

### Router (Roteador):

O objeto express.Router() é uma instância de um sistema de roteamento do Express. Ele permite que você defina grupos de rotas e as use em diferentes partes do seu aplicativo.

Definição de Rotas:

Para cada entidade no sistema (casa_crianca, cid, endereco, etc.), há rotas HTTP definidas para diferentes operações CRUD (Create, Read, Update, Delete).
*/