import { ProductModel } from '../../../../domain/models/product'

export interface ListProductRepository {
  list: () => Promise <[ProductModel]>
}
