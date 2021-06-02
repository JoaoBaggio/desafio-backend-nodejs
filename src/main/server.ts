import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helpers'
import env from './config/env'

const { port, mongoUrl } = env

MongoHelper.connect(mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
  }).catch(console.error)
