/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { KeyServiceRepository } from '../../protocols/key-service/key-service'
import { ListProductFromCart } from '../../../domain/usecases/list-product-from-cart'

export class KsListProductCart implements ListProductFromCart {
  constructor (
    private readonly keyServiceRepository: KeyServiceRepository) {}

  async list (accesstoken: string): Promise<any> {
    const cart = await this.keyServiceRepository.get(accesstoken)
    if (cart) {
      return this.addMetrics(cart)
    } else {
      return []
    }
  }

  addMetrics (cart: any[]): any[] {
    let totalWithOutDiscont: number = 0
    let totalProductsFactorA: number = 0
    let totalProductsFactorB: number = 0
    let totalProductsFactorC: number = 0
    for (const product of cart) {
      totalWithOutDiscont = totalWithOutDiscont + product.value * product.amount
      switch (product.factor) {
        case 'A':
          totalProductsFactorA = totalProductsFactorA + product.amount
          break
        case 'B':
          totalProductsFactorB = totalProductsFactorB + product.amount
          break
        case 'C':
          totalProductsFactorC = totalProductsFactorC + product.amount
          break
      }
    }
    const totalItens = totalProductsFactorA + totalProductsFactorB + totalProductsFactorC
    const discont = Math.min(30,
      Math.min(totalProductsFactorA, 5) +
      Math.min(totalProductsFactorB * 5, 15) +
      Math.min(totalProductsFactorC * 10, 30))
    const total = (1 - (discont / 100)) * totalWithOutDiscont
    cart.push({ total, discont, totalWithOutDiscont, totalItens })
    return cart
  }
}
