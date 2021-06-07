import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').createTable('account', (table: Knex.TableBuilder) => {
    table.increments('id').primary().index()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('accessToken')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').dropTable('account')
}
