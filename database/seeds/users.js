
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('balances').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, first_name: 'Bill', last_name: 'McCool', password_hash: '1'}),
    knex('users').insert({id: 2, first_name: 'Commie', last_name: 'McStalin', password_hash: '7ckdsnlor3'}),
    knex('users').insert({id: 3, first_name: 'Mao', last_name: 'Liu', password_hash: '1234'}),

    knex('balances').insert({id: 1, balance: 5}),
    knex('balances').insert({id: 2, balance: 11}),
    knex('balances').insert({id: 3, balance: 7}),

    knex('history').insert({id:1, userID: 1, transaction: "5", payee:"McStalin"}),
    knex('history').insert({id:2, userID: 2, transaction: "5", payee:"McCool"}),
    knex('history').insert({id:3, userID: 1, transaction: "10", payee:"McStalin"}),
    knex('history').insert({id:4, userID: 1, transaction: "10", payee:"McStalin"}),
    knex('history').insert({id:5, userID: 2, transaction: "20", payee:"McCool"})
  );
};
