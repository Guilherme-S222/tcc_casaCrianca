///////////////////////// DELETE /////////////////////////

/// SINTAXE ///

Deletar um único registro:
DELETE FROM clientes
WHERE id = 5;

Deletar registros com base em uma condição:
DELETE FROM clientes
WHERE idade < 18;

Deletar todos os registros de uma tabela:
DELETE FROM logs;

Deletar usando uma subconsulta:
DELETE FROM pedidos
WHERE cliente_id = (SELECT id FROM clientes WHERE nome = 'Nome do Cliente');

Deletar com junção de tabelas:
DELETE p
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
WHERE c.status = 'Inativo';

//////////////