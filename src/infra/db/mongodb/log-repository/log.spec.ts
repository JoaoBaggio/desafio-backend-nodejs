import { Collection } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongoHelper } from '../helpers/mongo-helpers'
import { LogMongoRepository } from './log'

const mongod = new MongoMemoryServer()
describe('Log mongo Repository', () => {
  let errorCollection: Collection
  beforeAll(async () => {
    const uri = await mongod.getUri()
    // const port = await mongod.getPort()
    // const dbPath = await mongod.getDbPath()
    // const dbName = await mongod.getDbName()
    // console.log(uri, port, dbPath, dbPath, dbName)
    await MongoHelper.connect(uri)
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
    await mongod.stop()
  })
  it('Should create an error log on sucess', async () => {
    const sut = new LogMongoRepository()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
