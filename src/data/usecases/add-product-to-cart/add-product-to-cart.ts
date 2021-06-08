import { AddProductToCart } from '../../../domain/usecases/add-product-to-cart'
import { Product } from '../../../domain/models/product/product'
import { KeyServiceRepository } from '../../protocols/key-service/key-service'

export class KsAddProductToCart implements AddProductToCart {
  constructor (
    private readonly keyServiceRepository: KeyServiceRepository) {}

  async add (accesstoken: string, id: string): Promise<any> {
    const cart = await this.keyServiceRepository.get(accesstoken)
    if (cart) {
      const index = cart.findIndex(x => x.id === Number(id))
      if (index >= 0) {
        cart[index].amount = Number(cart[index].amount) + 1
      } else {
        const product = await Product.query().findById(id)
        const cartProduct = {
          id: product.id,
          name: product.name,
          image: product.image,
          value: product.value,
          description: product.description,
          factor: product.factor,
          amount: 1
        }
        cart.push(cartProduct)
      }
      await this.keyServiceRepository.set(accesstoken, JSON.stringify(cart))
    } else {
      const product = await Product.query().findById(id)
      const cartProduct = {
        id: product.id,
        name: product.name,
        image: product.image,
        value: product.value,
        description: product.description,
        factor: product.factor,
        amount: 1
      }
      await this.keyServiceRepository.set(accesstoken, JSON.stringify([cartProduct]))
    }
  }
}
