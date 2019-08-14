
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('authors', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.integer('birth_year');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('publication_year');
      table.integer('author_id').unsigned()
      table.foreign('author_id').references('authors.id')

      table.timestamps(true,true);
    })

  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('books'),
    knex.schema.dropTable('authors')
  ])
};
