
exports.seed = async function (knex) {
  await knex('plants').del()
  await knex('users').del()

  const users = [{ id: 1, email: 'gabe@codecampleipzig.de', password: 'Lotte123' },
    { id: 2, email: 'franz@codecampleipzig.de', password: 'Lotte123' },
    { id: 3, email: 'taylor@codecampleipzig.de', password: 'Lotte123' }]

  await knex('users').insert(users)

  const dbUsers = await knex('users').select()

  await knex('plants').insert([
    { id: 1, name: 'Cactus', ownerId: dbUsers[0].id },
    { id: 2, name: 'Monstera', ownerId: dbUsers[1].id },
    { id: 3, name: 'Banana Plant', ownerId: dbUsers[2].id }
  ])
}
