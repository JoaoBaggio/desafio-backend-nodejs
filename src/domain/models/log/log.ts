import { Model } from 'objection'

export class Log extends Model {
  stack: string

  static get tableName (): string {
    return 'core.logErrors'
  }
}
