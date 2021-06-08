import { DbProduct } from '../../../data/usecases/add-product/db-add-product'
import { ListProduct } from '../../../domain/usecases/list-product'
import { ProductPostgresRepository } from '../../../infra/db/postgresql/product/product-postgres-repository'

export const makeDbListProducts = (): ListProduct => {
  const productPostgresRepository = new ProductPostgresRepository()
  return new DbProduct(productPostgresRepository, productPostgresRepository)
}
