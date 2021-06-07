// Update with your config settings.

import env from './env'

export = {

  development: {
    client: 'postgresql',
    connection: {
      host: env.psqlHost,
      port: env.psqlPort,
      database: env.database,
      user: env.user,
      password: env.password
    },
    migrations: {
      tableName: 'db_migrations',
      schemaName: 'public',
      directory: '../../infra/db/postgresql/migrations'
    },
    seeds: {
      directory: '../../infra/db/postgresql/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
