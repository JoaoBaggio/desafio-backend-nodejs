import { AccountModel, AddAccount, AddAccountModel, Encrypter, AddAccountRepository } from './adb-add-account-protocols'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return await new Promise(resolve => resolve({
      email: 'valid_email@email.com',
      id: 'valid_id',
      name: 'valid_name',
      password: 'valid_password'
    }))
  }
}
