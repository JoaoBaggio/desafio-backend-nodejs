import { Collection } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongoHelper } from '../helpers/mongo-helpers'
import { AccountMongoRepository } from './account'

const mongod = new MongoMemoryServer()

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}
let accountCollection: Collection

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    const uri = await mongod.getUri()
    // const port = await mongod.getPort()
    // const dbPath = await mongod.getDbPath()
    // const dbName = await mongod.getDbName()
    // console.log(uri, port, dbPath, dbPath, dbName)
    await MongoHelper.connect(uri)
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
    await mongod.stop()
  })

  it('Should return an account on add success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@email.com')
    expect(account.password).toBe('any_password')
  })

  it('Should return an account on loadByEmail success', async () => {
    const sut = makeSut()
    await accountCollection.insertOne({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    })
    const account = await sut.loadByEmail('any_email@email.com')
    expect(account).toBeTruthy()
    if (account) {
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.email).toBe('any_email@email.com')
      expect(account.password).toBe('any_password')
    }
  })

  it('Should return null if loadByEmail fails', async () => {
    const sut = makeSut()
    const account = await sut.loadByEmail('invalid_email@email.com')
    expect(account).toBeFalsy()
  })
})
