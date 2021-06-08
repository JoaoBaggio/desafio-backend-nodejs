
import { ProductModel } from '../../../domain/models/product'
import { ListProduct } from '../../../domain/usecases/list-product'
import { ListProductRepository } from '../../protocols/db/product/product-repository'

export class DbListProduct implements ListProduct {
  constructor (
    private readonly listProductRepository: ListProductRepository
  ) {}

  async list (): Promise<ProductModel[] | null> {
    return await this.listProductRepository.list()
  }
}
