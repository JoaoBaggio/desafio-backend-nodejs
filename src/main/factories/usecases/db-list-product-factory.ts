import { DbListProduct } from '../../../data/usecases/list-products/db-list-product'
import { ListProduct } from '../../../domain/usecases/list-product'
import { ProductPostgresRepository } from '../../../infra/db/postgresql/product/product-postgres-repository'

export const makeDbListProducts = (): ListProduct => {
  const productPostgresRepository = new ProductPostgresRepository()
  return new DbListProduct(productPostgresRepository)
}
