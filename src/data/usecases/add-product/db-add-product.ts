
import { ProductModel } from '../../../domain/models/product'
import { AddProduct, AddProductModel } from '../../../domain/usecases/add-product'
import { ListProduct } from '../../../domain/usecases/list-product'
import { AddProductRepository, ListProductRepository } from '../../protocols/db/product/product-repository'

export class DbProduct implements AddProduct, ListProduct {
  constructor (
    private readonly AddproductRepository: AddProductRepository,
    private readonly ListproductRepository: ListProductRepository
  ) {}

  async add (product: AddProductModel): Promise<ProductModel | null> {
    return await this.AddproductRepository.add(product)
  }

  async list (): Promise<ProductModel[]> {
    const products = await this.ListproductRepository.list()
    return products
  }
}
