/////////////////////////INSERT/////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO pacientes (pct_pront,pct_cpf,pct_nome,pct_sexo,pct_sus,pct_cns,pct_dtnasc,pct_aih,pct_bpc,pct_aposent,pct_filiacao,pct_natural,pct_cor,pct_rg,pct_dataexp,pct_orgemissor,pct_dtcad)
VALUES ("","","","","","","","","","","","","","","","","");


INSERT INTO pacientes (pct_pront, pct_cpf, pct_nome, pct_sexo, pct_sus, pct_cns, pct_dtnasc, pct_aih, pct_bpc, pct_aposent, pct_filiacao, pct_natural, pct_cor, pct_rg, pct_dataexp, pct_orgemissor, pct_dtcad, pct_status, pct_tel)
VALUES ('1', '12345678901', 'João da Silva', 'Masculino', '123456789012345', '123456789012345', '1990-05-15', '1234567890123', 'Não', 'Não', 'Maria da Silva', 'São Paulo', 'Branco', '12345678', '2010-02-28', 'SSP', '2023-08-08 08:00:00', 1, '18996000000');




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO endereco
(enderec_id,enderec_rua,enderec_num,enderec_bairro,enderec_complem,enderec_cidade,enderec_cep,enderec_estado,pct_pront_enderec)
VALUES ("","","","","","","","","");


INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec)
VALUES ('Rua das Flores', 123, 'Bairro X', 'Apto 101', 'Tupa', '12345678', 'SP', 1);

INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec)
VALUES ('Rua America', 456, 'Bairro Y', NULL, 'Quata', '23456789', 'SP', 2);

INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec)
VALUES ('Rua Central', 789, 'Bairro Z', 'Casa 5', 'Sao Paulo', '34567890', 'SP', 3);

INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec)
VALUES ('Rua Caigangs', 101, 'Bairro W', NULL, 'Bastos', '45678901', 'SP', 4);

INSERT INTO endereco (enderec_rua, enderec_num, enderec_bairro, enderec_complem, enderec_cidade, enderec_cep, enderec_estado, pct_pront_enderec)
VALUES ('Rua Pereira Barreto', 202, 'Bairro V', 'Bloco C', 'Assis', '56789012', 'SP', 5);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO internacao
(intern_id,intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern)
VALUES ("#","0000-00-00 00:00:00","0000-00-00 00:00:00","###","###","###","#");


INSERT INTO internacao
(intern_id,intern_data,intern_dtsaida,intern_tpsaida,medic_id_intern,user_id_intern,pct_pront_intern)
VALUES ("1","2023-08-01 08:00:00", NULL,NULL,"1","1","1");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO cid
(cid_id,cid_cid,cid_descri)
VALUES ("","","");


INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (1, 'A01', 'Febre tifoide');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (2, 'B20', 'Infecção pelo HIV');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (3, 'C50', 'Tumor maligno da mama');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (4, 'D64', 'Anemia por deficiência de ferro');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (5, 'E11', 'Diabetes mellitus tipo 2');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (6, 'F41', 'Transtornos de ansiedade');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (7, 'G20', 'Doença de Parkinson');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (8, 'I10', 'Hipertensão essencial');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (9, 'J44', 'Doença pulmonar obstrutiva crônica');

INSERT INTO cid (cid_id, cid_cid, cid_descri) 
VALUES (10, 'K21', 'Doença do refluxo gastroesofágico');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO prorrogacao
(prorrog_id,prorrog_data,intern_id_prorrog,user_id_prorrog,medic_id_prorrog)
VALUES ("","","","","");


***
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO transferencia
(transf_id,transf_data,medic_id_transf,intern_id_transf,user_id_transf)
VALUES ("","","","","");


***
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO medico
(medic_id, medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel)
VALUES ("","","","","");


INSERT INTO medico (medic_id, medic_crm, medic_nome, medic_cpf, medic_especi, medic_tel) 
VALUES ('1','12345', 'Dr. João Silva', '12345678901', 'Cardiologia', '11 12345678');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO usuario
(user_id,user_nome,user_senha,insti_id_user)
VALUES ("","","","");


INSERT INTO usuario (user_id, user_nome, user_senha, insti_id_user) 
VALUES (1, 'joao', 'senha123', 1);

INSERT INTO usuario (user_id, user_nome, user_senha, insti_id_user) 
VALUES (2, 'maria', 'senha456', 1);

INSERT INTO usuario (user_id, user_nome, user_senha, insti_id_user) 
VALUES (3, 'pedro', 'senha789', 1);

INSERT INTO usuario (user_id, user_nome, user_senha, insti_id_user) 
VALUES (4, 'ana', 'senha567', 1);

INSERT INTO usuario (user_id, user_nome, user_senha, insti_id_user) 
VALUES (5, 'lucas', 'senha890', 1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO casa_crianca
(insti_id,insti_nome,insti_cnpj)
VALUES ("1","Casa da Crianca de Tupa","12345678000100");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("#","###","###","#","#");


INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("1","Febre tifoide","ATIVO","1","1");

INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("2","Infecção pelo HIV","ATIVO","2","2");

INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("3","Tumor maligno da mama","ATIVO","3","3");

INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("4","Anemia por deficiência de ferro","ATIVO","4","4");

INSERT INTO internacao_cid
(intercid_id, intercid_evento, intercid_status, intern_id_intercid, cid_id_intercid)
VALUES ("5","Diabetes mellitus tipo 2","ATIVO","5","5");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////