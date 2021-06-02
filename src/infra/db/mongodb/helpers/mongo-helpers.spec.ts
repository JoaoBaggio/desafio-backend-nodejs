import { MongoHelper as sut } from './mongo-helpers'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

describe('Mongo Helper', () => {
  beforeAll(async () => {
    const uri = await mongod.getUri()
    await sut.connect(uri)
  })
  afterAll(async () => {
    await sut.disconnect()
    await mongod.stop()
  })
  it('Should reconnect if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})
