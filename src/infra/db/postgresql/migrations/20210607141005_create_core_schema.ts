import * as Knex from 'knex'
import env from '../../../../main/config/env'

export async function up (knex: Knex): Promise<void> {
  await knex.raw(`CREATE SCHEMA IF NOT EXISTS ${env.schema} AUTHORIZATION "${env.user}";`)
}

export async function down (knex: Knex): Promise<void> {
}
