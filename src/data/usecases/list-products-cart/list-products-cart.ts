import { KeyServiceRepository } from '../../protocols/key-service/key-service'
import { ListProductFromCart } from '../../../domain/usecases/list-product-from-cart'

export class KsListProductCart implements ListProductFromCart {
  constructor (
    private readonly keyServiceRepository: KeyServiceRepository) {}

  async list (accesstoken: string): Promise<any> {
    const cart = await this.keyServiceRepository.get(accesstoken)
    if (cart) {
      return cart
    } else {
      return []
    }
  }
}
