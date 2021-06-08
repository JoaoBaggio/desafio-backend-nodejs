
import { ProductModel } from '../../../domain/models/product'
import { AddProduct, AddProductModel } from '../../../domain/usecases/add-product'
import { AddProductRepository } from '../../protocols/db/product/product-repository'

export class DbAddProduct implements AddProduct {
  constructor (
    private readonly addproductRepository: AddProductRepository
  ) {}

  async add (product: AddProductModel): Promise<ProductModel | null> {
    return await this.addproductRepository.add(product)
  }
}
