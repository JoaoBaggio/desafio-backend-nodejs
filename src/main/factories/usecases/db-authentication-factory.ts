
import env from '../../config/env'
import { DbAuthentication } from '../../../data/usecases/authentication/db-authentication'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter/jwt-adapter'
import { Authentication } from '../../../domain/usecases/authentication'
import { AccountPostgresRepository } from '../../../infra/db/postgresql/account/account-postgres-repository'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const accountPostgresRepository = new AccountPostgresRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountPostgresRepository, bcryptAdapter, jwtAdapter, accountPostgresRepository)
}
