import { MongoMemoryServer } from 'mongodb-memory-server'
import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helpers'
import app from '../config/app'

const mongod = new MongoMemoryServer()

describe('Login Routes', () => {
  beforeAll(async () => {
    const uri = await mongod.getUri()
    // const port = await mongod.getPort()
    // const dbPath = await mongod.getDbPath()
    // const dbName = await mongod.getDbName()
    // console.log(uri, port, dbPath, dbPath, dbName)
    await MongoHelper.connect(uri)
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
    await mongod.stop()
  })
  describe('POST /signup', () => {
    it('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Joao',
          email: 'joao@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })
})
