
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('balances').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, first_name: 'Bill', last_name: 'McCool', password_hash: 'djskitesad'}),
    knex('users').insert({id: 2, first_name: 'Commie', last_name: 'McStalin', password_hash: '7ckdsnlor3'}),
    knex('users').insert({id: 3, first_name: 'Mao', last_name: 'Liu', password_hash: '1234'}),

    knex('balances').insert({id: 1, balance: 5}),
    knex('balances').insert({id: 2, balance: 11}),
    knex('balances').insert({id: 3, balance: 7})

  );
};
