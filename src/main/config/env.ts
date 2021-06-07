export default {
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'QYvj52@%',
  schema: process.env.DATABSE_SCHEMA ?? 'core',
  psqlHost: process.env.POSTGRES_HOST ?? 'localhost',
  psqlPort: process.env.POSTGRES_PORT ?? 15432,
  user: process.env.POSTGRES_USER ?? 'baggio',
  password: process.env.POSTGRES_PASSWORD ?? 'baggio123',
  database: process.env.POSTGRES_DB ?? 'totvs',
  env: process.env.NODE_ENV ?? 'development'
}
