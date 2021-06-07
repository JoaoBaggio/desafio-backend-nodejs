// Update with your config settings.

export = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: '15432',
      database: 'totvs',
      user: 'baggio',
      password: 'baggio123'
    },
    migrations: {
      tableName: 'db_migrations',
      schemaName: 'public',
      directory: './src/infra/db/postgresql/migrations'
    },
    seeds: {
      directory: './src/infra/db/postgresql/seeds'
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
