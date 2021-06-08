import { DbAddProduct } from '../../../data/usecases/add-product/db-add-product'
import { AddProduct } from '../../../domain/usecases/add-product'
import { ProductPostgresRepository } from '../../../infra/db/postgresql/product/product-postgres-repository'

export const makeDbAddProduct = (): AddProduct => {
  const productPostgresRepository = new ProductPostgresRepository()
  return new DbAddProduct(productPostgresRepository)
}
