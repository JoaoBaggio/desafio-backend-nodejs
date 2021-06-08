import { Model } from 'objection'

export class Product extends Model {
  id: string
  name: string
  description: string
  image: string
  value: number
  factor: string

  static get tableName (): string {
    return 'core.products'
  }

  static get idColumn (): string {
    return 'id'
  }
}
