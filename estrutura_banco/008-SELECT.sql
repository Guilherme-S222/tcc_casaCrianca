///////////////////////// SELECT /////////////////////////

/// SINTAXE ///

SELECT * FROM clientes;

SELECT nome, email FROM clientes;

SELECT * FROM clientes WHERE email = 'exemplo@email.com';

//////////////

SELECT pct_pront,pct_cpf,pct_nome,pct_sexo,pct_sus,pct_cns,pct_dtnasc,pct_aih,pct_bpc,pct_aposent,pct_filiacao,pct_natural,pct_cor,pct_rg,pct_dataexp,pct_orgemissor,pct_dtcad FROM pacientes;

SELECT cid_id,cid_cid,cid_descri FROM cid;

SELECT enderec_id,enderec_rua,enderec_num,enderec_bairro,enderec_complem,enderec_cidade,enderec_cep,enderec_estado,endereco.pct_pront_enderec FROM endereco;

SELECT intern_id,intern_data,intern_dtsaida,intern_tpsaida,medic_crm_intern,user_id_intern,pct_pront_intern FROM internacao;

SELECT intercid_id,intern_id_intercid,cid_id_intercid,intercid_evento,intercid_status FROM internacao_cid;

SELECT medic_crm,medic_nome,medic_cpf,medic_especi medic_tel FROM medico;

SELECT pct_pront,pct_cpf,pct_nome,pct_sexo,pct_sus,pct_cns,pct_dtnasc,pct_aih,pct_bpc,pct_aposent,pct_filiacao,pct_natural,pct_cor,pct_rg,pct_dataexp,pct_orgemissor,pct_dtcad FROM pacientes;

SELECT prorrog_id,prorrog_data,intern_id_prorrog,user_id_prorrog,medic_crm_prorrog FROM prorrogacao;

SELECT transferencia.transf_id,medic_crm_transf,intern_id_transf,user_id_transf,transf_data FROM transferencia;

SELECT user_id,user_nome,user_senha,insti_id_user FROM usuario;