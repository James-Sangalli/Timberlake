exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('history', function(table) {
    table.increments()
    table.timestamps()
    table.string('userID')
    table.string('transaction')
    table.string('payee')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('history').then(function () {
    console.log('balances table was dropped')
  })
};
