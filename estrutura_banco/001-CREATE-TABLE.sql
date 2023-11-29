///////////////////////// CREATE-TABLE /////////////////////////

///////////////////////// SET FOREIGN_KEY_CHECKS=0; //////// SET FOREIGN_KEY_CHECKS=1; //////////////////

CREATE TABLE `pacientes` (
	`pct_pront` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`pct_cpf` varchar(11) NOT NULL UNIQUE,
	`pct_nome` varchar(50) NOT NULL,
	`pct_sexo` varchar(10) NOT NULL,
	`pct_sus` varchar(15) UNIQUE,
	`pct_cns` varchar(15) UNIQUE,
	`pct_dtnasc` DATE NOT NULL,
	`pct_aih` varchar(13),
	`pct_bpc` varchar(10),
	`pct_aposent` varchar(3),
	`pct_filiacao` varchar(50) NOT NULL,
	`pct_natural` varchar(50) NOT NULL,
	`pct_cor` varchar(20) NOT NULL,
	`pct_rg` varchar(8) NOT NULL UNIQUE,
	`pct_dataexp` DATE NOT NULL,
	`pct_orgemissor` varchar(10) NOT NULL,
	`pct_dtcad` DATETIME NOT NULL,
	`pct_status` bit(1) NOT NULL,
	`pct_tel` varchar(11),
	PRIMARY KEY (`pct_pront`)
);

CREATE TABLE `endereco` (
	`enderec_id` int(11) NOT NULL AUTO_INCREMENT,
	`enderec_rua` varchar(50) NOT NULL,
	`enderec_num` int(11) NOT NULL,
	`enderec_bairro` varchar(15) NOT NULL,
	`enderec_complem` varchar(15),
	`enderec_cidade` varchar(25) NOT NULL,
	`enderec_cep` varchar(8) NOT NULL,
	`enderec_estado` char(2) NOT NULL,
	`pct_pront_enderec` int(11) NOT NULL,
	PRIMARY KEY (`enderec_id`)
);

CREATE TABLE `internacao` (
	`intern_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`intern_data` DATETIME NOT NULL,
	`intern_dtsaida` DATETIME NOT NULL,
	`intern_tpsaida` varchar(15) NOT NULL,
	`medic_id_intern` int(10) NOT NULL,
	`user_id_intern` int(11) NOT NULL,
	`pct_pront_intern` int(11) NOT NULL,
	PRIMARY KEY (`intern_id`)
);

CREATE TABLE `cid` (
	`cid_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`cid_cid` varchar(5) NOT NULL UNIQUE,
	`cid_descri` varchar(100) NOT NULL,
	PRIMARY KEY (`cid_id`)
);

CREATE TABLE `prorrogacao` (
	`prorrog_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`prorrog_data` DATETIME NOT NULL,
	`intern_id_prorrog` int(11) NOT NULL,
	`user_id_prorrog` int(11) NOT NULL,
	`medic_id_prorrog` int(10) NOT NULL,
	PRIMARY KEY (`prorrog_id`)
);

CREATE TABLE `transferencia` (
	`transf_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`transf_data` DATETIME NOT NULL,
	`medic_id_transf` int(10) NOT NULL,
	`intern_id_transf` int(11) NOT NULL,
	`user_id_transf` int(11) NOT NULL,
	PRIMARY KEY (`transf_id`)
);

CREATE TABLE `medico` (
	`medic_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`medic_crm` varchar(10) NOT NULL UNIQUE,
	`medic_nome` varchar(20) NOT NULL,
	`medic_cpf` varchar(11) NOT NULL UNIQUE,
	`medic_especi` varchar(50),
	`medic_tel` varchar(11),
	PRIMARY KEY (`medic_id`)
);

CREATE TABLE `usuario` (
	`user_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`user_nome` varchar(15) NOT NULL UNIQUE,
	`user_senha` varchar(30) NOT NULL,
	`insti_id_user` int(11) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `casa_crianca` (
	`insti_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`insti_nome` varchar(50) NOT NULL,
	`insti_cnpj` varchar(14) NOT NULL UNIQUE,
	PRIMARY KEY (`insti_id`)
);

CREATE TABLE `internacao_cid` (
	`intercid_id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`intercid_evento` varchar(100) NOT NULL,
	`intercid_status` varchar(10) NOT NULL,
	`intern_id_intercid` int(11) NOT NULL,
	`cid_id_intercid` int(11) NOT NULL,
	PRIMARY KEY (`intercid_id`)
);

ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk0` FOREIGN KEY (`pct_pront_enderec`) REFERENCES `pacientes`(`pct_pront`);

ALTER TABLE `internacao` ADD CONSTRAINT `internacao_fk0` FOREIGN KEY (`medic_id_intern`) REFERENCES `medico`(`medic_id`);

ALTER TABLE `internacao` ADD CONSTRAINT `internacao_fk1` FOREIGN KEY (`user_id_intern`) REFERENCES `usuario`(`user_id`);

ALTER TABLE `internacao` ADD CONSTRAINT `internacao_fk2` FOREIGN KEY (`pct_pront_intern`) REFERENCES `pacientes`(`pct_pront`);

ALTER TABLE `prorrogacao` ADD CONSTRAINT `prorrogacao_fk0` FOREIGN KEY (`intern_id_prorrog`) REFERENCES `internacao`(`intern_id`);

ALTER TABLE `prorrogacao` ADD CONSTRAINT `prorrogacao_fk1` FOREIGN KEY (`user_id_prorrog`) REFERENCES `usuario`(`user_id`);

ALTER TABLE `prorrogacao` ADD CONSTRAINT `prorrogacao_fk2` FOREIGN KEY (`medic_id_prorrog`) REFERENCES `medico`(`medic_id`);

ALTER TABLE `transferencia` ADD CONSTRAINT `transferencia_fk0` FOREIGN KEY (`medic_id_transf`) REFERENCES `medico`(`medic_id`);

ALTER TABLE `transferencia` ADD CONSTRAINT `transferencia_fk1` FOREIGN KEY (`intern_id_transf`) REFERENCES `internacao`(`intern_id`);

ALTER TABLE `transferencia` ADD CONSTRAINT `transferencia_fk2` FOREIGN KEY (`user_id_transf`) REFERENCES `usuario`(`user_id`);

ALTER TABLE `usuario` ADD CONSTRAINT `usuario_fk0` FOREIGN KEY (`insti_id_user`) REFERENCES `casa_crianca`(`insti_id`);

ALTER TABLE `internacao_cid` ADD CONSTRAINT `internacao_cid_fk0` FOREIGN KEY (`intern_id_intercid`) REFERENCES `internacao`(`intern_id`);

ALTER TABLE `internacao_cid` ADD CONSTRAINT `internacao_cid_fk1` FOREIGN KEY (`cid_id_intercid`) REFERENCES `cid`(`cid_id`);