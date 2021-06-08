
import { ProductModel } from '../../../domain/models/product'
import { AddProduct, AddProductModel } from '../../../domain/usecases/add-product'
import { InvalidParamError } from '../../../presentation/errors'
import { AddProductRepository } from '../../protocols/db/product/add-product-repository'

export class DbAddProduct implements AddProduct {
  constructor (
    private readonly addProductRepository: AddProductRepository
  ) {}

  async add (product: AddProductModel): Promise<ProductModel | null> {
    const { factor } = product
    if (!['A', 'B', 'C'].includes(factor)) return await new Promise((resolve, reject) => reject(new InvalidParamError('factor')))
    return await this.addProductRepository.add(product)
  }
}
