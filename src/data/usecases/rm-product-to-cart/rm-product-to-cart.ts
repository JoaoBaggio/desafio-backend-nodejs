import { KeyServiceRepository } from '../../protocols/key-service/key-service'
import { RemoveProductToCart } from '../../../domain/usecases/remove-product-to-cart'

export class KsRemoveProductToCart implements RemoveProductToCart {
  constructor (
    private readonly keyServiceRepository: KeyServiceRepository) {}

  async remove (accesstoken: string, id: string): Promise<any> {
    const cart = await this.keyServiceRepository.get(accesstoken)
    if (cart) {
      const index = cart.findIndex(x => x.id === Number(id))
      if (index >= 0) {
        if (Number(cart[index].amount) > 1) { cart[index].amount = String(Number(cart[index].amount) - 1) }
        if (Number(cart[index].amount) === 1) { cart.splice(index, 1) }
        await this.keyServiceRepository.set(accesstoken, JSON.stringify(cart))
      }
    } else {
      return []
    }
    return []
  }
}
