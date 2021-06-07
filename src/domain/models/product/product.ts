import { Model } from 'objection'

export class Product extends Model {
  static get tableName (): string {
    return 'core.products'
  }

  static get idColumn (): string {
    return 'id'
  }
}
