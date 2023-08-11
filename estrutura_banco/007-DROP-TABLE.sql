///////////////////////// DROP-TABLE /////////////////////////

/// SINTAXE ///

Deletar uma tabela:
DROP TABLE produtos;

Deletar uma tabela se ela existir:
DROP TABLE IF EXISTS produtos;

Deletar múltiplas tabelas:
DROP TABLE tabela1, tabela2, tabela3;

Deletar uma tabela com restrições:
DROP TABLE clientes CASCADE;

Obs.: Se a tabela tiver chaves estrangeiras referenciadas por outras tabelas, você pode precisar usar a cláusula CASCADE para remover também as referências.

//////////////