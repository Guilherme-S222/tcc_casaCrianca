///////////////////////// UPDATE /////////////////////////

/// SINTAXE ///

Atualizar um único registro:
UPDATE clientes
SET nome = 'Novo Nome'
WHERE id = 1;

Atualizar vários registros:
UPDATE clientes
SET status = 'Ativo'
WHERE idade > 25;

Atualizar com base em valores de outra tabela:
UPDATE produtos p
INNER JOIN novos_precos np ON p.codigo = np.codigo_produto
SET p.preco = np.novo_preco;

Atualizar valores usando cálculos:
UPDATE funcionarios
SET salario = salario * 1.10;

Atualizar várias colunas:
UPDATE pedidos
SET status = 'Concluído', data_entrega = '2023-08-11'
WHERE id = 1001;

//////////////