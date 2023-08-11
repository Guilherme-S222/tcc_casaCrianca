///////////////////////// ALTER-TABLE /////////////////////////

/// SINTAXE ///

Adicionar uma nova coluna:
ALTER TABLE clientes
ADD telefone VARCHAR(15);

Modificar o tipo de dado de uma coluna:
ALTER TABLE clientes
MODIFY idade INT;

Renomear uma coluna:
ALTER TABLE clientes
CHANGE endereco endereco_completo VARCHAR(255);

Excluir uma coluna:
ALTER TABLE clientes
DROP COLUMN telefone;

Adicionar restrição UNIQUE:
ALTER TABLE clientes
ADD CONSTRAINT uk_email UNIQUE (email);

Adicionar chave primária:
ALTER TABLE clientes
ADD PRIMARY KEY (id);

Adicionar chave estrangeira:
ALTER TABLE pedidos
ADD CONSTRAINT fk_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id);

//////////////