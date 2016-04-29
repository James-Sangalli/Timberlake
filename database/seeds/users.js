
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('balances').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, first_name: 'Ezra', last_name: 'Fermanis', password_hash: '1'}),
    knex('users').insert({id: 2, first_name: 'James', last_name: 'Sangali', password_hash: '2'}),
    knex('users').insert({id: 3, first_name: 'Vicken', last_name: 'Liu', password_hash: '3'}),

    knex('balances').insert({id: 1, balance: 10}),
    knex('balances').insert({id: 2, balance: 1}),
    knex('balances').insert({id: 3, balance: 100}),

    knex('history').insert({id:1, userID: 2, transaction: "5", payee:"McDonalds"}),
    knex('history').insert({id:2, userID: 2, transaction: "5", payee:"Burger King"}),
    knex('history').insert({id:3, userID: 2, transaction: "10", payee:"Drugs"}),
    knex('history').insert({id:4, userID: 2, transaction: "10", payee:"Alcohol"}),
    knex('history').insert({id:5, userID: 2, transaction: "20", payee:"KFC"})
  );
};
