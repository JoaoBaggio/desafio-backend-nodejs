import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').createTable('products', (table: Knex.TableBuilder) => {
    table.increments('id').primary().index()
    table.string('name').unique().notNullable()
    table.text('description').notNullable()
    table.text('image').notNullable()
    table.enu('factor', ['A', 'B', 'C']).notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.withSchema('core').dropTable('products')
}
