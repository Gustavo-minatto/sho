exports.up = function(knex) {
  return knex.schema.createTable('motoristas', table => {
    table.increments('id').primary(); 
    table.string('nome').notNullable();
    table.text('descricao').notNullable();
    table.string('veiculo').notNullable(); 
    table.string('avaliacao').notNullable();
    table.decimal('custo_viagem', 10, 2).notNullable();
    table.string('imagem_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('motoristas'); 
};
