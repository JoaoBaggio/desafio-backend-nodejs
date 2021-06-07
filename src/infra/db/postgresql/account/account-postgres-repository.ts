import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/account/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/update-access-token-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { Account } from '../../../../domain/models/account/account'


export class AccountPostgresRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    return await Account.query().insert(accountData)
  }

  async loadByEmail(email: string): Promise<AccountModel | null> {
    return await Account.query().findOne({email})
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    await Account.query().findById(id).patch({accessToken: token})
  }
}
