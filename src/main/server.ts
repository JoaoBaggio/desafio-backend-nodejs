import env from './config/env'

require('../infra/db/postgresql/db_client');

(async () => {
  const { port } = env
  const app = (await import('./config/app')).default
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
})().catch(err => {
  console.error(err)
})
