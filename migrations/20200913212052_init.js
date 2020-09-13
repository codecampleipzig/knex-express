
exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.timestamps(false, true)
  })

  await knex.schema.createTable('plants', (table) => {
    table.increments()
    table.string('name').unique().notNullable()
    table.string('description')
    table.string('image')
    table.integer('ownerId').unsigned().references('users.id')
    table.boolean('available').defaultTo(true)
    table.timestamps(false, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('plants')
  await knex.schema.dropTable('users')
}
