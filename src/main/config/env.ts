export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongo:27017/clean-node-api',
  port: process.env.MONGO_PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'QYvj52@%',
  schema: process.env.DATABSE_SCHEMA ?? 'core',
  psqlHost: process.env.POSTGRES_HOST ?? 'localhost',
  psqlPort: process.env.POSTGRES_PORT ?? 15432,
  user: process.env.POSTGRES_USER ?? 'baggio',
  password: process.env.POSTGRES_PASSWORD ?? 'baggio123',
  database: process.env.POSTGRES_DB ?? 'totvs'
}
