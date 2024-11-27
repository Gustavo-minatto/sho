exports.up = function (knex) {
  return knex.schema.createTable('corridas', table => {
    table.increments('id').primary();
    table.integer('motorista_id').unsigned().notNullable();
    table.foreign('motorista_id').references('id').inTable('motoristas').onDelete('CASCADE');
    table.string('origem').notNullable();
    table.string('destino').notNullable();
    table.decimal('distancia', 10, 2).notNullable();
    table.string('duracao').notNullable();
    table.decimal('custo', 10, 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('corridas');
};

