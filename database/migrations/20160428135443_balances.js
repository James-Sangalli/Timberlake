exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('balances', function(table) {
    table.increments()
    table.string('balance')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('balances').then(function () {
    console.log('balances table was dropped')
  })
};
