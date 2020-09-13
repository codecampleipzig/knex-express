
exports.seed = async function (knex) {
  await knex('plants').del()
  await knex('users').del()

  const users = [{ email: 'gabe@codecampleipzig.de', password: 'Lotte123' },
    { email: 'franz@codecampleipzig.de', password: 'Lotte123' },
    { email: 'taylor@codecampleipzig.de', password: 'Lotte123' }]

  await knex('users').insert(users)

  const dbUsers = await knex('users').select()

  await knex('plants').insert([
    { name: 'Cactus', ownerId: dbUsers[0].id },
    { name: 'Monstera', ownerId: dbUsers[1].id },
    { name: 'Banana Plant', ownerId: dbUsers[2].id }
  ])
}
