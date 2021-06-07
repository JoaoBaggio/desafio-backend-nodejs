import { Model } from 'objection'

export class Account extends Model {
  id: string
  name: string
  email: string
  password: string
  accessToken?: string

  static get tableName (): string {
    return 'core.account'
  }

  static get idColumn (): string {
    return 'id'
  }
}
