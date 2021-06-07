import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').createTable('logErrors', (table: Knex.TableBuilder) => {
    table.increments('id').primary().index()
    table.text('stack')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').dropTable('logErrors')
}
